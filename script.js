//your code here
let list=document.getElementById("todoList")
function handleTodo()
{
	let todo=document.getElementById("newTodoInput")
	if(todo.value!="")
	{
		let todoItem=document.createElement("li")
		todoItem.innerText=todo.value
		list.appendChild(todoItem)
		todo.value=""
	}
	else{
		alert("Empty submission of todo items is not allowed.")
	}
}

