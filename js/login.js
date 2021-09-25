let userData = [];

function btn(){
    let c =JSON.parse(dataUser);
    console.log(c)
       
            let userDetails={
                
                // name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                password: document.getElementById("pass").value
            
            }
           let b=JSON.stringify(userDetails);
          
           userData.push(b);
            localStorage.setItem('a',(userData));
            console.log(localStorage.getItem('a'));
            
        
       
         
        }
  