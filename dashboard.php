<?php
session_start();
if (!isset($_SESSION['user'])) {
    header("Location: login.php");
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
  <title>Admin Dashboard</title>
  <link rel="stylesheet" href="style/main.css">
</head>
<body>
  <h2>Welcome Admin!</h2>
  <p>This is your dashboard.</p>
  <a href="logout.php">Logout</a>
</body>
</html>
