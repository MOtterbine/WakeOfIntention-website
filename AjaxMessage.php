<?php

//Using GET
//$var_value = $_GET['varname'];

//Using POST
//$var_value = $_POST['varname'];

//Using GET, POST or COOKIE.
//$var_value = $_REQUEST['jam'];


//session_start();
//$_SESSION['regName'] = $regValue;



$var_jamdata = $_REQUEST['message'];
?>
<h2 style='color:#dedede;margin-top:100px;font-size:40px'>Hey Man! <?php echo $var_jamdata; ?></h4>