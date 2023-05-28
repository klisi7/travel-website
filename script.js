
document.querySelector(".toggle").onclick = function(){
    document.querySelector(".menu_list").classList.toggle("active");

    if(document.querySelector(".menu_list.active"))
        document.querySelector("nav").style.backgroundColor = "rgba(0, 0, 0, .5)";
    else
        document.querySelector("nav").style.backgroundColor = "transparent";
};

document.querySelectorAll(".nav_links").forEach(links =>{
    links.onclick = function(){
        document.querySelector(".menu_list").classList.remove("active");
    }
})

