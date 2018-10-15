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

$var_image_path = $_POST["imagepath"];
$var_image_description = $_POST["imagedescr"];

?>
  

<div class="modal" id="image-closeup-form" tabindex="-1" role="dialog" style="z-index:99999" hidden>
    <!-- Modal - Image Closeup -->
    <div class="modal-dialog modal-md" style="width:50%">
        <div class="modal-body modal-content" style="padding-top:8px">
            
        <div class="row">
            <div class="col-sm-12" style="font-size:24px;text-align:right;">
                <a href="#" style="text-decoration:none" data-dismiss="modal">X</a>
            </div>

            <div class="row" style="text-align:center">
                 <img id='focus-image' src='<?php echo $var_image_path; ?>' style="width:90%"/>
            </div>
            
            <div class="row" style="font-size:20px;text-align:center;min-height:20px;margin-top:10px">
                 <p><?php echo $var_image_description; ?></p>
            </div>
         </div>
</div>


<script>
        $('#focus-image').ready();
        
</script>