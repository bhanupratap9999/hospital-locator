<?php
session_start();
$uname = $_POST['username'];
$pass = $_POST['password'];

if ($uname === "admin" && $pass === "1234") {
    $_SESSION['user'] = "admin";
    header("Location: ../dashboard.php");
} else {
    echo "Invalid login!";
}
?>

