<?php
if(empty($_POST['name']) || empty($_POST['phone']) || empty($_POST['message']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
  http_response_code(500);
  exit();
}

$name = strip_tags(htmlspecialchars($_POST['name']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));

$to = "assgradnja@hotmail.com";
$subject = "Kontakt:  $name";
$body = "Dobili ste novu poruku sa Vašeg web sajta.\n\n"."Podaci:\nIme i Prezime: $name\nEmail: $email\nTelefon: $phone\nPoruka: $message";

if(!mail($to, $subject, $body))
  http_response_code(500);
?>
