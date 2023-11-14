const burger = document.getElementById("burger-out")
const sideNav = document.getElementsByClassName("navbar-items-container")
let clicks = 0


burger.addEventListener("click", () =>{
    if (clicks == 0){
        sideNav[0].style.right = "0"
        burger.style.transform = "rotate(180deg)"
        burger.style.transition = "transform 1s ease"
        clicks++;
    }else{
        clicks = 0
        sideNav[0].style.right = "-50vw"
        burger.style.transform = "rotate(0deg)"
        burger.style.transition = "transform 1s ease"
    }
})
   



    
