const passwordField = document.querySelector('.password');
const generateBtn = document.querySelector('.btn1');
const copyBtn = document.querySelector('.btn2');

 function genPassword() {

    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const passwordLength = 12;
    let password = "";

 for (let i = 0; i <= passwordLength; i++) {

   const randomNumber = Math.floor(Math.random() * chars.length);
   password += chars.substring(randomNumber, randomNumber +1);

  }

  passwordField.value = password;

 }

function copyPassword() {

  const copyText = passwordField;

  copyText.select();
  document.execCommand("copy");  

}

generateBtn.addEventListener('click', genPassword);
copyBtn.addEventListener('click', copyPassword);
