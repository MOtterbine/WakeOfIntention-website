
//var baseURL = 'https://www.otterbinesolutions.com/';
var baseURL = '';

//var userData = {FirstName:"", LastName:"", Message:"", Phone:"", Email:"", ProductUpdates:"" };


// var img1 = new Image();
// img1.src = "css/images/scalp1_lg.png";
// var img2 = new Image();
// img2.src = "css/images/man1_lg.png";
// var img3 = new Image();
// img3.src = "css/images/ear1_lg.png";
// var img4 = new Image();
// img4.src = "css/images/hand1_lg.png";
// var img5 = new Image();
// img5.src = "css/images/heel1_lg.png";
// var img6 = new Image();
// img6.src = "css/images/heel2_lg.png";



$(document).ready(SiteInit);
function SiteInit()
{
    OnTopAnimation1Complete();
     
    // here's a way to setup the onscroll callback....
    window.onscroll = OnScroll;
    
    function CollapseNavBar(){
        $(".navbar-collapse").removeClass("in");
        $(".navbar-collapse").addClass("collapse");
        
    }

    SetCurrentMenu("menu_home");
    // prepare for animations..
   // AddAnimationEndListener("woi-package-img", OnPackageAppeared);
    // start the animation if the window id vertically open enough...
  //  if(window.innerHeight>600)
//    {
  //      $("#woi-package-img").addClass("package-animation");
//    }
    OnScroll();
    // init the 'before/after' images to the 'before' image
  //  SetInfant1Image();
  //  SetInfant2Image();
   // SetActionImage();
   // SetActionChart();

    //$('#woi-package-img').css('opacity','0');
}

function OnScroll() {
    console.log("blah");
    var bodyScrollTop = document.body.scrollTop
    var elementScrollTop = document.documentElement.scrollTop
    
    var iPos = document.getElementById("woi-package-img").scrollTop;
   if (bodyScrollTop > iPos  || elementScrollTop > iPos ) {
        document.getElementById("woi-package-img").className = "package-animation";
       // console.log("OnScroll do package animation...");
   }

    
    
    
    
    
   if(window.innerWidth > 992){
    
        if (bodyScrollTop < 400 || elementScrollTop < 400){
            var opacityVal = document.documentElement.scrollTop/400
            $('.top-section').css('opacity', 1-opacityVal);
            if(opacityVal >= .5) {
                $('.header').css('background-color', 'RGBA(245,245,245,' + opacityVal +')');
            }

        }
    }
    else{
        $('.header').css('background-color', 'RGBA(245,245,245,1)');
    }
}


var dataHolder = $('#dataholder');
function DoAjaxGet(urlString){

    $.ajax({
        url: urlString,
        type: 'GET',
        //   contentType: 'application/json; charset=utf-8',
        //data: '',
        success: function (dataObject) {
            dataHolder.html(dataObject).fadeIn(2800,"swing");
            dataHolder.fadeOut(2800);
        }
    });
    
}

function DoAjaxPost(urlString){

    //
    data = { 'traceType': 1, 'traceId': 'jammy1234' }; // 1 represents an answer
    // To get a page to display in a specific div - in addition to the actual action call
    $.ajax({
        url: urlString,
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(data)
    });
    
}




function SubmitForm(form){

    var userData = { FirstName:"", LastName:"", Message:"", Phone:"", Zip:"", Email:"", ProductUpdates:"" };

    if (form.checkValidity()) {

        console.log('passed validation '+ userData.FirstName);

        ShowSubmissionConfirmation();
        
        $('#request-submission-form').prop('disabled',true);
        
        userData.FirstName = $('#FirstName').val();
        userData.LastName = $('#LastName').val();
        userData.Message = $('#Message').val();
        userData.Phone = $('#Phone').val();
        userData.Zip = $('#Zip').val();
        userData.Email = $('#Email').val();
        if($('#ProductUpdatesRequested')[0].checked == true){
             userData.ProductUpdates = "Yes"
        }
        else{
            userData.ProductUpdates = "No"
        }
       
         ShowSubmissionConfirmation();
       SubmitUserInformation(userData);

        return true;

    }
    return false;

 }


