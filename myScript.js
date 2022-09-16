function Validate(){
    email = document.getElementById("email").value;
    phone = document.getElementById("phone").value;
    var validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var phoneno = /^\d{10}$/;
    if(email==""){
        alert("Email must be filled out");
     
    }

    if (email.match(validEmail))
  {
     
  }
   else{
    alert("You have entered an invalid email address!")
    
   }
   
  
   if (phone=="")
   {
       alert("Phone number cannot be empty");
   }
  
   if((phone.match(phoneno))){
       return true;
         }
       else
         {
         alert("Enter a valid Phone Number");
         return false;
         }


       
}

function Display(){
  
    nam = document.getElementById("FN").value;
    ln = document.getElementById("LN").value;
    org = document.getElementById("ORG").value;
    ph = document.getElementById("phone").value;
    email = document.getElementById("email").value;
    document.getElementById("FND").innerHTML= nam;
    document.getElementById("LND").innerHTML= ln;
    document.getElementById("ORGD").innerHTML= org;
    document.getElementById("phoneD").innerHTML= ph;
    document.getElementById("emailD").innerHTML= email;


}
function redirect() {
  let url = "./form.html";
  window.location(url);
}