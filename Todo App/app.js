const form=document.querySelector(".form");
const input=document.querySelector(".input");
const todosUL=document.querySelector(".todos");

const todos=JSON.parse(localStorage.getItem("todos"));

if(todos){
    for(todo of todos){
        addTodo(todo);
    }
}
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    addTodo();
});
function addTodo(todo){
    let todoText=input.value
    if(todo){
        todoText=todo;
    }
    if(todoText){
        const todoEl=document.createElement("li");
        
        todoEl.innerText=todoText;
        


        todoEl.addEventListener("contextmenu",(e)=>{
            e.preventDefault();
            todoEl.remove();
            updateLS();
        });
        todosUL.appendChild(todoEl);
        input.value="";
        updateLS();
    }
}
function updateLS(){
    const todosEl=document.querySelector("li");
    const todos=[];
    todosEl.forEach((todoEl) => {
        todos.push({
            text: todoEl.innerText,
        
        });
    });
    localStorage.setItem("todos",JSON.stringify(todos));
}

