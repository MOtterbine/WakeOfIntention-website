<div>
    <form method="post"  class = "form-horizontal submission-content" role = "form" id = "request-submission-form"  >

 <!----> 
            <div class="row">
                <div class="col-sm-12" style="font-size:24px;text-align:right;padding:20px 0 0 0">
                    <a href="#" style="text-decoration:none;font-weight:900;color:#eFeFeF" data-dismiss="modal">X</a>
                </div>
            </div>
           
            
            
            <div class="row" style="margin-top:-35px;padding-top:0">
                <div class="col-sm-12">
                    <h1 style="font-weight:800">Contact Us at WOI</h1>
                    
                </div>
            </div>
            <div class="row">
                <div class="col-sm-8">
                    <h4>Enter your information below and we'll get back to you soon.</h4>
                </div>
            </div>


            <div class="row">
                <div class="col-sm-4 form-field" style="">
                    <p>*Required Fields</p>
                </div>
                <div class="col-sm-4 form-field" style="">
                </div>
                <div class="col-sm-4 form-field hidden-xs" style="position:relative">
                    <img src="images/guitar-neck.png" style="position:absolute;max-width:100%;top:-55px;max-height:400px;right:0">
                </div>
            </div>
            <div class="row">
                
                
                <div class="col-sm-4 form-field" style="">
                    <input class="form-control" id="FirstName" type="text" placeholder = "*First Name" tabindex="1" required oninvalid="this.setCustomValidity('please enter your first name')" oninput="this.setCustomValidity('')">
                 </div>
                <div class="col-sm-4 form-field" style="">
                     <input class="form-control" id="LastName" type="text" placeholder = "*Last Name" tabindex="2" required oninvalid="this.setCustomValidity('Please enter your last name')" oninput="this.setCustomValidity('')">
               </div>
            </div>
            <div class="row" >
                <div class="col-sm-8 form-field" style="">
                    <input class="form-control" id="Message" type="text" placeholder = "*One-line Message" tabindex="3" required oninvalid="this.setCustomValidity('Please enter a one-line message')" oninput="this.setCustomValidity('')">
                    
                 </div>
            </div>
            <div class="row">
                <div class="col-sm-4 form-field" style="">
                    <input class="form-control" id="Phone" type="text" placeholder = "Phone" tabindex="4">
                    
                 </div>
                 <div class="col-sm-4 form-field" style="">
                    <input class="form-control" id="Email" type="text" placeholder = "*Email Address" tabindex="6" required oninvalid="this.setCustomValidity('Please enter an email address')" oninput="this.setCustomValidity('')">
                    
                 </div>
            </div>
            <div class="row">
                <div class="col-sm-8 form-field" style="">
                    <span style="color:#dedede"><input id="ProductUpdatesRequested" type="checkbox" tabindex="7" style="float:left">&nbsp;I am interested in receiving regular updates.</span>
                    
                    <p >Thanks for your interest!</p>
                </div>
            </div>
            
            
    
            
            <div class="row">
                <div class="col-sm-4" style="">
                    
                    <div style="text-align:left;">
                         <input id="submit-button" type="submit" class="btn btn-default" value="Send" tabindex="9"/>
                    </div>
<!---->
                 </div>
                <div class="col-sm-4" style="">
                    
               </div>
            </div>
   </form>
</div>

    
    
    
    

<script>
    $('#request-submission-form').submit(function(event){
    // cancels the form submission
    event.preventDefault();
        $('#request-submission-form').prop('readonly', true);
        $('#request-submission-form').prop('disabled', true);
    SubmitForm(this);
   
});
    
    
   

</script>