function SubmitUserInformation(userData)
{
    
    var placeHolder = $('#contact-us-form');
    // To get a page to display in a specific div - in addition to the actual action call
    $.ajax({
        url: baseURL + '/Submit.php',
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(userData)
    //    success: function (dataObject) {
      //      placeHolder.html(dataObject).fadeIn(2800,"swing");            
      //  }
    });
    
}
function ShowSubmissionConfirmation()
{
    
    var placeHolder = $('#contact-us-form');
    // To get a page to display in a specific div - in addition to the actual action call
    $.ajax({
        url: baseURL + '/SubmissionConfirmation.php',
        type: 'GET',
        //contentType: 'application/json; charset=utf-8',
        //data: JSON.stringify(userData),
        success: function (dataObject) {
            placeHolder.html(dataObject).fadeIn(2800,"swing");
            //dataHolder.fadeOut(2800);
        }
    });
    
}







 
    function SaveDataAndSubmit(form){

        var userData = { FirstName:"", LastName:"", Message:"", Phone:"", Zip:"", Email:"", ProductUpdates:"" };
       
        
        if (form.checkValidity()) {

            console.log('passed validation '+ userData.FirstName);
           
            userData.FirstName = $('#FirstName').val();
            userData.LastName = $('#LastName').val();
            userData.Message = $('#Message').val();
            userData.Phone = $('#Phone').val();
            userData.Zip = $('#Zip').val();
            userData.Email = $('#Email').val();
            
            userData.ProductUpdates = 
            SubmitUserInformation(userData);
            
            return true;
           
        }
        
        console.log('failed validation');
        return false;

    }
















function ShowRequestConfirmation() {

    // ensure the submission dialog is gone...(assuming that's where this was called from)
    $('#submission-form').modal('hide');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
    ShowDialog('RequestConfirmation', baseURL + '/SubmissionConfirmation.php');

}









function ShowImageDialog(imagePath, imageDescription){
    // don't do this unless the window is large enough to warrant a dialog popup....
    if(window.innerWidth<769) return; // note this is a bootstrap breakpoint...
    data = { 'imagepath': imagePath, 'imagedescr':imageDescription }; 
    ShowPostedDialog('image-closeup-form', baseURL + '/PictureDisplayContainer.php', data);
    
}


function ShowDialog(modalDescription, url)
{
    
    // To get a page to display in a specific div - in addition to the actual action call
    $.ajax({
        url: url,
        type: 'GET',
        //   contentType: 'application/json; charset=utf-8',
        //data: '',
        success: function (dataObject) {
            $('#dynamic_modals').html(dataObject);
            $('#' + modalDescription).modal(
                {
                    backdrop: 'static',
                    keyboard: false
                }).on("hidden.bs.modal", function (event, ui) {
                    $('#' + modalDescription).remove();
                    $('body').removeClass('modal-open');
                   // StopSound();

                });
            //  window.location.href = '#' + modalDescription;

        }
    });
    
}

// assuming data is json format....
function ShowPostedDialog(modalDescription, url, data)
{
    // To get a page to display in a specific div - in addition to the actual action call
    $.ajax({
        url: url,
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(data),
        success: function (dataObject) {
            $('#dynamic_modals').html(dataObject);
            $('#' + modalDescription).modal(
                {
                    // backdrop: 'static',
                    // keyboard: false
                }).on("hidden.bs.modal", function (event, ui) {
                    $('#' + modalDescription).remove();
                    $('body').removeClass('modal-open');
                   // StopSound();

                });
            //  window.location.href = '#' + modalDescription;

        }
    });
}




function AddAnimationEndListener(id, callback) {
    console.log("AddAnimationEndListener");
    var x = document.getElementById(id);
    // Code for Chrome, Safari and Opera
    x.addEventListener("webkitAnimationEnd", callback);
    // Standard syntax
    x.addEventListener("animationend", callback);

} 

function RemoveAnimationEndListener(id, callback) {
    console.log("RemoveAnimationEndListener");
   var x = document.getElementById(id);
    // Code for Chrome, Safari and Opera
    x.removeEventListener("webkitAnimationEnd", callback);
    // Standard syntax
    x.removeEventListener("animationend", callback);

}


function OnPackageAppeared() {
    console.log("OnPackageAppeared");
    // Kill this event handler
    RemoveAnimationEndListener("woi-package-img", OnPackageAppeared);
    //console.log("OnPackageAppeared() called...");
 
    $('#woi-package-img').css('opacity', '1');
    // Remove this event listener and Hookup the next event


    // Move on to the next
    //AddAnimationEndListener("fade-in-drop", OnDropAppeared);

}


















function OnTopAnimationComplete()
{
    //console.log("OnTopAnimationComplete() called...");
    $('#animation').fadeOut(400,ReplaceTopAnimationContent);

}
function ReplaceTopAnimationContent(){
    //console.log("ReplaceTopAnimationContent() called...");
     $.ajax({
        url: baseURL + '/TopFixed.php',
        type: 'GET',
        success: function (dataObject) {
            //console.log("topfixed returned....");
            $('#animation').html(dataObject).fadeIn(400);
         }
    });
  
}

function OnTopAnimation1Complete()
{
    console.log("OnTopAnimation1Complete()");
    var elem = $('#animation1');
    var ht = elem.innerHeight();
    elem.css('height',elem + 'px')
    elem.fadeOut(200,ReplaceTopAnimation1Content);

}


