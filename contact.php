<?php
// Get data from form 
$name = $_POST['name'];
$email= $_POST['mail'];
$message= $_POST['message'];
 
$to = "magudesh2006@gmail.com";
$subject = "This is the subject line";
 
$txt ="Name.: ". $name . "\r\n  Email.: "
    . $email . "\r\n Message .:" . $message;
 
if($email != NULL) {
    mail($to, $subject, $txt);
}
 
// Redirect to
header("Location:index.html");
?>