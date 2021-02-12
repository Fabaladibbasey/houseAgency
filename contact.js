const button = document.querySelector(".btn")

const formValidator = () => {
 
 const name = document.getElementById("name").value
 const surname = document.getElementById("surname").value
 const email = document.getElementById("email").value
 const phone = document.getElementById("phone").value
 let input = document.getElementsByTagName("input")
 let text = document.getElementsByTagName("textarea")
 const emailPattern = /.*@.*..*/
 let message = ""
 
 if((name !== "" || surname !== "") && (email !== "" || phone !== "")){
  message = "Your request has been successfully sent. We'll contact you soon"

  if(email !== "" && !email.match(emailPattern)){
   message = "Please email provided is not correct" 
  }
  
 }else{
  message = "Either names (Name or Surname field) and contacts (Email or Phone) must be filled. We use names to address you when contacting you either  via phone or email"
 }
 
 
 
 for(i = 0; i < input.length; i++){
  input[i].value = ""
 }
 text[0].value = ""
 
 alert(message);
}
button.addEventListener("click", formValidator)