function ReplaceTopAnimation1Content(){
    //console.log("ReplaceTopAnimation1Content() called...");
    $.ajax({
        url: baseURL + '/TopFixed.php',
        type: 'GET',
        success: function (dataObject) {
            //console.log("topfixed returned....");
            $('#animation1').html(dataObject).fadeIn(200);
         }
    });
  
}




function InitMenu()
{
    var curMenu = sessionStorage.getItem("current-menu");
    if (curMenu) {
        SetCurrentMenu(curMenu);
    }
   

}

function SetCurrentMenu(menuId) {

    $('.menu-selected').removeClass('menu-selected');
    $('#' + menuId).addClass("menu-selected");
    sessionStorage.setItem("current-menu", menuId);
    switch(menuId)
    {
        case "menu_home":
            window.scrollTo(0,0);
            
            break;
        case "menu_woi":
            window.location.href = '#woi-overview';
            break;
        case "menu_overview":
            window.location.href = '#overview-section';//baseURL + "/Home/Index"
            break;
        case "menu_treatment":
            window.location.href = '#treatement-success';//baseURL + "/Home/Index"
            break;
        case "menu_register":
            window.location.href = '#';//baseURL + "/Home/Index"
            break;
        default:
        break;
    }
}



function PlaceOverviewSlide(fileName){
   // console.log("ReplaceTopAnimationContent() called...");
     $.ajax({
        url: baseURL + '/' + fileName,
        type: 'GET',
        success: function (dataObject) {
             $('#slides-container').html(dataObject).fadeIn(400);
         }
    });
  
}

function SetActionChart(afterChoice)
{
    var before = $('#woi-in-action-chart-select-table .before');
    var after = $('#woi-in-action-chart-select-table .after');
    var elem = $('#woi-in-action-partial');
    
    if(afterChoice)
    {
        $.ajax({
            url: baseURL + '/Chart2.php',
            type: 'GET',
            success: function (dataObject) {
            elem.html(dataObject).fadeIn(400);
            after.removeClass("woi-grey-background");
            before.removeClass("woi-blue-background");
            after.addClass("woi-blue-background");
            before.addClass("woi-grey-background");

            }
        });
        return false;
    }
    $.ajax({
        url: baseURL + '/Chart1.php',
        type: 'GET',
        success: function (dataObject) {
            elem.html(dataObject).fadeIn(400);
            after.removeClass("woi-blue-background");
            before.removeClass("woi-grey-background");
            after.addClass("woi-grey-background");
            before.addClass("woi-blue-background");
            }
        });
    
    return false;
}


function SetActionImage(afterChoice)
{
    var before = $('#woi-in-action-img-select-table .before');
    var after = $('#woi-in-action-img-select-table .after');
    
    var elem = $('#woi-in-action-img');
    if(afterChoice)
    {
        elem.attr("src", "css/images/patient1_after.png");
        after.removeClass("woi-grey-background");
        before.removeClass("woi-blue-background");
        after.addClass("woi-blue-background");
        before.addClass("woi-grey-background");
        $('#woi-in-action-sub-text').html("Day 7 after application of WOI&reg; once a day without concomitant anti-inflammatory treatment<sup>2</sup>");
        return false;
    }
    elem.attr("src", "css/images/patient1_before.png");
    after.removeClass("woi-blue-background");
    before.removeClass("woi-grey-background");
    after.addClass("woi-grey-background");
    before.addClass("woi-blue-background");
    $('#woi-in-action-sub-text').html("Baseline: 73 years old, scalp psoriasis<sup>2</sup>");
    
    return false;
}


function SetInfant1Image(afterChoice)
{
   // console.log("SetInfant1Image");
    var before = $('#infant-1-table .before');
    var after = $('#infant-1-table .after');
    var elem = $('#infant-1');
    if(afterChoice)
    {
        elem.attr("src", "css/images/infant1_after.png");
        $('#infant-1-table .after').removeClass("woi-grey-background");
        $('#infant-1-table .before').removeClass("woi-blue-background");
        $('#infant-1-table .after').addClass("woi-blue-background");
        $('#infant-1-table .before').addClass("woi-grey-background");
        $('#infant-1-sub-text').html("Day 10 after three applications of WOI&reg;");
        //$('#infant-1-sub-text').text("Day 10 after three applications of WOI&reg;");
        return false;
    }
    elem.attr("src", "css/images/infant1_before.png");
    $('#infant-1-table .after').removeClass("woi-blue-background");
    $('#infant-1-table .before').removeClass("woi-grey-background");
    $('#infant-1-table .after').addClass("woi-grey-background");
    $('#infant-1-table .before').addClass("woi-blue-background");
    $('#infant-1-sub-text').html("Baseline");
    
    return false;
}



