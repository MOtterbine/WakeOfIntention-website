   
    <!-- ******************HEADER***********************--> 
    <div class="navbar navbar-fixed-top" style="margin:0!important;padding:0!important;">
        
        <div class="container header" style="border-bottom:1px solid grey;">
           
            <div class="navbar-header" >
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a id="nav-logo-link" href="index.php" >
                    <img src="./images/WOI-lg-logo.png" alt="WOI Logo"  style="max-width:400px;width:100%;"/>
                </a>
            </div>
            <div class="navbar-collapse collapse navbar-right" >
                <ul id="menu-container" class="nav navbar-nav nav-custom-dark  main-nav" style="">
                    <li><a id="menu_home" href="javascript:SetCurrentMenu('menu_home');CollapseNavBar();">Home</a></li>
                    <li><a id="menu_woi" href="javascript:SetCurrentMenu('menu_woi');CollapseNavBar();">WOI</a></li>
                    <!-- <li><a id="menu_overview" href="javascript:SetCurrentMenu('menu_overview');CollapseNavBar();">Overview&trade; Benefits</a></li>
                    <li><a id="menu_treatment" href="javascript:SetCurrentMenu('menu_treatment');CollapseNavBar();">Treatment Success</a></li> -->
                    <li><a id="menu_register" href="javascript:ShowSubmissionForm();CollapseNavBar();">Contact Us</a></li>
                </ul>
            </div>
        </div>

   </div>
  
<script>

    function CollapseNavBar(){
        $(".navbar-collapse").removeClass("in");
        $(".navbar-collapse").addClass("collapse");
       
        
    }
    
    // we're doing this because we need to close the hamburger - we're using ajax, so it doesn't close...
    // function MobileSafetyFunction()
    // {
    //     ShowSafetyInfo();
    //     $(".navbar-collapse").removeClass("in");
    //     $(".navbar-collapse").addClass("collapse");
    // }
    // function RunState(stateVal)
    // {
    //     SetAndExecuteState(stateVal);
    //     $(".navbar-collapse").removeClass("in");
    //     $(".navbar-collapse").addClass("collapse");
    // }

</script>