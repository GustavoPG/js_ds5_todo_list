let tasks;
let cont;
let contDone;
tasks = [
    {
        "id": 0,
        "task": "Tarea 1",
        "done": false
    },
    {
        "id": 1,
        "task": "Tarea 2",
        "done": true
    },
    {
        "id": 2,
        "task": "Tarea 3",
        "done": false
    },
    {
        "id": 3,
        "task": "Tarea 4",
        "done": false
    }
];

const addTask = () => {
    const txt = document.getElementById('txtNewTask').value;
    if (txt != ''){
        let newTask = {id: cont, task: txt, done: false};
        tasks.push(newTask);
        document.getElementById('txtNewTask').value = '';
        document.getElementById('txtNewTask').focus();
        cont += 1;
        renderInfo();
    }
}   

const renderInfo = () => {
    const txt = document.getElementById('txtNewTask').value;
    const elemento = document.getElementById('listTasks');
    contDone = 0;

    let doc = `<div class="list_tasks">
                    <div class="item1 title">ID</div><div class="item2 title">Tarea</div><div class="item3 title">Acciones</div>
                </div>`;

    if (tasks.length >= 0){
        for (let task of tasks){
            doc += `<div id="task${task.id}" class="list_tasks">
                        <div class="item1">${task.id}</div>
                        <div class="font-weight-bold item2 ${task.done ? 'text-primary' : 'text-danger'}">
                        ${task.task}</div>
                        <div class="item3 action">
                        <input type="checkbox" value="check" ${task.done ? 'checked' : ''} onclick="checkDone(${task.id})" class="form-check-input" />
                        <span id="b${task.id}" class="pin icon" onclick="deleteTask(${task.id})"> X </span>
                        </div>
                    </div>`;
                    if (task.done) {
                        contDone++;
                    }
        }
        document.getElementById('viewTotal').innerHTML = tasks.length;
        document.getElementById('viewDone').innerHTML = contDone;
        elemento.innerHTML = doc;
    }   
}

const checkDone = (id) =>{
    const index = tasks.findIndex(task => task.id === id);
    if (index != -1) {
        tasks[index].done === true ? tasks[index].done = false : tasks[index].done = true;
        renderInfo();
    }
}

const deleteTask = (id) =>{
    const index = tasks.findIndex(task => task.id === id);
    if (index != -1) {
        tasks.splice(index, 1);
        renderInfo();
    }
}

const load = () =>{
    cont = tasks.length;
    renderInfo();
}

document.getElementById('btnAdd').addEventListener('click',addTask);
window.addEventListener('load', load);