function SetInfant2Image(afterChoice)
{
    var before = $('#infant-2-table .before');
    var after = $('#infant-2-table .after');
    
    
    if(afterChoice)
    {
        $('#infant-2').attr("src", "css/images/infant2_after.png");
        after.removeClass("woi-grey-background");
        before.removeClass("woi-blue-background");
        after.addClass("woi-blue-background");
        before.addClass("woi-grey-background");
        $('#infant-2-sub-text').html("Day 8 after three applications of WOI&reg;");
        return false;
    }
    $('#infant-2').attr("src", "css/images/infant2_before.png");
    after.removeClass("woi-blue-background");
    before.removeClass("woi-grey-background");
    after.addClass("woi-grey-background");
    before.addClass("woi-blue-background");
    $('#infant-2-sub-text').html("Baseline");
    return false;
}





















function StopSound()
{
    var it = document.getElementById("audio-player");
    it.pause();
    it.currentTime = 0;
}




function CancelSubmission()
{
    //$('#submission-form').modal('hide');
    //$('body').removeClass('modal-open');
    //$('.modal-backdrop').remove();
}

function ShowPatientImage(imageFile) {

    ShowDialog('efficacy-display-intermediate', baseURL + '/_EfficacyInfoIntermediate');
   // ShowDialog('efficacy-display', baseURL + '/_EfficacyInfo');


}



// display efficacy data at each word found
function ShowIntermediateEfficacyDisplay() {

    ShowDialog('efficacy-display-intermediate', baseURL + '/_EfficacyInfoIntermediate');
   // ShowDialog('efficacy-display', baseURL + '/_EfficacyInfo');


}

function CancelEfficacyIntermediate() {

    $('#efficacy-display-intermediate').modal('hide');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();


}




// display efficacy data at end of wordfinder game
function ShowEfficacyDisplay() {

    $('#menu-efficacy').addClass("nav-selected");

    var modalDescription = 'efficacy-display';

    // To get a page to display in a specific div - in addition to the actual action call
    $.ajax({
        url: baseURL + '/_EfficacyInfo',
        type: 'GET',
        //   contentType: 'application/json; charset=utf-8',
        //data: '',
        success: function (dataObject) {
            $('#dynamic_modals').html(dataObject);
            $('#' + modalDescription).modal(
                {
                    backdrop: 'static',
                    //  keyboard: false
                }).on("hidden.bs.modal", function (event, ui) {
                    $('#' + modalDescription).remove();
                    $('body').removeClass('modal-open');
                  //  StopSound();
                });
            //  window.location.href = '#' + modalDescription;

        }
    });

}


function ShowReferencesDialog() {

    ShowDialog('references-display', baseURL + '/ReferencesDialog');
}

function CompleteRequest(form)
{
    SubmitRequestForm(form);
}




function TestSubmit(e)
{
    console.log("TestSubmit called...");
    e.preventDefault();
    if (e.currentTarget.checkValidity()) {
       // e.currentTarget.submit();
        console.log('passed validation');
        //    form.hide();
        //    form.submit();
         //setTimeout(ShowRequestConfirmation, 450);
        //  form.remove();
        return true;
    }
    console.log('failed validation');
    return false;
}

function SubmitRequestForm(form) {
    //form.submit(function () { var i = 9; console.log("hi"); });
    form.submit();
    //$("request-submission-form").submit(function () { alert('Eat Shit'); });

    return;
    //document.getElementById('').ch
    //var but = $('#request-submission-form');
    console.log('number of sub forms ' + form.length);
    if (form[0].checkValidity()) {
        console.log('passed validation');
        //    form.hide();
        //    form.submit();
         //setTimeout(ShowRequestConfirmation, 450);
        //  form.remove();
        return true;
    }
    console.log('failed validation');
    return false;
}
function ShowSubmissionForm() {

    console.log('show submission form');
    ShowDialog('submission-form', baseURL + '/SubmissionFormContainer.php');

}
function ShowOpeningScreen() {

    console.log('show opening screen');
    ShowDialog('opening-screen', baseURL + '/Home/OpeningScreenContainer');

}

function ShowSafetyInformation() {
    var modalDescription = 'fullSafetyInfo';
    // To get a page to display in a specific div - in addition to the actual action call
    $.ajax({
        url: baseURL + '/SafetyInfo',
        type: 'GET',
        //   contentType: 'application/json; charset=utf-8',
        //data: '',
        success: function (dataObject) {
            $('#dynamic_modals').html(dataObject);
            $('#' + modalDescription).modal(
                {
                    //  backdrop: 'static',
                    //  keyboard: false
                }).on("hidden.bs.modal", function (event, ui) {
                    $('#' + modalDescription).remove();
                    $('body').removeClass('modal-open');
                    StopSound();
                });
            //  window.location.href = '#' + modalDescription;

        }
    });

}


