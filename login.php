<?php
    include("database.php");
    
    $message = '';
    $messageClass = '';

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $email = $_POST["email"] ?? '';
        $password = $_POST["password"] ?? '';
        $remember = isset($_POST["remember"]) ? true : false;

        // Basic validation
        if (!empty($email) && !empty($password)) {
            // Check credentials
            $user = findUserByEmail($email);
            
            if ($user && password_verify($password, $user['password'])) {
                $message = "Login successful! Welcome, " . htmlspecialchars($user['name']);
                $messageClass = 'success';
                
                // Start session and store user data
                session_start();
                $_SESSION['user_id'] = $user['id'];
                $_SESSION['user_name'] = $user['name'];
                $_SESSION['user_email'] = $user['email'];
                
            } else {
                $message = "Invalid email or password.";
                $messageClass = 'error';
            }
        } else {
            $message = "Please fill in all required fields.";
            $messageClass = 'error';
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 500px;
            margin: 50px auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .form-group {
            margin-bottom: 20px;
        }
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        input[type="email"], input[type="password"] {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 16px;
        }
        .checkbox-group {
            margin-bottom: 20px;
        }
        .btn {
            background-color: #007bff;
            color: white;
            padding: 12px 24px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            width: 100%;
        }
        .btn:hover {
            background-color: #0056b3;
        }
        .message {
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 20px;
        }
        .success {
            background-color: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }
        .error {
            background-color: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Login</h1>
        
        <?php if (!empty($message)): ?>
            <div class="message <?php echo $messageClass; ?>">
                <?php echo $message; ?>
            </div>
        <?php endif; ?>

        <form method="POST" action="">
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" value="<?php echo htmlspecialchars($_POST['email'] ?? ''); ?>" required>
            </div>
            
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>
            </div>
            
            <div class="checkbox-group">
                <label>
                    <input type="checkbox" name="remember"> Remember me
                </label>
            </div>
            
            <button type="submit" class="btn">Login</button>
        </form>
        
        <p style="text-align: center; margin-top: 20px;">
            <a href="register.php">Create new account</a>
        </p>
    </div>
</body>
</html>

