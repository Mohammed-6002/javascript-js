const passwoordButton = document.querySelector('.btn');
const myList = document.querySelector('.password-list');
let guess = "";

const correctPasswoords = "wachtwoord"; 

let gueses = [];

passwoordButton.addEventListener('click', function() {
    while (guess !== correctPasswoords) {
        guess = prompt("Wat is je wachtwoord!");
        
        let isCorrect = guess === correctPasswoords;
        
        gueses.push({ guess: guess, isCorrect: isCorrect });
        
        myList.innerHTML += `<li>${guess} - ${isCorrect ? 'true' : 'false'}</li>`;
        
        if (guess === correctPasswoords) {
            alert("Welkom!");
        } else {
            alert("Vul het correcte wachtwoord in!");
        }
    }
});