function AdjustBody() {
    console.log("AdjustBody()")

    var tempHeight = $("#submit-partial").height();
    console.log("submit section height: " + tempHeight);

    tempHeight = $("#game-section").height();
    console.log("game section height: " + tempHeight);

    $("#submit-partial").css('height', tempHeight);
    //$("#submitform-partial").css('height', ($("#main-body-content").height() + 900) + 'px');

}

function OnLoad() {
    OnResize();
}


function OnResize()
{
    var docBody = $('body .container');
        var dWidth = docBody.innerWidth();
        var cardWidthFactor = 0;

    // Resize the card game
    var gameMaitrix = $('#game-maitrix');
    if (gameMaitrix.length > 0) {
        if (dWidth > 600) {
            cardWidthFactor = dWidth * .22;
        }
        else {
            cardWidthFactor = dWidth * .21;
        }
        //var dWidth = 60;
        $('.card').css('width', cardWidthFactor);
        $('.card').css('height', 1.18 * cardWidthFactor);
        $('.card-row').css('height', 1.2 * cardWidthFactor);
        $('.card-holder').css('margin-right', cardWidthFactor);
    }

    if (dWidth < 992)
    {

    }

    FitMenu(dWidth);

}

var lastValidMenuRowWidth = 0;

function FitMenu(dWidth) {
    var menuWidth;
    var totalWidth;
    if (dWidth < 768) {
        console.log('dWidth is:' + dWidth + 'px');
     //   return false;
    }
    totalWidth = $('#menu-row').width();
    if (totalWidth === undefined || totalWidth === null)
    {
        menuWidth = lastValidMenuRowWidth;
    }
    else if (dWidth < 768) {
        menuWidth = totalWidth;
    }
    else {
        menuWidth = (totalWidth / 4); // ensure there is enough room
        lastValidMenuRowWidth = menuWidth;

    }
    //var totalWidth = $('#menu-row').width();
  //  var totalWidth = $('#header-partial-section').width();
    //if (totalWidth > 992)
    //{
    //    menuWidth = (totalWidth / 4) + 5; // ensure there is enough room
    //}
    //else {

   // }

    $('#menu-container li').css('width', menuWidth);
   // $('#header-partial-section').css('width', menuWidth*4);

}




function OpenForm() {
    //document.getElementById("isi-drawer").style.height = "auto";
    //var ih = $('#isi-drawer').height;
    ShowSubmissionForm();
}

function OpenISI() {
    console.log('OpenISI()');
    var drawerBullets = $('#isi-drawer-bullets');
    drawerBullets.css("overflow-y", "scroll");
    drawerBullets.css("border", "1px #f2f2f2 inset");

  //  var contentHeight = $('isi-drawer-content').innerHeight;
    document.getElementById("isi-drawer").style.height = "545px";
    var ih = $('#isi-drawer').height;
    $('#isi-toggle-button').attr('src', baseURL + '/Content/images/Minus.png');

    //ShowSafetyInformation();
}

var isiScrollPosition = 0;
var timerReference;
function RunISIScroller()
{
    var drawerBullets = $('#isi-drawer-bullets');
    var drawerContainer = $('#isi-drawer-content');
    isiScrollPosition = drawerBullets.scrollTop();
    // startup a repeating timer
    timerReference = setInterval(function () {
        drawerBullets.scrollTop(isiScrollPosition);
        isiScrollPosition++;
    }, 200);
    //drawerBullets.on('scroll', function () {
    //    console.log('Event Fired');
    //});

    // Stop the autoscroll if the user touches...
    drawerBullets.on('mousedown', function (event) {
        console.log('ISI bullet mouse down Fired');

        // Test if user clicked scrollbar
        //var bulletsWidth = drawerBullets.prop("clientWidth");
        //if (event.offsetX >= bulletsWidth) {
        //    console.log("Stop isi Scroll...")
        //    clearInterval(timerReference);
        //}

        // Test if user clicks anywhere - then stop the auto scrolling
        clearInterval(timerReference);

    });
}
/* Set the width of the side navigation to 0 */
function CloseISI() {
    console.log('CloseISI()');
    // stop the repeating timer that is controlling slow ISI scrolling
    clearInterval(timerReference);
    var drawerBullets = $('#isi-drawer-bullets');
    // ensure first bullet is in view
    drawerBullets.animate({ scrollTop: 0 }, "normal");
    drawerBullets.css("overflow-y", "hidden");
    drawerBullets.css("border", "0px");
    drawerBullets.scrollTop = 0;
    document.getElementById("isi-drawer").style.height = "141px";
    var ih = $('#isi-drawer').height;
    $('#isi-toggle-button').attr('src', baseURL + '/Content/images/Plus.png');
}



