const navItem = document.querySelector(".nav-items");
const btnMenu = document.querySelector(".btn-menu");
const btnHide = document.querySelector(".btn-hide");

btnMenu.onclick = () => {
    navItem.classList.add('showNav');
    btnMenu.classList.add("hideBtn");
    btnHide.classList.add("showBtn");
  };
  btnHide.onclick = () => {
    navItem.classList.remove('showNav');
    btnMenu.classList.remove("hideBtn");
    btnHide.classList.remove("showBtn");
  };
