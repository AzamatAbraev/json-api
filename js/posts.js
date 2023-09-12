const postsRow = document.querySelector(".posts__row");
const postsRange = document.querySelector(".posts__range");

const query = new URLSearchParams(location.search);
const userId = query.get("userId");

getData(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, (posts) => {
  posts.map((post) => {
    postsRow.innerHTML += `
      <div class="posts__card">
        <h3> <span>${post.id}. </span>${post.title}</h3>
        <p>${post.body}</p>
      </div>
    `;
    postsRange.textContent = `${posts[0].id} - ${posts[posts.length - 1].id}`;
  })
} );