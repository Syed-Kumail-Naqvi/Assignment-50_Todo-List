
var getUl = document.getElementById('todo-list');

function todoApp() {

    if (document.getElementById('todo-input').value) {

    var todoWork = document.getElementById('todo-input');

    // create li through js 
    var todoLi = document.createElement('li');

    // create textnode for li 
    var todoLiText = document.createTextNode(todoWork.value);

    // append textnode with li 
    todoLi.appendChild(todoLiText);

    // appendChild li with ul 
    getUl.appendChild(todoLi);

    // empty the input field 
    todoWork.value = '';

    // create buttons div for delete and edit button 
    var buttons = document.createElement('div');
     
    todoLi.appendChild(buttons);


    // For delete button 

    // create delete button for li 
    var delBtn = document.createElement('i');
    
    buttons.appendChild(delBtn);

    // give a class to show icon to delBtn through set attribute
    delBtn.setAttribute('class','fa-solid fa-trash-can');

    console.log(delBtn);
    // give a onclick to delBtn through set attribute
    delBtn.setAttribute('onclick','deleteThis(this)'); 


    // For editing button 
    var editBtn = document.createElement('i');  
    buttons.appendChild(editBtn); 

    editBtn.setAttribute('class','fa-solid fa-pen');
    
    editBtn.setAttribute('onclick','editThis(this)'); 

    } else {
        alert('Kindly Enter Value')
    }

}

// Deleting function 
function deleteThis(e) {  

    console.log(e);
    console.log(e.parentNode.parentNode);
    e.parentNode.parentNode.remove();
}

// Editing function 
function editThis(e) {
    var dafaultWork = e.parentNode.parentNode.childNodes[0].textContent;
    var changeWork = prompt('Enter edit value' , dafaultWork);
    console.log(e.parentNode.parentNode.childNodes[0].nodeValue);
    e.parentNode.parentNode.childNodes[0].textContent = changeWork;
}