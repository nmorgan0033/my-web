<?php
    include("database.php");
    header('Content-Type: application/json');
    
    $response = ['success' => false, 'message' => '', 'redirect' => ''];
    
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $action = $_POST['action'] ?? '';
        
        if ($action === 'login') {
            $email = $_POST['email'] ?? '';
            $password = $_POST['password'] ?? '';
            
            if (!empty($email) && !empty($password)) {
                $user = findUserByEmail($email);
                
                if ($user && password_verify($password, $user['password'])) {
                    session_start();
                    $_SESSION['user_id'] = $user['id'];
                    $_SESSION['user_name'] = $user['name'];
                    $_SESSION['user_email'] = $user['email'];
                    
                    $response['success'] = true;
                    $response['message'] = 'Login successful! Welcome, ' . $user['name'];
                    $response['user'] = [
                        'name' => $user['name'],
                        'email' => $user['email']
                    ];
                } else {
                    $response['message'] = 'Invalid email or password.';
                }
            } else {
                $response['message'] = 'Please fill in all fields.';
            }
        }
        
        elseif ($action === 'register') {
            $name = $_POST['name'] ?? '';
            $email = $_POST['email'] ?? '';
            $password = $_POST['password'] ?? '';
            
            if (empty($name) || empty($email) || empty($password)) {
                $response['message'] = 'Please fill in all fields.';
            } elseif (strlen($password) < 6) {
                $response['message'] = 'Password must be at least 6 characters long.';
            } else {
                $existing_user = findUserByEmail($email);
                
                if ($existing_user) {
                    $response['message'] = 'Email already registered. Please use a different email.';
                } else {
                    if (addUser($name, $email, $password)) {
                        $response['success'] = true;
                        $response['message'] = 'Registration successful! You can now login.';
                    } else {
                        $response['message'] = 'Registration failed. Please try again.';
                    }
                }
            }
        }
    }
    
    echo json_encode($response);
?> 