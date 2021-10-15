var userData = [];

function validation(){
    var form = document.getElementById("form");
    let txt = document.getElementById("txt");
    let mail = document.getElementById("email").value;
    let mail_style = document.getElementById("email");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(mail.match(pattern)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        validateFields("Your Email Address is valid","green","0",txt,mail_style);
        return true;
    }
   
    if(mail===""){
        form.classList.remove("valid");
        form.classList.add("invalid");
        validateFields("This field must be filled","red","0",txt,mail_style);
        return false;
    }
    else{
        form.classList.remove("valid");
        form.classList.add("invalid");
        validateFields("Please Enter valid Email address","red","0",txt,mail_style);    
        return false;
    }
}
function pass_validation(){
    let pass_txt = document.getElementById("pass-txt");
    let pass = document.getElementById("password").value;
    let pass_style = document.getElementById("password");
      
    if(pass===""){
        validateFields("Please Enter Password","red","0",pass_txt,pass_style);
        return false; 
    }
    if(pass.length<8){
        validateFields("Minimum 8 Characters","red","0",pass_txt,pass_style);
        return false; 
    }
    else{
        validateFields("Your password is valid","green","0",pass_txt,pass_style);
        return true;
    }  
}

function validateFields(inner,color,margin,field1,field2){
    field1.innerHTML=inner;
    field1.style.color=color;
    field2.style.marginBottom=margin;
}



function btn1(){
    if(pass_validation()  && validation()){
        var email = document.getElementById("email").value;
        let pass = document.getElementById("password").value;
        userData=localStorage.getItem("dataUser")
        const obj=JSON.parse(userData)
 
        for(let i =0;i<obj.length;++i){
            if(obj[i].email===email){
                if(obj[i].admin===true){
                    window.location.href = "file:///C:/Users/Admin/Desktop/js%20project/admin.html";
                }
                if(obj[i].employ===true){
                    window.location.href ="file:///C:/Users/Admin/Desktop/js%20project/employ.html";
                }
           
            }
            else{
            alert("Sorry, your Account not found");
            }
        }
 
    }
    else{
        alert("Invalid Inputs");
    }

    
}



