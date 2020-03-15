let count = 1;

let addTodo = () => {
    let val = document.getElementById('add-todo-value').value

    let newEl = document.createElement('h3');
    
    newEl.innerText = val;
    newEl.id = 'todo' + count;
    newEl.onclick = deleteTodo;
    count += 1;
    document.getElementById('my-todo-list').appendChild(newEl);
    
    return false;
}

let deleteTodo = (e) => {
    let todo = document.getElementById(e.target.id);
    document.getElementById('my-todo-list').removeChild(todo);
}


//Add Submit functions on load, so my HTML doesn't need any JS inline.
let init = () => {
    document.getElementById('add-todo-form').onsubmit = addTodo;
}

window.onload = init;