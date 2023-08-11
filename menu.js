let menuBtn = document.querySelector(".menu-btn");
let closeBtn = document.querySelector(".close-btn");
let menuMobile = document.querySelector (".nav-container");

menuBtn.addEventListener("click", ()=> {
  menuMobile.classList.add("nav-container__show");
  closeBtn.style.display = "block"
  menuBtn.style.display = 'none'
});

closeBtn.addEventListener("click", ()=>{
  menuMobile.classList.remove("nav-container__show");
  closeBtn.style.display = "none";
  menuBtn.style.display= 'block';
})