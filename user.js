const emailInputUser = document.querySelector('.emailuser');
const passwordInputUser = document.querySelector('#passworduser');
const email = document.getElementById('email').value;
const password = document.getElementById('passworduser').value;
var EmailUser;// !set email 
var PasswordUser;// !set password

//*Save new password to local storage
emailInputUser.addEventListener('input', (event) => {
  EmailUser = event.target.value;
});
passwordInputUser.addEventListener('input', (event) => {
    PasswordUser = event.target.value;
});


const saveEmail = () => {
//   if(email == ""|| password == ""){
//     alert('Please enter your email and password');
//     clear();
//     console.log(email);
// }else{
  localStorage.setItem('email', EmailUser);
  localStorage.setItem('password', PasswordUser);
   console.log(EmailUser);
   console.log(PasswordUser);
   clear();
   alert('Your account has been created successfully \n User name and Password has been saved in your local storage ')
   window.location.href = "home.html";
// }
 
  };



const clear = () => {
  document.getElementById('email').value = '';
  document.getElementById('passworduser').value = '';
  document.getElementById('password2').value = '';
};

