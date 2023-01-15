let todos = [];

const list = document.getElementById("todo-list");

const input = document.getElementById("input-string");

const addTask = document.getElementById("add-button").addEventListener('click', addTodo);


let allTodos = document.getElementsByTagName('li');
let i;
for(i < 0; i < allTodos.length; i++) {
let deleteButton = document.createElement('button');
let cross = document.createTextNode("\u274C");

deleteButton.className = "close";
deleteButton.appendChild(cross);
allTodos[i].appendChild(deleteButton);
}

let close = document.getElementsByClassName('close');

let el;
for (el =0; el < close.length; el++){
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none"
  }
}

let listEl = document.querySelector('ul');
listEl.addEventListener('click', function(ev) {
  if(ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }

}, false);




function addTodo() {
 let  li = document.createElement("li");
 let text = document.createTextNode(input.value);

  li.appendChild(text);
  if (input.value === '') {
    alert ('You must write something!')
  }else {
    list.appendChild(li);
  }


input.value = "";

let deleteButton = document.createElement('button');
let cross = document.createTextNode("\u274C");

deleteButton.className = "close";
deleteButton.appendChild(cross);
li.appendChild(deleteButton);

for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
  let div = this.parentElement;
  div.style.display = "none";
  }
 }
}


const removeAllBtn = document.getElementById("delete-button").addEventListener('click', removeAll);
function removeAll() {
  todos = [];
  while (list.firstChild) {
    element.removeChild(element.firstChild);
  }
}










