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
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Validar si los campos están completos
    if (empty($username) || empty($email) || empty($password)) {
        echo json_encode(['error' => 'Todos los campos son obligatorios.']);
        exit;
    }

    // Encriptar la contraseña
    $hashedPassword = password_hash($password, PASSWORD_BCRYPT);

    try {
        // Inserción en la base de datos
        $stmt = $pdo->prepare('INSERT INTO usuarios (nombre, correo, password) VALUES (:username, :email, :password)');
        $stmt->execute([
            ':username' => $username,
            ':email' => $email,
            ':password' => $hashedPassword,
        ]);
        echo json_encode(['success' => 'Usuario registrado con éxito.']);
    } catch (PDOException $e) {
        // Manejo de errores
        if ($e->getCode() === '23000') { // Violación de clave única (usuario o correo ya existen)
            echo json_encode(['error' => 'El usuario o el correo ya están registrados.']);
        } else {
            echo json_encode(['error' => 'Error al registrar el usuario.']);
        }
    }
}
?>
