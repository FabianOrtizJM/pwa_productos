<?php
require 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Validar si los campos están completos
    if (empty($username) || empty($email) || empty($password)) {
        echo json_encode(['error' => 'Todos los campos son obligatorios.']);
        exit;
    }

    // Encriptar contraseña
    $hashedPassword = password_hash($password, PASSWORD_BCRYPT);

    try {
        $stmt = $pdo->prepare('INSERT INTO usuarios (username, email, password) VALUES (:username, :email, :password)');
        $stmt->execute([
            ':username' => $username,
            ':email' => $email,
            ':password' => $hashedPassword,
        ]);
        echo json_encode(['success' => 'Usuario registrado con éxito.']);
    } catch (PDOException $e) {
        if ($e->getCode() === '23000') { // Código para violación de clave única
            echo json_encode(['error' => 'El usuario o email ya están registrados.']);
        } else {
            echo json_encode(['error' => 'Error al registrar el usuario.']);
        }
    }
}
?>
