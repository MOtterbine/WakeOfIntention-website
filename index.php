<?php 
$http_origin = $_SERVER['HTTP_ORIGIN'];

if ($http_origin == "https://www.otterbinesolutions.com" || $http_origin == "https://otterbinesolutions.com")
{  
    header("Access-Control-Allow-Origin: $http_origin");
}
//header("Access-Control-Allow-Origin: https://www.otterbinesolutions.us");
//header("Access-Control-Allow-Origin: https://otterbinesolutions.us");
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
    <meta property="og:locale" content="en-us" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Wake of Intention - Expert Software, Visual and Web Design" />
    <meta property="og:description" content="Otterbine Solutions - Expert Software and Open Web Design" />
    <meta property="og:url" content="https://www.WakeOfIntention.com/" />
    <meta property="og:site_name" content="Wake Of Intention" />
    <script type='application/ld+json'>{"@context":"http:\/\/schema.org","@type":"WebSite","@id":"#website","url":"http:\/\/otterbinesolutions.com\/","name":"Otterbine Solutions - Expert Software and Web Design","alternateName":"Otterbine","potentialAction":{"@type":"SearchAction","target":"http:\/\/otterbinesolutions.us\/?s={search_term_string}","query-input":"required name=search_term_string"}}</script>



    <title>Wake of Intention | Where Art and Science Mingle</title>

     <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js" type="text/javascript"></script>
   
    <script src="https://code.jquery.com/jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js" type="text/javascript"></script>
    <script src="scripts/bootstrap.min.js" type="text/javascript"></script>
    
    <link rel="icon" href="/css/images/main-icon.png" >
    
    
    
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="./fonts/proxima-nova/fonts.css">
    
    <!---->
    <link rel="stylesheet/less" type="text/css" href="css/constants.less">
    <link rel="stylesheet/less" type="text/css" href="css/styles.less">
    <link rel="stylesheet/less" type="text/css" href="css/main.less">
    <link rel="stylesheet/less" type="text/css" href="css/scrolling.less">
    <link rel="stylesheet/less" type="text/css" href="css/animation.less">
    <link rel="stylesheet/less" type="text/css" href="css/media-queries.less">
   <!--
    -->
        <script>
          less = {
              env: "dev"
            , async: false
            , fileAsync: false
            , poll: 1000
            , functions: {}
            , dumpLineNumbers: "comments"
            , relativeUrls: true
            //, relativeUrls: false
            //, rootpath: ":/a.com/"
          };
        </script>
    <script src="./scripts/less.js" type="text/javascript"></script>
    <script src="./scripts/main.js" type="text/javascript"></script>
    <script type="text/javascript">
		var oldIE = false;
    </script>

  
    <!--[if lte IE 9]>
        <script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.6.2/html5shiv.js"></script>
        <script src="//s3.amazonaws.com/nwapi/nwmatcher/nwmatcher-1.2.5-min.js"></script>
        <script src="//html5base.googlecode.com/svn-history/r38/trunk/js/selectivizr-1.0.3b.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/respond.js/1.1.0/respond.min.js"></script>
        <script type="text/javascript">
            var oldIE = true;
            document.createElement('pagination');
            document.createElement('accordion');
            document.createElement('accordion-group');
            document.createElement('accordion-heading');
        </script>
        <link rel="stylesheet" type="text/css" href="css/ie.css" media="screen, projection" />
    <![endif]-->
 </head>

 
<body >
    
    <?php require "Header.php"; ?>
         
          
        

    <div id="main-container" class="container" style="margin-top:0px;z-index:1">
        <div style="position:relative">
            <?php  require "TopSectionStatic.php"; ?>
            <?php  require "woi-overview.php";  ?>
            <?php  require "Footer.php";  ?>
        </div>
    </div>
    
     
    <div id="dynamic_modals"></div>
    
</body>

</html>
