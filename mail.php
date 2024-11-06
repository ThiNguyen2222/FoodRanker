<?php
header("Content-Type: text/plain");

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$mailheader = "From: " . $name . "<" . $email . ">\r\n";
$recipient = "koalanpham@gmail.com";

// Check if the mail function succeeds
if(mail($recipient, $subject, $message, $mailheader)) {
    echo "success"; // Send a success response
} else {
    echo "Error sending email."; // Send an error response
}
?>
