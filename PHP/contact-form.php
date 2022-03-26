<?php
  
if($_POST) {
    $first_name = "";
    $last_name = "";
    $visitor_email = "";
    $email_subject = "";
    $visitor_message = "";
    $recipient = "ravidtrivedi111@gmail.com";
    $email_body = "<div>";

    if(isset($_POST['firstname']) && isset($_POST['lastname'])) {
        $first_name = filter_var($_POST['firstname'], FILTER_SANITIZE_STRING);
        $last_name = filter_var($_POST['lastname'], FILTER_SANITIZE_STRING);
        $email_body .= "<div>
                           <label><b>Visitor Name:</b></label>&nbsp;<span>".$first_name." ".$last_name."</span>
                        </div>";
    }
    
    if(isset($_POST['email'])) {
        $visitor_email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['email']);
        $visitor_email = filter_var($visitor_email, FILTER_VALIDATE_EMAIL);
        $email_body .= "<div>
                           <label><b>Visitor Email:</b></label>&nbsp;<span>".$visitor_email."</span>
                        </div>";
    }

    if(isset($_POST['subject'])) {
        $email_subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
        $email_body .= "<div>
                           <label><b>Reason For Contacting Us:</b></label>&nbsp;<span>".$email_subject."</span>
                        </div>";
    }
      
    if(isset($_POST['message'])) {
        $visitor_message = htmlspecialchars($_POST['message']);
        $email_body .= "<div>
                           <label><b>Visitor Message:</b></label>
                           <div>".$visitor_message."</div>
                        </div>";
    }

    $email_body .= "</div>";
 
    $headers  = 'MIME-Version: 1.0' . "\r\n"
    .'Content-type: text/html; charset=utf-8' . "\r\n"
    .'From: ' . $visitor_email . "\r\n";

    if(mail($recipient, $email_title, $email_body, $headers)) {
        echo "<p>Thank you for contacting us, $visitor_name. You will get a reply within 24 hours.</p>";
    } else {
        echo '<p>We are sorry but the email did not go through.</p>';
    }
}
?>