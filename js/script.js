const input = document.querySelector('.todo__text')
const btn = document.querySelector('.todo__add')
const todoItems = document.querySelector('.todo__items')
let arrTaskObjects = localStorage.getItem('todo__items') !== null
    ? JSON.parse(localStorage.getItem('todo__items'))
    : []

let taskId = localStorage.getItem('id') !== null
    ? +localStorage.getItem('id')
    : 0

const renderTasks = () => {
    todoItems.innerHTML = ""

    for (let taskObject of arrTaskObjects) {
        const todoItem = document.createElement('li')
        const todoTask = document.createElement('span')
        const todoActionCom = document.createElement('span')
        const todoActionDel = document.createElement('span')
        todoItem.classList.add('todo__item',
            taskObject.completed
                ? 'completed'
                : 'active')
        todoTask.classList.add('todo__task')
        todoActionCom.classList.add('todo__action', 'todo__action_complete')
        todoActionDel.classList.add('todo__action', 'todo__action_delete')

        todoTask.innerText = taskObject.value
        todoItem.dataset.id = taskObject.id
        todoItem.append(todoTask)
        todoItem.innerHTML += `<span class="todo__date"> ${taskObject.date}</span>`
        todoItem.append(todoActionCom)
        todoItem.append(todoActionDel)
        todoItems.append(todoItem)
    }
}


const getInputValue = (event) => {
    event.preventDefault()
    if (input.value.trim() !== '') {
        localStorage.setItem("id", taskId)
        localStorage.setItem("todo__items", JSON.stringify(arrTaskObjects))
        const taskObject = {
            value: input.value,
            date: new Date().toLocaleString().slice(0, -3),
            completed: false,
            id: taskId
        }
        arrTaskObjects.push(taskObject)
        renderTasks(arrTaskObjects)
        taskId++
        input.value = ''
    }
}

const deleteTask = (todoItem) => {

    arrTaskObjects = arrTaskObjects.filter(
        (taskObj) => taskObj.id !== +todoItem.dataset.id
    )
    renderTasks(arrTaskObjects)

    localStorage.setItem("todo__items", JSON.stringify(arrTaskObjects))
}

const completeTask = (todoItem) => {
    arrTaskObjects = arrTaskObjects.map(
        (taskObject) =>
            taskObject.id === +todoItem.dataset.id
                ? {
                    value: taskObject.value,
                    date: taskObject.date,
                    completed: !taskObject.completed,
                    id: taskObject.id
                }
                : taskObject

    )
    renderTasks(arrTaskObjects)

    localStorage.setItem("todo__items", JSON.stringify(arrTaskObjects))
}

todoItems.addEventListener('click', (event) => {
    if (event.target.classList.contains('todo__action_delete')) {
        deleteTask(event.target.parentNode)
    } else if (event.target.classList.contains('todo__action_complete')) {
        completeTask(event.target.parentNode)
    }
})

btn.addEventListener('click', getInputValue)
const select = document.querySelector('.todo__options')





const renderActiveTasks = () => {
    let arrTaskActive = arrTaskObjects.filter(
        (taskObj) => taskObj.completed === false
    )
    renderTasks(arrTaskActive)
}



const renderCompletedTasks = () => {
    let arrTaskCompleted = arrTaskObjects.filter(
        (taskObj) => taskObj.completed === true
    )

    renderTasks(arrTaskCompleted)
}
select.addEventListener('click', (event) => {
    if (event.target.value === 'all') {
        renderTasks(arrTaskObjects)
    } else if (event.target.value === 'active') {
        renderActiveTasks()
    } else if (event.target.value === 'completed') {
        renderCompletedTasks()
    }
}
)
renderTasks(arrTaskObjects)


