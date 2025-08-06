<?php
    // Simple file-based user storage
    $users_file = "users.json";
    
    // Initialize users file if it doesn't exist
    if (!file_exists($users_file)) {
        file_put_contents($users_file, json_encode([]));
    }
    
    function getUsers() {
        global $users_file;
        $data = file_get_contents($users_file);
        return json_decode($data, true) ?: [];
    }
    
    function saveUsers($users) {
        global $users_file;
        file_put_contents($users_file, json_encode($users, JSON_PRETTY_PRINT));
    }
    
    function addUser($name, $email, $password) {
        $users = getUsers();
        $users[] = [
            'id' => count($users) + 1,
            'name' => $name,
            'email' => $email,
            'password' => password_hash($password, PASSWORD_DEFAULT),
            'created_at' => date('Y-m-d H:i:s')
        ];
        saveUsers($users);
        return true;
    }
    
    function findUserByEmail($email) {
        $users = getUsers();
        foreach ($users as $user) {
            if ($user['email'] === $email) {
                return $user;
            }
        }
        return null;
    }
?>