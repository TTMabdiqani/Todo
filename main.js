function addtodo(){
    const inputelement = document.querySelector('input');
    const value = inputelement.value;
    if(value == ""){

        return;
    }
   


    const todoContainer = document.createElement('div');
    todoContainer.className = "flex justify-between items-center";
    const todoTitle = document.createElement('h1');
    todoTitle.textContent = value;

    const todoButton = document.createElement('button');
    todoButton.textContent = 'Done';
    todoButton.className = "bg-green-500 p-2 rounded-lg btn";
    todoButton.onclick = markAsDone;

    todoContainer.appendChild(todoTitle);
    todoContainer.appendChild(todoButton);

    let todesconterner = document.querySelector('#todoscontainer');

    todesconterner.appendChild(todoContainer);
    
   inputelement.value = "";
   




}


function markAsDone(event){
 const clickedButton = event.target;
 clickedButton.classList.add('hidden');
 

const todoItem = clickedButton.previousElementSibling;
todoItem.classList.add('line-through');
console.log(todoItem);
}