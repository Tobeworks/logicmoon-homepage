<?php

$empfaenger  = 'hallo@tobeworks.de';

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

$text = sprintf($nachricht,$_POST['message']);

// für HTML-E-Mails muss der 'Content-type'-Header gesetzt werden
$header[] = 'MIME-Version: 1.0';
$header[] = 'Content-type: text/html; charset=utf-8';

$header[] = 'From: '.$_POST['name'].' <'.$_POST['email'].'>';


// verschicke die E-Mail
if(mail($empfaenger, $betreff, $text, implode("\r\n", $header))){
    echo 'true';
}else{
    echo 'false';
}