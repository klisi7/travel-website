

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

if(document.querySelector(".header_btn") == undefined){
    document.querySelectorAll(".nav_links").forEach(links =>{
        links.style.color = "#ef233c";
        links.style.fontWeight = "100";
        links.style.boxShadow = "none";
    })
}


let selectBtn = document.querySelector(".select_btn"),
    items = document.querySelectorAll(".item");

selectBtn.onclick = () =>{
    selectBtn.classList.toggle("open");
}

items.forEach(target =>{
    let newBtn = document.createElement("button");
            newBtn.classList.add("go_btn");
            newBtn.innerHTML = "Keres";

    target.onclick = () =>{
        target.classList.toggle("checked");

        let checked = document.querySelectorAll(".checked");
        let checkedTxt = target.querySelector(".item_text").innerHTML;

        if(checked){
            document.querySelector(".select_container").appendChild(newBtn);
        }
    }
})