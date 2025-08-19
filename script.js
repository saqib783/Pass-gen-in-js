 const passwordBox = document.getElementById('password')

 const length = 12;

 const upperCase ="ABCDEFGHINJKLNMOPQRSTUVWXYZ"
 const lowerCase ="abcdefghijklnmopqrstuvwxyz"
 const number = "123345678910"
 const symbol = "@#$%^&*()-_=+!?<>/"


 const allChar = upperCase + lowerCase + number + symbol  ;


 function createPassword(){
     let password = ""
    password+= upperCase[Math.floor(Math.random() * upperCase.length)]

      password+= lowerCase[Math.floor(Math.random() * lowerCase.length)]

       password+= number[Math.floor(Math.random() * number.length)]
      
        password+= symbol[Math.floor(Math.random() * symbol.length)]


        while(password.length < length){
            password+= allChar[Math.floor(Math.random() * allChar.length)]
        }

        passwordBox.value = password;



    
    }

        function copyPassword(){
            passwordBox.select();
            document.execCommand("copy")
        }



