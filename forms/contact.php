<?php

$fullName = $_POST["fullName"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

$message = $fullName + "\r\n" + $email + "\r\n\r\n" + $message;

$message = wordwrap($message, 70);

mail("tribalmultisport@gmail.com", $subject, $message);

header('/pages/contact.html?formStep=thankYou');

?>