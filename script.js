const inputField = document.querySelector(".input-field textarea"),
todoList = document.querySelector(".todolist"),
pendingNum = document.querySelector(".pending-num"),
clearButton = document.querySelector(".clear-all");

//console.log(inputField,todoList,pendingNum,clearButton);

function alltask(){
    let task = document.querySelectorAll(".pending");
    pendingNum.textContent = task.length === 0 ? "no" : task.length;

    let allList = document.querySelectorAll(".list");
    if(allList.length > 0){
        todoList.style.marginTop = "20px";
        clearButton.style.pointerEvents = "auto";
        return
    }
    todoList.style.marginTop = "0px";
    clearButton.style.pointerEvents = "none";
}


inputField.addEventListener("keyup" , (e) => {
    let inputVal = inputField.value.trim();
    //console.log(inputVal);

    if (e.key === "Enter" && inputVal.length>0){
        let litag = `<li class="list pending" onclick="handleStatus(this)">
                <input type="checkbox"/>
                <span class="task">${inputVal}</span>
                <i class="bx bxs-trash" onclick="deleteTask(this)"></i>
            </li>`
        todoList.insertAdjacentHTML("beforeend", litag);

        inputField.value = "";
        alltask();
    }
    

});

function handleStatus(e){
    const checkbox = e.querySelector("input");
    checkbox.checked = checkbox.checked ? false:true;
    e.classList.toggle("pending");
    alltask();
}

function deleteTask(e){
    e.parentElement.remove();
    console.log(e.parentElement);
    
    alltask();
}

clearButton.addEventListener("click" , () => {
    todoList.innerHTML = ""; 
    alltask();
});