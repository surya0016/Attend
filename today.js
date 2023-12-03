let todoInput = document.getElementById("input");
let todoList = document.getElementById("list");
let addBtn = document.getElementById('add-btn');

addBtn.addEventListener('click', function(){
    todoList.innerHTML = `<input type="checkbox" name="task">
<label for="task">${todoInput.value}</label> <button id='remove-btn'>remove</button>`

    console.log(todoInput);
})
console.log(todoInput.value);