const todosRow = document.querySelector(".todos__row");
const todosNumber = document.querySelector(".todos__number");

const query = new URLSearchParams(location.search);
const userId = query.get("userId");

getData(
  `https://jsonplaceholder.typicode.com/todos?userId=${userId}`,
  (todos) => {
    todos.map((todo) => {
      todosRow.innerHTML += `
      <div class="todos__card">
        <p class="todos__title">${todo.title}</p>
        <p class="todos__status">${todo.completed ? "&#9989;" : "&#10060;"}</p>
      </div>
    `;
    todosNumber.textContent = todos.length;
    });
  }
);