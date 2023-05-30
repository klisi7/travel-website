var nav = document.querySelector("nav");

document.querySelector(".toggle").onclick = () =>{
    let menu_list = document.querySelector(".menu_list");
    
    menu_list.classList.toggle("active");
    nav.classList.add("sticky");
};  

document.querySelectorAll(".nav_links").forEach(links =>{
    links.onclick = function(){
        document.querySelector(".menu_list").classList.remove("active");
    }
})

window.addEventListener("scroll", () =>{
    let scrolled = window.scrollY;

    nav.classList.toggle("sticky", scrolled > 10);
})

document.querySelector(".header_btn").addEventListener("mouseover", () =>{
    document.querySelector(".header_btn i").classList.add("go");
})

document.querySelector(".header_btn").addEventListener("mouseout", () =>{
    document.querySelector(".header_btn i").classList.remove("go");
})