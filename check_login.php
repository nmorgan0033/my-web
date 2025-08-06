<?php
session_start();
header('Content-Type: application/json');

if (isset($_SESSION['user_id'])) {
    echo json_encode([
        'logged_in' => true,
        'user' => [
            'name' => $_SESSION['user_name'],
            'email' => $_SESSION['user_email']
        ]
    ]);
} else {
    echo json_encode(['logged_in' => false]);
}
?> 