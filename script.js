let nav = document.querySelector("nav");
let scrolled = window.scrollY;

document.querySelector(".toggle").onclick = () =>{
    document.querySelector(".menu_list").classList.toggle("active");
    nav.classList.toggle("open");



};

document.querySelectorAll(".nav_links").forEach(links =>{
    links.onclick = function(){
        document.querySelector(".menu_list").classList.remove("active");
    }
})

window.addEventListener("scroll", () =>{

    if(window.scrollY > 10){
        nav.style.backgroundColor = "rgba(0, 0, 0, .2)";
        nav.style.backdropFilter = "blur(10px)";
    }
    else if(){
        nav.style.backgroundColor = "transparent";
        nav.style.backdropFilter = "blur(0px)";
    }

})
