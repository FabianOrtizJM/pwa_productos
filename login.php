<?php
// Manejo de los encabezados CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Si es una solicitud OPTIONS, respondemos sin hacer nada más
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

require 'db.php';  // Asegúrate de que 'db.php' tenga la configuración correcta de la base de datos

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener los datos del formulario
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Validar si los campos están completos
    if (empty($email) || empty($password)) {
        echo json_encode(['error' => 'Todos los campos son obligatorios.']);
        exit;
    }

    try {
        // Verificar si el usuario existe
        $stmt = $pdo->prepare('SELECT * FROM usuarios WHERE correo = :email');
        $stmt->execute([':email' => $email]);
        $user = $stmt->fetch();

        if (!$user) {
            echo json_encode(['error' => 'Usuario no encontrado.']);
            exit;
        }

        // Verificar la contraseña
        if (!password_verify($password, $user['password'])) {
            echo json_encode(['error' => 'Contraseña incorrecta.']);
            exit;
        }

        echo json_encode(['success' => 'Inicio de sesión exitoso.']);

    } catch (PDOException $e) {
        echo json_encode(['error' => 'Error al iniciar sesión.']);
    }
}
?>
