function addtodo(){
    const inputelement = document.querySelector('input');
    const value = inputelement.value;

    const todoContainer = document.createElement('div');
    todoContainer.className = "flex justify-between items-center";
    const todoTitle = document.createElement('h1');
    todoTitle.textContent = value;

    const todoButton = document.createElement('button');
    todoButton.textContent = 'Done';
    todoButton.className = "bg-green-500 p-2 rounded-lg";

    todoContainer.appendChild(todoTitle);
    todoContainer.appendChild(todoButton);

    let todesconterner = document.querySelector('#todoscontainer');

    todesconterner.appendChild(todoContainer);
    
   inputelement.value = "";



}