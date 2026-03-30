// DOM Elements
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");
const filters = document.querySelectorAll(".filter");
const clearCompletedBtn = document.getElementById("clear-completed");

// State
let todos = [];
let currentFilter = "all";

// Create todo element
function createTodoElement(todo) {
    const li = document.createElement("li");
    li.dataset.id = todo.id;
    li.className = todo.completed ? "completed" : "";

    const span = document.createElement("span");
    span.textContent = todo.text;
    span.addEventListener("click", () => toggleTodo(todo.id));
    li.appendChild(span);

    const delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.addEventListener("click", () => deleteTodo(todo.id));
    li.appendChild(delBtn);

    return li;
}

// Render todos
function renderTodos() {
    todoList.innerHTML = "";
    const filtered = todos.filter(todo => {
        if (currentFilter === "active") return !todo.completed;
        if (currentFilter === "completed") return todo.completed;
        return true;
    });
    filtered.forEach(todo => todoList.appendChild(createTodoElement(todo)));
    updateStats();
}

// Add todo
function addTodo(text) {
    const todo = {
        id: Date.now(),
        text,
        completed: false
    };
    todos.push(todo);
    renderTodos();
}

// Toggle completed
function toggleTodo(id) {
    const todo = todos.find(t => t.id == id);
    todo.completed = !todo.completed;
    renderTodos();
}

// Delete todo
function deleteTodo(id) {
    todos = todos.filter(t => t.id != id);
    renderTodos();
}

// Update stats
function updateStats() {
    const left = todos.filter(t => !t.completed).length;
    itemsLeft.textContent = `${left} items left`;
}

// Filter todos
filters.forEach(btn => {
    btn.addEventListener("click", () => {
        currentFilter = btn.dataset.filter;
        filters.forEach(f => f.classList.remove("active"));
        btn.classList.add("active");
        renderTodos();
    });
});

// Clear completed
clearCompletedBtn.addEventListener("click", () => {
    todos = todos.filter(t => !t.completed);
    renderTodos();
});

// Form submit
form.addEventListener("submit", e => {
    e.preventDefault();
    if (!input.value.trim()) return;
    addTodo(input.value.trim());
    input.value = "";
});

// Initialize
renderTodos();