function FillDoctorInformation(hcpName) {
    // To get a page to display in a specific div - in addition to the actual action call
    $.ajax({
        url: baseURL + '/HeaderHCPSection',
        type: 'POST',
        //   contentType: 'application/json; charset=utf-8',
        data: '',
        success: function (dataObject) {
            $('#header-partial-section').html(dataObject);
            $("#hcp-name").text(hcpName);
            //$('#header-partial-section1').html(dataObject);
            //$("#hcp-name_M").text(hcpName);
        }
    });
    $.ajax({
        url: baseURL + '/HeaderHCPSection_M',
        type: 'POST',
        //   contentType: 'application/json; charset=utf-8',
        data: '',
        success: function (dataObject) {
            //$('#header-partial-section').html(dataObject);
            //$("#hcp-name").text(hcpName);
            $('#header-partial-section1').html(dataObject);
            $("#hcp-name_M").text(hcpName);
        }
    });

}



function FillCardInformation() {
    // To get a page to display in a specific div - in addition to the actual action call
    $.ajax({
        url: baseURL + '/HeaderCardSection',
        type: 'POST',
        //   contentType: 'application/json; charset=utf-8',
        data: '',
        success: function (dataObject) {
            $('#header-partial-section').html(dataObject);
            $('#header-partial-section1').html(dataObject);
        }
    });

}

/* Set the width of the side navigation to 0 */
function CloseWordfinderDrawer() {
   // document.getElementById("word-finder-drawer").style.width = "0";
    $('.word-finder-drawer').css('width', '0');
    if ((gameState & 0x07) === 0x07)// are all the words (all three) found?
    {
        $('.word-finder-drawer').hide();
    }

}

function OpenWordfinderDrawer() {
//    document.getElementById("word-finder-drawer").style.width = "425px";
    $('.word-finder-drawer').css('width', '390px');
}





function ExecutePresentation(ilmState) {
    switch (ilmState) {
        case 0: // home page
            LoadAjaxSection("/Home");
            break;
        case 1:
            LoadAjaxSection("/SubType1", function () {
                $('#menu-buttons').show();
                $('#ilm-nav-buttons').show();
            });
            break;
        case 2:
            LoadAjaxSection("/SubType2");
            $('#ilm-nav-buttons').show();
            break;
        case 3:
            LoadAjaxSection("/SubType3");
            $('#ilm-nav-buttons').show();
            break;
        case 4:
            LoadAjaxSection("/SubType4");
            $('#ilm-nav-buttons').show();
            break;
        case 5:
            LoadAjaxSection("/SubType5");
            $('#ilm-nav-buttons').show();
            break;
        case 6:
            LoadAjaxSection("/Triggers");
            $('#ilm-nav-buttons').show();
            break;
        case 7:
            LoadAjaxSection("/Study1");
            $('#ilm-nav-buttons').show();
            break;
        case 8:
            LoadAjaxSection("/Study2");
            $('#ilm-nav-buttons').show();
            break;
        case 9:
            LoadAjaxSection("/ThankYou");
            $('#ilm-nav-buttons').hide();
            break;
        case 10:
            //$('#menu-buttons').hide();
            SetILMState(9);
            break;

    }

}


function LoadSection(pageUrl, sectionId, callback) {
    // To get a page to display in a specific div - in addition to the actual action call
    $.ajax({
        url: baseURL + '/' + pageUrl,
        type: 'GET',
        success: function (dataObject) {
            // To avoid flickering
            // Here we load the html into hidden div and wait for the content to finish loading. Then we copy that
            $('#' + sectionId).html(dataObject);
            if (callback) {
                // syntax to execute the function pointer, since 'callback' is not a function, but a function pointer
                !callback();
            }
        }
    });
}
function LoadAjaxSection(pageUrl, callback) {

    //$('#page-cache').ready( function () {
    //    console.log('...body content ready');
    //    CopyElementData('section-content', $('#page-cache').html());
    //});

    // To get a page to display in a specific div - in addition to the actual action call
    $.ajax({
        url: baseURL + '/' + pageUrl,
        type: 'GET',
        success: function (dataObject) {
            // Here we load the html into hidden div and wait for the content to finish loading. Then we copy that
            // this is setup as an automatic cache to avoid flickering...when we want 'section-content' filled, we fill '#page-cache'
            $('#page-cache').ready(function () {
                console.log('...body content ready');
                CopyElementData('section-content', $('#page-cache').html());
            });
            $('#page-cache').html(dataObject);
            if (callback) {
                // syntax to execute the function pointer, since 'callback' is not a function, but a function pointer
                !callback();
            }
           // console.log("ajax call complete");
        }
    });
   //         $('#page-cache').off('ready');
}

