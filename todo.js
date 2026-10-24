
const input = document.querySelector("#taskInput");
const addbtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");

function addTask() {
    if (input.value.trim() === "") {
        return;
    }

    const li = document.createElement("li");
    const span = document.createElement("span");
    const delbtn = document.createElement("button");

    span.textContent = input.value;
    delbtn.textContent = "Delete";
    li.append(span);
    li.append(delbtn);
    taskList.append(li);

    span.addEventListener("click", () => {
        span.classList.toggle("completed");
    });

    delbtn.addEventListener("click", () => {
        li.remove();
    });


    input.value = "";
}

addbtn.addEventListener("click", addTask);

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
