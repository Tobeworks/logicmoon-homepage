<?php
$empfaenger  = 'iam@logic-moon.de';

// Betreff
$betreff = 'New Message from Logic Moon';

// Nachricht
$nachricht = '
<html>
<head>
  <title>Mail from logic moon</title>
</head>
<body>
<b>Mail from Logic Moon:</b><br>
<hr>
%s
</body>
</html>
';
$msg = filter_var(addslashes(nl2br($_POST['message'])));
$text = sprintf($nachricht,$msg);

$header[] = 'MIME-Version: 1.0';
$header[] = 'Content-type: text/html; charset=utf-8';

$header[] = 'From: '.filter_var(addslashes($_POST['name'])).' <'.filter_var(addslashes($_POST['email'])).'>';


// verschicke die E-Mail
if(mail($empfaenger, $betreff, $text, implode("\r\n", $header))){
    echo 'true';
}else{
    echo 'false';
}