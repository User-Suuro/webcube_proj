const outsideBurger = document.getElementById("burger-out");
const insideBurger = document.getElementById("burger-in");
const burgerContainer = document.getElementById("burger-container");

outsideBurger.addEventListener("click", function(){
    burgerContainer.classList.toggle("active");
    burgerContainer.classList.remove("closing");
    outsideBurger.classList.toggle("rotate")
    insideBurger.style.display = "flex";
   
})

insideBurger.addEventListener("click", function(){
    burgerContainer.classList.toggle("closing");
    burgerContainer.classList.remove("active");
    outsideBurger.classList.remove("rotate")
    insideBurger.style.display = "none";
   
})