function CopyElementData(elementId, objectData) {
    var element, newElement, parent;

    // Get the original element
    element = document.getElementById(elementId);

    // Assuming it exists...
    if (element) {
        // Get its parent
        parent = element.parentNode;

        // Create the new element
        newElement = document.createElement(elementId);

        // Set its ID and content
        newElement.id = elementId;
        newElement.innerHTML = objectData;
        

        // Insert the new one in front of the old one (this temporarily
        // creates an invalid DOM tree [two elements with the same ID],
        // but that's harmless because we're about to fix that).
        parent.insertBefore(newElement, element);

        // Remove the original
        parent.removeChild(element);
    }
}

function SaveTrace(traceId) {
    traceData = { 'id': traceId };
    // To get a page to display in a specific div - in addition to the actual action call
    $.ajax({
        url: baseURL + '/SaveTrace',
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(traceData)
        //success: function (dataObject) {
        //    $('#dynamic_modals').html(dataObject);
        //    $('#' + modalDescription).modal(
        //        {
        //            backdrop: 'static',
        //            //  keyboard: false
        //        }).on("hidden.bs.modal", function (event, ui) {
        //            $('#' + modalDescription).remove();
        //            $('body').removeClass('modal-open');
        //            //  StopSound();
        //        });
        //    //  window.location.href = '#' + modalDescription;

        //}
    });

}
function SaveUrlTrace(traceId) {
    traceData = { 'traceType': 5, 'traceId': traceId }; // 5 represents a link
    // To get a page to display in a specific div - in addition to the actual action call
    $.ajax({
        url: baseURL + '/SaveTrace',
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(traceData)
    });

}
function SaveAnswerTrace(traceId) {
    traceData = { 'traceType': 1, 'traceId': traceId }; // 1 represents an answer
    // To get a page to display in a specific div - in addition to the actual action call
    $.ajax({
        url: baseURL + '/SaveTrace',
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(traceData)
    });

}



var oneTimeRun = false;


function GetILMState() {
    if (sessionStorage.getItem('ILMState') == null || sessionStorage.getItem('ILMState') == 'undefined') {
        // at the start...
        sessionStorage.setItem('ILMState', '0');
    }
    return parseInt(sessionStorage.getItem('ILMState'));

}

function SetILMState(state) {
    sessionStorage.setItem('ILMState', state.toString());
}


function SetAndExecuteState(stateVal) {
    SetILMState(stateVal);
    ExecutePresentation(stateVal);
}
function IncrementAndExecuteState() {
    var state = GetILMState();
    state++;
    SetILMState(state);
    ExecutePresentation(state);
}
function DecrementAndExecuteState() {
    var state = GetILMState();
    if (state > 0) {
        state--;
    }
    SetILMState(state);
    ExecutePresentation(state);
}
function LoadAndPlayAudio(AudioPath) {
    console.log("User Selected: '" + AudioPath)
    var myAudio = document.getElementById("audio-player");
    var source = document.getElementById("audio-source");
    source.src = AudioPath;

    //    var audioPlayerBlock = $('#audio-player');
    //    audioPlayerBlock.find('#audio-source').attr('src', AudioPath);

    myAudio.load();
    console.log("new audio data loaded...");
    myAudio.pause();

    $('#play-button-image').prop('src', baseURL + "/Content/images/Pause.png");
    myAudio.play();

}
function AudioFinished() {
    $('#play-button-image').prop('src', baseURL + "/Content/images/Play.png");
    console.log("audio done...");
    if (oneTimeRun == true) {
        oneTimeRun = false;
        return;
    }
    IncrementAndExecuteState();
    //   var state = GetILMState();
    //   state++;
    //   SetILMState(state);
    //   ExecutePresentation(state);
}


function ToggleMute() {
    var muted = document.getElementById('background_audio').muted;
    if (muted == true) {
        document.getElementById('background_audio').muted = false;
    }
    else {
        document.getElementById('background_audio').muted = true;
    }
}
var didScroll = false;
var lastScrollPos = 0;
var curScrollPos = 0;
var floating = false;
function ShowSafetyInfo()
{
    var elmnt = document.getElementById("isi-drawer-tab");
    elmnt.scrollIntoView();
}














function PixelateInit () {
    // Bind events and initialize plugin
    $('.explode')
      .on('pixellate-exploded', function () {
          var self = this;
          setTimeout(function () {
              $(self).pixellate('in');
          }, 500);
      })
      .on('pixellate-imploded', function () {
          var self = this;
          setTimeout(function () {
              $(self).pixellate('out');
          }, 500);
      })
      .pixellate()
}


