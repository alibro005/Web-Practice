const navMenu = document.getElementById("nav-items");
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener("click",function(){
     navMenu.classList.toggle('show');
     navMenu.classList.add('hide');
});
