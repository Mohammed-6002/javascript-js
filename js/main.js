const passwoordButton = document.querySelector('.btn');
const myList = document.querySelector('.password-list');
let guess = "";

const correctPasswoords = "wachtwoord"; 

passwoordButton.addEventListener('click', function() {
    while (guess !== correctPasswoords) {
        guess = prompt("Wat is je wachtwoord!");
        
        myList.innerHTML += `<li>${guess}</li>`;
        
        if (guess === correctPasswoords) {
            alert("Welkom!");
        } else {
            alert("Vul het correcte wachtwoord in!");
        }
    }
});


