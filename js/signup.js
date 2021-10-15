let userData1 = [];
var pass= document.getElementById("pass");
var text = document.getElementById("text");
var error = document.getElementById("error")
pass.addEventListener("keyup",function(event)
{
    if(event.getModifierState("CapsLock")){
        text.style.display="block";
    }
    else{
        text.style.display="none";
    }
});
pass.addEventListener("keyup", function(event){
    if(KeyboardEvent.keyCode === 13){
        event.preventDefault();
        document.getElementById("btn1").click();
    }
});
function show_password(){
    if(pass.type=== "password"){
        pass.type="text";
    }
    else{
        pass.type="password";   
    }
}
function pass_checker(){
    if(pass.lenght<=8){
        error.style.display="block";
    }
    else{
        error.style.display="none"
    }
}
function validation(){
    var form = document.getElementById("form");
    let txt = document.getElementById("txt");
    let mail = document.getElementById("email").value;
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(mail.match(pattern)){
        form.classList.add("valid1");
        form.classList.remove("invalid1");
        txt.innerHTML="Your Email Address is valid";
        txt.style.color="green";
        document.getElementById("email").style.marginBottom="0px";
    }
    else{
        form.classList.remove("valid1");
        form.classList.add("invalid1");
        txt.innerHTML="Please Enter valid Email address";
        txt.style.color="red";
        document.getElementById("email").style.marginBottom="0px";
    }
    if(mail=""){
        form.classList.remove("valid1");
        form.classList.add("invalid1");
        txt.innerHTML="";
        txt.style.color="#00ff00"
        document.getElementById("email").style.marginBottom="0px";
    }
}
function btn(){

        var emailData = document.getElementById("email").value;
        var fnameData = document.getElementById("fname").value;
        var lnameData = document.getElementById("lname").value;
        
       
        if(fnameData == "" ){
            document.getElementById("fname").style.borderColor="red";
            document.getElementById("missFname").classList.remove("invalid");
            document.getElementById("missFname").classList.add("valid");
            // return false;
        }
        if(lnameData == ""){
            document.getElementById("lname").style.borderColor="red";
            document.getElementById("missLname").classList.remove("invalid");
            document.getElementById("missLname").classList.add("valid");
            // return false;
        }
        if (emailData == "" ) {
            document.getElementById("email").style.borderColor="red";
            document.getElementById("missEmail").classList.remove("invalid");
            document.getElementById("missEmail").classList.add("valid");
            // return false;    
        }
        else{
      
            let formData={
                fname: document.getElementById("fname").value,
                lname: document.getElementById("lname").value,
                email: document.getElementById("email").value,
                password: document.getElementById("pass").value,
                admin: document.getElementById("myCheck1").checked,
                employ: document.getElementById("myCheck2").checked
            }

            userData1.push(formData);
            console.log("userData",userData1)
            localStorage.setItem("dataUser",JSON.stringify(userData1));
            console.log(localStorage.getItem("dataUser"));          
            window.location.href="file:///C:/Users/Admin/Desktop/js%20project/login.html";
            return true
        }
}
