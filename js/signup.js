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
function btn(){
            
      var k = document.getElementById(pass).value;
      console.log(k.lenght);


        // localStorage.setItem('formData',JSON.stringify(formData));
        // console.log(localStorage.getItem('formData'));

        var emailData = document.getElementById("email").value;
        var fnameData = document.getElementById("fname").value;
        var lnameData = document.getElementById("lname").value;
        
       
        if(fnameData == ""){
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
            // alert("eeeee arrived at ekse aelse ")
            let formData={
                fname: document.getElementById("fname").value,
                lname: document.getElementById("lname").value,
                email: document.getElementById("email").value,
                password: document.getElementById("pass").value
            }

            let b=JSON.stringify(formData);
            userData1.push(b);
            localStorage.setItem("dataUser",(userData1));
            console.log(localStorage.getItem("dataUser"));
            return true
        }
}
