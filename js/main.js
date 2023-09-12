const usersRow = document.querySelector(".users__row");
const userCount = document.querySelector(".users-count");
const mainBody = document.querySelector("main");

getData("https://jsonplaceholder.typicode.com/users", (users, status) => {
  if (status === 200) {
    users.map((user) => {
      usersRow.innerHTML += `
        <div class="users__card">
        <div class="user__photo">
          <img src="https://via.placeholder.com/150/771796" alt="User">
          <p>@${user.username}</p>
        </div>
        <div class="user__info">
          <h3>${user.name}</h3>
          <p>Email: <span>${user.email}</span></p>
          <p>Address: <span>${user.address.street}, ${user.address.city}</span></p>
          <p>Phone: <span>${user.phone}</span> </p>
          <p>Company: <span>${user.company.name}</span></p>
        </div>
        <div class="user__links">
          <a href="./todos.html?userId=${user.id}" class="btn">Todos</a>
          <a href="./posts.html?userId=${user.id}" class="btn">Posts</a>
          <a href="./gallery.html?userId=${user.id}" class="btn">Gallery</a>
        </div>
      </div>
      `;
      userCount.textContent = users.length;
    })
  } else {
    mainBody.innerHTML = `<div class="container">
        <h3 class="error-message">${status}</h3>
      </div>
    `;
  }
});


