// ====== Task Data ======
const initialTasks = [
  { id: 1, title: "Understanding Data 🚀", description: "Create a killer Resume", status: "todo" },
  { id: 2, title: "Master JavaScript 💛", description: "Get comfortable with the fundamentals", status: "doing" },
  { id: 3, title: "Keep on Going 🏆", description: "You're almost there", status: "doing" },
  { id: 11, title: "Crush Framework 📚", description: "Study fundamental data structures and algorithms to solve coding problems efficiently", status: "todo" },
  { id: 12, title: "Explore ES6 Features 🚀", description: "Gain practical experience and collaborate with others in the software development community", status: "done" },
  { id: 13, title: "Build Portfolio Projects 🛠️", description: "Create a portfolio showcasing your skills and projects to potential employers", status: "done" },
];

// ====== Select columns ======
const todoColumn = document.querySelector(".todo");
const doingColumn = document.querySelector(".doing");
const doneColumn = document.querySelector(".done");

// ====== Display Tasks ======
function displayTasks() {
  initialTasks.forEach(task => {
    const div = document.createElement("div");
    div.classList.add("task");
    div.textContent = task.title;

    // Open modal when task is clicked
    div.addEventListener("click", () => openModal(task));

    // Place task in the correct column
    if (task.status === "todo") {
      todoColumn.appendChild(div);
    } else if (task.status === "doing") {
      doingColumn.appendChild(div);
    } else if (task.status === "done") {
      doneColumn.appendChild(div);
    }
  });
}

// ====== Modal ======
function openModal(task) {
  const modal = document.createElement("div");
  modal.classList.add("modal");

  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-btn">&times;</span>
      <h3>Task Details</h3>

      <label>Title:</label>
      <input type="text" value="${task.title}" />

      <label>Description:</label>
      <textarea>${task.description}</textarea>

      <label>Status:</label>
      <select>
        <option value="todo" ${task.status === "todo" ? "selected" : ""}>To Do</option>
        <option value="doing" ${task.status === "doing" ? "selected" : ""}>Doing</option>
        <option value="done" ${task.status === "done" ? "selected" : ""}>Done</option>
      </select>
    </div>
  `;

  document.body.appendChild(modal);

  // Close modal when user clicks the X button
  modal.querySelector(".close-btn").addEventListener("click", () => modal.remove());
}

// ====== Run Function ======
displayTasks();

// Done 😎😎