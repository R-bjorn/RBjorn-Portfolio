<?php

if(isset($_POST['submit'])) {
    $name = $_POST['firstname']." ".$_POST['lastname'];;
    $subject = $_POST['submit'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = "ravidtrivedi111@gmail.com";
    $headers = "From : ".$mailFrom;
    $txt = "You have received an e-mail from ".$name."\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.php?mailsend");
}

?>