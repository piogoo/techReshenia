<?php

$phoneRegExp= "/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/";
$emailRegexp= "/^.+@.+\..+$/i";
$nameRegExp = "/^[a-zа-яё\d]{1}[a-zа-яё\d\s]*[a-zа-яё\d]{1}$/i";


$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];

$errMSG = "";
// Check phone
if (empty($phone)) {
  $errMSG1 = '<span style="color: rgb(186,0,0)"> Введите номер телефона </span>';
} elseif (!preg_match($phoneRegExp, $phone)) {
  $errMSG1 = '<span style="color: rgb(186,0,0)"> Некорректный номер телефона </span>';
} else {
  $phone = $_POST['phone'];
}
// Check name
if (empty($name)) {
  $errMSG = '<span style="color: rgb(186,0,0)"> Введите имя </span>';
} elseif (preg_match($nameRegExp, $name)){
  $errMSG = '<span style="color: rgb(186,0,0)"> Некорректное имя </span>';
} else {
  $name = $_POST['name'];
}
// Check Email
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
  $email = $_POST["email"];
} else {
  $errorMSG = '<span style="color: rgb(186,0,0)"> Неверный формат email </span>';
}
// Отправка письма
$to  = "<vitalikshubnikov@mail.ru> " ;
// $to .= "mail2@example.com>";
$subject = "Заголовок письма";
$message =  "<p> Номер телефона : < $phone > </p>" ;

$headers  = "Content-type: text/html; charset=windows-1251 \r\n";
$headers .= "From: От кого письмо <$name>\r\n";
$headers .= "Reply-To: $email  \r\n";

// конец письма

if (empty($errMSG || $errMSG1)) {
  $msg = "Name:".$name.", Phone:".$phone.", Email:".$email;
  echo json_encode(['code'=> 200, 'msg'=>$msg]);
  mail($to, $subject, $message, $headers);
  exit;
} else {
  echo json_encode(['code'=>400, 'msg'=>$errMSG, 'msg_phone'=>$errMSG1]);
}
