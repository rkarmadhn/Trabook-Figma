const rowVac = document.querySelector(".row-vacation");

let dataVac = [];

const loadDataVac = async () => {
  try {
    const res = await fetch("/database/voc-db.json");
    dataVac = await res.json();
    loadUserDataVac(dataVac);
  } catch (error) {
    console.log(error);
  }
};

const loadUserDataVac = (vac) => {
  const outputVac = vac
    .map((elVac) => {
        return `<div class="col-lg-4 col-md-4 col-sm-12 my-2" style="border-radius: 10px">
        <div class="card">
          <img src="${elVac.image}" alt="" class="image-card" />
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center my-2">
              <h5 class="m-0">${elVac.location}</h5>
              <p class="p-content fw-bold m-0" style="color: #fa7436">$${elVac.price}K</p>
            </div>
            <div class="d-flex justify-content-between align-items-center gap-2 my-2">
        <div class="group d-flex gap-2">
        <i class="fa-solid fa-location-dot" style="color: #666"></i>
        <p class="p-content m-0">${elVac.day}</p>
        </div>
              <div class="d-flex justify-content-center align-items-center gap-1">
                <i class="fa-solid fa-star" style="color: #ffc107"></i>
                <p class="p-content m-0">${elVac.rating}</p>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    })
    .join("");
  rowVac.innerHTML = outputVac;
};

loadDataVac();
