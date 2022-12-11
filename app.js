const sandwichmenu = document.querySelector('#sandwichmenu');
const js_menu = document.querySelector('.js_menu');

sandwichmenu.addEventListener('click', function(e) {
  e.preventDefault();
  sandwichmenu.classList.toggle('active');
  js_menu.classList.toggle('active');
});


document.querySelector(".trigger").onclick = function (){
  document.querySelector(".nav").classList.toggle("show");
  document.querySelector("body").classList.toggle("hidden");
}

window.onresize = function (){
  document.querySelector(".nav").classList.remove("show");
  document.querySelector("body").classList.remove("hidden");
}