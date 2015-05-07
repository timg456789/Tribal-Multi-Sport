<?php

$fullName = $_POST["fullName"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

$message = $fullName + "\r\n" + $email + "\r\n\r\n" + $message;
$message = wordwrap($message, 70);

if( isset($_POST['destinationOverride']) ) {
	// Need to be able to test the form at least once.
	mail("timg456789@yahoo.com", $subject, $message);
}
else {
	mail("tribalmultisport@gmail.com", $subject, $message);
}

header('/pages/contact.html?formStep=thankYou');

?>