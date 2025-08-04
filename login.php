<?php
    //include("database.php");
?>
<?php
$message = '';
$messageClass = '';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
$email = $_POST["email"] ?? '';
$password = $_POST["password"] ?? '';
$remember = isset($_POST["remember"]) ? true : false;

// Basic validation
if (!empty($email) && !empty($password)) {
// In a real application, you would validate against a database here
// For demo purposes, we'll just show the submitted data

$message = "Form submitted successfully!<br><br>";
$message .= "<strong>Submitted Data:</strong><br>";
$message .= "Email: " . htmlspecialchars($email) . "<br>";
$message .= "Password: " . str_repeat('*', strlen($password)) . "<br>";
$message .= "Remember me: " . ($remember ? 'Yes' : 'No') . "<br><br>";
$message .= "Note: This is a demo. In a real application, you would validate credentials against a database.";
$messageClass = 'success';
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
<title>Login Result</title>
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
.btn {
background-color: #007bff;
color: white;
padding: 10px 20px;
text-decoration: none;
border-radius: 5px;
display: inline-block;
margin-top: 20px;
}
.btn:hover {
background-color: #0056b3;
}
.data-display {
background-color: #f8f9fa;
padding: 15px;
border-radius: 5px;
margin: 15px 0;
border-left: 4px solid #007bff;
}
</style>
</head>
<body>
<div class="container">
<h1>Login Form Result</h1>

<?php if (!empty($message)): ?>
<div class="message <?php echo $messageClass; ?>">
<?php echo $message; ?>
</div>
<?php endif; ?>

<a href="index.html" class="btn">Back to Homepage</a>
</div>
</body>
</html>

