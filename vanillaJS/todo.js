const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

// 빈 배열 선언 (업데이트 되어야 하므로 const가 아닌 let으로 선언)
let toDos= [];

// 저장할 값을 문자열로 바꿔서 저장(localStorage는 문자열만 저장 가능하기 때문에 필요)
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo)=>toDo.id !== parseInt(li.id));
    saveToDos();
}

// 새로운 값을 추가하면 toDoList에 <li><span><button/></sapn></li>태그 만들어서 화면에 보이도록 추가
function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText= newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        // id로 값을 구분하기 위해서
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos!==null){
    // 다시 배열로 사용해야 하니까 json.parse를 사용하여 문자열을 배열로 만들어준다.
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
