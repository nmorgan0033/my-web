<?php
session_start();

// Check if user is logged in
if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
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
        .welcome {
            background-color: #d4edda;
            color: #155724;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 20px;
        }
        .btn {
            background-color: #dc3545;
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            display: inline-block;
        }
        .btn:hover {
            background-color: #c82333;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="welcome">
            <h1>Welcome to Dashboard</h1>
            <p>Hello, <?php echo htmlspecialchars($_SESSION['user_name']); ?>!</p>
            <p>Email: <?php echo htmlspecialchars($_SESSION['user_email']); ?></p>
        </div>
        
        <p>This is your protected dashboard area. You can only see this if you're logged in.</p>
        
        <a href="logout.php" class="btn">Logout</a>
        <a href="index.html" class="btn" style="background-color: #007bff; margin-left: 10px;">Back to Homepage</a>
    </div>
</body>
</html> 