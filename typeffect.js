// let text="Front End Designer"//.toUpperCase();
// let i=0;
// let typingEffect=document.querySelector(".typing");
// typingEffect.style.color="crimson";
// function typeCharacter(){
//     if(i<text.length){
//         typingEffect.innerHTML+=text[i];
//        i++;
       
//     }
//     else{
//         typingEffect.innerHTML="";
//         i=0;
//     }
//     setTimeout(typeCharacter,200);
        
    
// }
// typeCharacter();





const text ="Front End Designer".toUpperCase();

const typingElement = document.querySelector('.typing');
typingElement.style.color="white";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 150); // Adjust speed as needed
    } else {
        // Add blinking cursor only after typing completes
        
        typingElement.innerHTML += '<span class="cursor">|</span>';
    }
}

// Start typing effect
typeEffect();