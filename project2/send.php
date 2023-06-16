
<?php

$username = $_POST['username'];
$userphone = $_POST['userphone'];
$question = $_POST['question'];

$username = htmlspecialchars($username);
$userphone = htmlspecialchars($userphone);
$question = htmlspecialchars($question);

$username = urldecode($username);
$userphone = urldecode($userphone);
$question = urldecode($question);

if (mail("mmpro.grupp@mail.ru",
		"Новое письмо",
		"Имя: ".$username."\n".
		"Телефон: ".$userphone."\n".
		"Сообщение: ".$question."\n".
		"From: no-reply@mydomian.ru \r\n")
) {
	echo ('Письмо успешно отправлено');
}
else {
	echo ('Упс! Что-то пошло не так');
}

?>