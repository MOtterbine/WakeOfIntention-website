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

$var_message = $_POST["message"];

?>
<h3 style='color:#dedede;font-size:36px'>Hey Man! <?php echo $var_message; ?></h3>
