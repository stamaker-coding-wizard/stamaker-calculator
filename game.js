let displayScreen = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map(button => {
   button.addEventListener('click', (e) =>{
       switch(e.target.innerText){
           case 'C':
               displayScreen.innerText = '';
               break;
            case '←':
                displayScreen.innerText = displayScreen.innerText.slice(0,-1);
                break;
            case '=':
                displayScreen.innerText = eval(displayScreen.innerText);
                break;
           default:
               displayScreen.innerText += e.target.innerText
       }
   })
})
