// Mengambil element family/pembungkus
const row = document.querySelector(".row-exclusive");
// nama api dengan array kosong
let usersData = [];
// pemanggilan API
const loadData = async () => {
  try {
    const url = await fetch("/database/db.json");
    usersData = await url.json();
    loadUserData(usersData);
  } catch (error) {
    console.log(error);
  }
}
// Penggunaan API
const loadUserData = (data) => {
  // Output
  const outputCard = data
    .map((el) => {
      if (el.id <= 4) {
        return `
      <div class="col-lg-3 col-md-3 col-sm-12 my-2" style="border-radius: 10px">
        <div class="card">
          <img src="${el.image}" alt="" class="image-card"/>
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="m-0">${el.city}</h5>
              <div class="d-flex justify-content-center align-items-center gap-1">
                <i class="fa-solid fa-star" style="color: #ffc107"></i>
                <p class="p-content m-0">${el.rating}</p>
              </div>
            </div>
            <div class="d-flex justify-content-between align-content-center">
              <div class="d-flex justify-content-center align-items-center gap-2">
                <i class="fa-solid fa-location-dot" style="color: #666"></i>
                <p class="p-mini-content m-0">${el.country}</p>
              </div>
              <div class="d-flex justify-content-center align-items-center gap-2">
                <p class="p-content text-decoration-line-through m-0">$${el.price}</p>
                <p class="p-content m-0 px-1" style="background-color: #ffe7db; color: #fa7436">$${el.price - 100}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;
      }
    })
    .join("");
  // Memasukan hasil ke dalam family/pembungkus
  row.innerHTML = outputCard;
};
// Menjalankan Function
loadData();
