const galleryRow = document.querySelector(".gallery__row");
const photosNumber = document.querySelector(".photos__number");

const query = new URLSearchParams(location.search);
const userId = query.get("userId");

getData(
  `https://jsonplaceholder.typicode.com/albums?userId=${userId}`,
  (photos) => {
    photos.map((photo) => {
      galleryRow.innerHTML += `
      <div class="photos__card">
        <p class="photos__title">${photo.title}</p>
        <button onclick="location.href='https://via.placeholder.com/600/771796'" class="photos__btn">Photos</button> 
      </div>
    `;
      photosNumber.textContent = photos.length;
    });
  }
);
