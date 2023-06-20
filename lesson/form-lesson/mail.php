<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['username'];
$phone = $_POST['userphone'];
$question = $_POST['text'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'mmpro.grupp@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = '5qyEQ8DreEGePZGjLxn9'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('mmpro.grupp@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('echerevatova@list.ru');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка на обратную связь';
$mail->Body    = '
Пользователь оставил свои контактные данные: <br>
Имя: ' . $name . ' <br>
Телефон: ' . $phone . ' <br>
Сообщение: ' . $question . '';
$mail->AltBody = 'Альтернативный текст';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: thank-you.html');
}
?>