var pluginName = 'pixellate',
    defaults = {
        // Grid divisions
        columns: 20,
        rows: 20,

        // Duration of explosion animation
        duration: 1500,

        // Direction of explosion animation ('out', 'in', or 'none')
        direction: 'out',

        // Resize pixels during animation
        scale: true,

        // Coordinates representing the source of the explosion force
        //(e.g. [-1, 1] makes the explodey bits go up and to the right)
        explosionOrigin: [0, 0]
    };

function Plugin(el, options) {
    this.$el = $(el);
    this.options = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;

    this.init();
};

Plugin.prototype = {
    init: function () {
        if (!this.$el.find('.pixellate-pixel').length) {
            var $img = this.$el.find('img:first-child'),
                img = new Image();

            this.$el
              .data('pixellate-image', $img.attr('src'))
              .addClass('pixellate-lock');
            $img.css('visibility', 'hidden');

            $(img).one('load', $.proxy(this.createPixels, this));

            img.src = this.$el.data('pixellate-image');
            if (img.complete) $(img).trigger('load');
        } else {
            this.stylePixels();
        }
    },

    createPixels: function () {
        this.$el.append(new Array((this.options.rows * this.options.columns) + 1).join('<span class="pixellate-pixel"></span>'));

        this.stylePixels(true);
    },

    stylePixels: function (initializeStyles) {
        var self = this,
            w = this.$el.width(),
            h = this.$el.height(),
            columns = this.options.columns,
            rows = this.options.rows,
            $pixels = this.$el.find('.pixellate-pixel');

        var styles = initializeStyles ? {
            'position': 'absolute',
            'width': (w / columns),
            'height': (h / rows),
            'background-image': 'url(' + this.$el.data('pixellate-image') + ')',
            'background-size': w,
            'backface-visibility': 'hidden'
        } : {};

        for (var idx = 0; idx < $pixels.length; idx++) {
            var pixelStyles = {};

            if (initializeStyles) {
                var x = (idx % columns) * styles.width,
                    y = (Math.floor(idx / rows)) * styles.height;

                $.extend(pixelStyles, styles, {
                    'left': x,
                    'top': y,
                    'background-position': (-x) + 'px ' + (-y) + 'px'
                });
            }

            if (self.options.direction == 'out') {
                var randX = (Math.random() * 300) - 150 - (self.options.explosionOrigin[0] * 150),
                    randY = (Math.random() * 300) - 150 - (self.options.explosionOrigin[1] * 150);

                var transformString = 'translate(' + randX + 'px, ' + randY + 'px)';
                if (self.options.scale) {
                    transformString += ' scale(' + (Math.random() * 1.5 + 0.5) + ')';
                }

                $.extend(pixelStyles, {
                    'transform': transformString,
                    'opacity': 0,
                    'transition': self.options.duration + 'ms ease-out'
                });
            } else if (self.options.direction == 'in') {
                $.extend(pixelStyles, {
                    'transform': 'none',
                    'opacity': 1,
                    'transition': self.options.duration + 'ms ease-in-out'
                });
            }

            $pixels.eq(idx).css(pixelStyles);
        }

        // Use rAF to ensure styles are set before class is modified
        requestAnimationFrame(function () {
            if (self.options.direction == 'out') {
                self.$el.removeClass('pixellate-lock');
            } else if (self.options.direction == 'in') {
                self.$el.one('pixellate-imploded', function () {
                    self.$el.addClass('pixellate-lock');
                });
            }
        });

        // Fire plugin events after animation completes
        // TODO: Use transition events when supported
        setTimeout(function () {
            if (self.options.direction == 'out')
                self.$el.trigger('pixellate-exploded');
            else if (self.options.direction == 'in')
                self.$el.trigger('pixellate-imploded');
        }, this.options.duration);
    }
};

$.fn[pluginName] = function (options) {
    return this.each(function () {
        if (!$.data(this, "plugin_" + pluginName)) {
            $.data(this, "plugin_" + pluginName, new Plugin(this, options));
        } else if (typeof options === 'string') {
            $.data(this, "plugin_" + pluginName).options.direction = options;
            $.data(this, "plugin_" + pluginName).init();
        }
    });
};


// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
// MIT license
var lastTime = 0;
var vendors = ['ms', 'moz', 'webkit', 'o'];
for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
}

if (!window.requestAnimationFrame)
    window.requestAnimationFrame = function (callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function () { callback(currTime + timeToCall); },
          timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };

if (!window.cancelAnimationFrame)
    window.cancelAnimationFrame = function (id) {
        clearTimeout(id);
    };


















































var createShortLivedCookie = function (name, value, minutes) {
    var expires;
    if (minutes) {
        var date = new Date();
        date.setTime(date.getTime() + (minutes * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

var createCookie = function (name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}