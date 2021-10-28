<?php
if(isset($_POST["submit"])){

ini_set( 'display_errors', 1 );
error_reporting( E_ALL );
// Checking For Blank Fields..
if($_POST["vname"]==""||$_POST["vemail"]==""||$_POST["vmessage"]==""){
echo "Fill All Fields..";
}else{
// Check if the "Sender's Email" input field is filled out
$email=$_POST['vemail'];
// Sanitize E-mail Address
$email =filter_var($email, FILTER_SANITIZE_EMAIL);
// Validate E-mail Address
$email= filter_var($email, FILTER_VALIDATE_EMAIL);
if (!$email){
echo "Invalid Sender's Email";
}
else{
$message = $_POST['vmessage'];
$headers = 'From:'. $email . "rn"; // Sender's Email
// Message lines should not exceed 70 characters (PHP rule), so wrap it
$message = wordwrap($message, 70);

// Send Mail By PHP Mail Function
$status = mail("timschoen123@gmail.com", "Contact Form", $message, $headers);

if($status)
 {
  echo '<p>Your mail has been sent!</p>';
  } else {
   echo '<p>Something went wrong, Please try again!</p>';
}


}
}
}
