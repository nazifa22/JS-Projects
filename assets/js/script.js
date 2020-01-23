var item = document.getElementById('item').value;
document.getElementById('todoList').style.display = 'none';

function add() {
    var todo = document.getElementById('todoList');

    var cloneList = document.getElementById('todoList').cloneNode(true);
    var clonedNode = document.getElementById('todo').appendChild(cloneList);
    
    var item = document.getElementById('item').value;
    var todoTitle = document.getElementById('todo-title').innerHTML;
    document.getElementById('todo-title').innerHTML = item;
    
    document.getElementById('todoList').style.display = 'block';
    console.log(todoTitle);
}

function remove(e) {
    e.currentTarget.parentElement.parentElement.remove();
}

function completed(e) {
   var element = e.currentTarget.parentElement.parentElement;
   var cloneNode = element.cloneNode(true);
   document.getElementById('completed').appendChild(cloneNode);
   e.currentTarget.parentElement.parentElement.remove();
}