<?php require "SubmissionConfirmation.php"; ?>

<?php

//Using GET
//$var_value = $_GET['varname'];

//Using POST
//$var_value = $_POST['message'];

//Using GET, POST or COOKIE.
//$var_value = $_REQUEST['jam'];


//session_start();
//$_SESSION['regName'] = $regValue;

// gets posted json data
$json_input = file_get_contents("php://input");
$_POST = json_decode($json_input, true);

$var_firstname = $_POST["FirstName"];
$var_lastname = $_POST["LastName"];
$var_message = $_POST["Message"];
$var_phone = $_POST["Phone"];
$var_email = $_POST["Email"];
$var_ProductUpdates = $_POST["ProductUpdates"];

$var_timestamp = date("Y-m-d H:i:s");


$headers = 'From: no-reply@otterbinesolutions.com' . "\r\n" .
    'Reply-To: no-reply@otterbinesolutions.com' . "\r\n" .
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=UTF-8".
    'X-Mailer: PHP/' . phpversion();
    // to send html email
    //$email_text = file_get_contents('Email.html');
    // or...
$email_text =
    "<table>".
    "<tr><td style=\"font-size:14px\">ServerTimestamp: </td><td>".$var_timestamp." - GMT</td></tr>".
    "<tr><td>First Name: </td><td>".$var_firstname."</td></tr>".
    "<tr><td>Last Name: </td><td>".$var_lastname."</td></tr>".
    "<tr><td>Message: </td><td>".$var_message."</td></tr>".
    "<tr><td>Phone: </td><td>".$var_phone."</td></tr>".
    "<tr><td>Email Address: </td><td>".$var_email."</td></tr>".
    "<tr><td>Wants product updates: </td><td>".$var_ProductUpdates."</td></tr>".
    "<tr><td>User Agent Information: </td><td>".$_SERVER['HTTP_USER_AGENT']."</td></tr>".
    "</table>";
   // "Browser Information: ".get_browser(null, true);

$success = mail('JohnDoe@somewhere.com', 'User Submission', $email_text, $headers);


if (!$success) {
    $errorMessage = error_get_last()['message'];

}
else
{
    $errorMessage = "Email Sent...";
}


?>

<script>
    console.log("Mail send status: <?php echo $success; ?>");
 </script>



