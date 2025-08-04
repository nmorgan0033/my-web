<?php
// Test database connection
$servername = "localhost";
$username = "root";
$password = "";

try {
    // Connect without database first
    $conn = new mysqli($servername, $username, $password);
    
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    echo "MySQL connection successful!<br>";
    
    // Create database
    $dbname = "login_system";
    $sql = "CREATE DATABASE IF NOT EXISTS $dbname";
    if ($conn->query($sql)) {
        echo "Database '$dbname' created/verified successfully!<br>";
    } else {
        echo "Error creating database: " . $conn->error . "<br>";
    }
    
    // Select database
    $conn->select_db($dbname);
    echo "Database selected successfully!<br>";
    
    // Create table
    $sql = "CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        name VARCHAR(100) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )";
    
    if ($conn->query($sql)) {
        echo "Users table created/verified successfully!<br>";
    } else {
        echo "Error creating table: " . $conn->error . "<br>";
    }
    
    echo "Setup complete! You can now use login.php";
    
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
?> 