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



// Carousel

let carousel = document.querySelector(".carousel");

let isDragStart = false, prevPageX, prevScrollLeft;

let dragStart = (e) =>{
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}

let dragging = (e) =>{
    if(!isDragStart) return;
    e.preventDefault();

    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}

let dragStop = () =>{
    isDragStart = false;
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);