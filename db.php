<?php
$host = 'localhost';
$dbname = 'pwa_app'; // Cambia esto por el nombre de tu base de datos
$username = 'root'; // Cambia esto según tu configuración
$password = '';     // Cambia esto según tu configuración

try {
    // Conectar al servidor MySQL sin especificar una base de datos
    $pdo = new PDO("mysql:host=$host", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Verificar si la base de datos existe
    $stmt = $pdo->query("SHOW DATABASES LIKE '$dbname'");
    $databaseExists = $stmt->fetch();

    if (!$databaseExists) {
        // Crear la base de datos si no existe
        $pdo->exec("CREATE DATABASE `$dbname` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");
        echo "Base de datos '$dbname' creada correctamente.<br>";
    }

    // Conectarse a la base de datos ya existente o recién creada
    $pdo->exec("USE `$dbname`");

    // Crear la tabla de usuarios si no existe
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS usuarios (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nombre VARCHAR(100) NOT NULL,
            correo VARCHAR(100) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ) ENGINE=InnoDB;
    ");
    echo "Tabla 'usuarios' creada o ya existente.<br>";
} catch (PDOException $e) {
    die('Error al conectar o configurar la base de datos: ' . $e->getMessage());
}
?>
