// const passwoordButton = document.querySelector('.btn');
// const myList = document.querySelector('.password-list');
// let guess = "";

// const correctPasswoords = "wachtwoord"; 

<<<<<<< HEAD
let gueses = [];

passwoordButton.addEventListener('click', function() {
    while (guess !== correctPasswoords) {
        guess = prompt("Wat is je wachtwoord!");
        
        let isCorrect = guess === correctPasswoords;
        
        gueses.push({ guess: guess, isCorrect: isCorrect });
        
        myList.innerHTML += `<li>${guess} - ${isCorrect ? 'true' : 'false'}</li>`;
=======
// passwoordButton.addEventListener('click', function() {
//     while (guess !== correctPasswoords) {
//         guess = prompt("Wat is je wachtwoord!");
        
//         myList.innerHTML += `<li>${guess}</li>`;
>>>>>>> 7dc5e67544a53fa74fb5d521ab95b6635f9b2608
        
//         if (guess === correctPasswoords) {
//             alert("Welkom!");
//         } else {
//             alert("Vul het correcte wachtwoord in!");
//         }
//     }
// });

let tasks = [];
console.log(tasks);

function makeTask() {
    const description = prompt("Voer een taakbeschrijving in");
    return {
        id: Date.now(),
        description: description,
        completed: false
    };
}

const task = makeTask();
console.log(task);

const newTask = makeTask();
tasks.push(newTask);
console.log(tasks);

function displayTasks(tasks) {
    for (let i = 0; i < tasks.lenght; i++) {
        console.log(`ID: ${tasks[i].id}, Beschriving: ${tasks[i].description}`)
    }
}

function saveTasks(tasks) {
    const tasksJSON = JSON.stringify(tasks);
    localStorage.setItem("tasks", tasksJSON);
}

function loadTasks() {
    const tasksJSON = localStorage.getItem("tasks");
    if (tasksJSON) {
        return JSON.parse(tasksJSON);
    } else {
        return [];
    }
}

tasks = loadTasks();
console.log(tasks);

function completeTask(tasks, id) {
    for (let i = 0; i < tasks.lenght; i++) {
        if (tasks[i].id === id) {
            tasks[i].completed = true;
        }
    }
}

<<<<<<< HEAD

=======
saveTasks(tasks);
>>>>>>> 7dc5e67544a53fa74fb5d521ab95b6635f9b2608
