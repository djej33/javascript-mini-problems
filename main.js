// Your code goes here !
/*# PROBLEM 1 :  THE TASK MANAGER

### Context :
You have to develop a task manager in javascript using the localstorage.

### Goal :
Create a simple web application :

- Add a new task
- Delete a task
- Mark a task as done
- Save the tasks in localstorage


### STEPS
#### Step 1: Creating the User Interface
- Design and structure a straightforward HTML/CSS user interface that includes an input field for tasks and a button to add them.
Step 2: Capturing DOM Elements
- Use JavaScript to capture necessary DOM elements such as the input field, add button, and task list.

#### Step 3: Adding a New Task
- Create a function that gets triggered upon the add button click, to create a new task using the input field value.

#### Step 4: Displaying Tasks
- Ensure each new task is displayed on the user interface, preferably in a list (`<ul>` or `<ol>`).

#### Step 5: Storing Tasks
- Store tasks in a JavaScript array to keep track of all added tasks.

#### Step 6: Deleting Tasks
- Add a delete button to each task and create a function that will remove the corresponding task from the UI and array when this button is clicked.

#### Step 7: Marking Tasks as Completed
- Add functionality to mark tasks as completed (perhaps by clicking on them), and visualize this on the UI (e.g., by striking through the task).

#### Step 8: Input Field Validation
- Ensure the input field is not empty before adding a task and display an error message if needed.

#### Step 9: Task Persistence
- Use `localStorage` to store tasks persistently in the user’s browser, so they are retrieved even after the page reloads.

#### Step 10: Testing and Debugging
- Perform testing to ensure all functionalities (adding, deleting, marking as completed, validating, and data persistence) work as expected and debug if necessary.
Each of these steps involves skills in DOM manipulation, event handling, and programming logic in JavaScript. Ensure students comprehend each step before moving to the next, building their confidence and understanding as they progress through the problem.

*/


let form = document.querySelector('#todo-form');
let input = document.querySelector('#todo-input');
let list = document.querySelector('#todo-list');
let submit= document.querySelector('#todo-submit');


function validateTodo(target){
    target.parentNode.classList.add('done');
    let myData = list.innerHTML;
    setLocalStorage(myData);
    
}

function deleteTodo(target){
    target.parentNode.remove();
    let myData = list.innerHTML;
    setLocalStorage(myData);
}

function getLocalStorage(data){ // Récupérer la todo
    data = localStorage.getItem('todo');
    return data;
}

function setLocalStorage(data){ // Envoi la todo
    localStorage.setItem('todo', data);
}

window.onload = function(){
    let mySaveData = getLocalStorage();
    if(mySaveData != null){
        list.innerHTML = mySaveData;
    }else{
        list.innerHTML ="";
    }
}

submit.addEventListener('click', function(e){
    e.preventDefault();// Pour ne pas recharger la page
 // Ajoute le curseur morsque on appuie sur "ajouter" input.focus()
    let myTask = input.value;
    if(myTask ==""){
        alert('Veuillez saisir une tâche')
    } 
    
    input.value = ""; //vide le formulaire pour récupérer la valeur de l'input
    let li = document.createElement('li'); //pour créer un élément li
    let liContent = `<span>${myTask}</span>
    <button class="btn btn-danger" onClick="deleteTodo(this)">Supprimer</button>
    <button class="btn btn-success" onClick ="validateTodo(this)">Fait</button>`

    li.innerHTML = liContent; // Pour ajouter le contenu de l'input dans le li
    list.appendChild(li); // pour ajouter le li ds la liste
    console.log(form);
})

    
   



