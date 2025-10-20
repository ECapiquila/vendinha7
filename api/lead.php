<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Payload inválido.']);
    exit;
}

$name = isset($data['name']) ? trim((string) $data['name']) : '';
$whatsapp = isset($data['whatsapp']) ? trim((string) $data['whatsapp']) : '';
$utmSource = isset($data['utm_source']) ? trim((string) $data['utm_source']) : '';
$utmMedium = isset($data['utm_medium']) ? trim((string) $data['utm_medium']) : '';
$utmCampaign = isset($data['utm_campaign']) ? trim((string) $data['utm_campaign']) : '';

$errors = [];
if (mb_strlen($name) < 3) {
    $errors[] = 'Nome inválido.';
}
if (!preg_match('/^\+244\d{9}$/', $whatsapp)) {
    $errors[] = 'WhatsApp inválido.';
}

if ($errors) {
    http_response_code(422);
    echo json_encode(['status' => 'error', 'errors' => $errors]);
    exit;
}

$message = sprintf(
    "Novo Lead - Clube Sete\nNome: %s\nWhatsApp: %s\nUTM: %s | %s | %s",
    $name,
    $whatsapp,
    $utmSource ?: '—',
    $utmMedium ?: '—',
    $utmCampaign ?: '—'
);

$token = getenv('WHATSAPP_TOKEN') ?: '';
$phoneId = getenv('WHATSAPP_PHONE_ID') ?: '';
$toNumber = '+244925521667';
$apiUrl = $phoneId ? sprintf('https://graph.facebook.com/v17.0/%s/messages', $phoneId) : '';
$sent = false;
$responseBody = null;

if ($token && $phoneId) {
    $payload = [
        'messaging_product' => 'whatsapp',
        'to' => $toNumber,
        'type' => 'text',
        'text' => ['body' => $message]
    ];

    $ch = curl_init($apiUrl);
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_HTTPHEADER => [
            'Content-Type: application/json',
            'Authorization: Bearer ' . $token
        ],
        CURLOPT_POSTFIELDS => json_encode($payload, JSON_UNESCAPED_UNICODE),
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 10
    ]);

    $responseBody = curl_exec($ch);
    $curlError = curl_error($ch);
    $httpCode = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($curlError) {
        error_log('[lead.php] Erro cURL: ' . $curlError);
    }

    if ($httpCode >= 200 && $httpCode < 300) {
        $sent = true;
    } else {
        error_log('[lead.php] Falha ao enviar mensagem WhatsApp: HTTP ' . $httpCode . ' Resposta: ' . $responseBody);
    }
} else {
    error_log('[lead.php] Configuração WhatsApp ausente. Defina WHATSAPP_TOKEN e WHATSAPP_PHONE_ID.');
}

http_response_code(200);

echo json_encode([
    'status' => 'ok',
    'whatsapp_delivered' => $sent,
    'redirect' => 'https://clubesete.com/singup'
]);
