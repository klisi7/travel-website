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

if(document.querySelector(".header_btn")){
    document.querySelector(".header_btn").addEventListener("mouseover", () =>{
    document.querySelector(".header_btn i").classList.add("go");
})

document.querySelector(".header_btn").addEventListener("mouseout", () =>{
    document.querySelector(".header_btn i").classList.remove("go");
})
}

if(document.querySelector(".header_btn") == undefined){
    document.querySelectorAll(".nav_links").forEach(links =>{
        links.style.color = "#ef233c";
        links.style.fontWeight = "100";
        links.style.boxShadow = "none";
    })
}

document.querySelectorAll(".celok.uticelok .box").forEach(target =>{
    target.onclick = () =>{
        let selectedItem = document.querySelector(".celok.uticelok .celok_box .selected");
        var selectedItemTxt = target.querySelector("a").innerHTML;

        if(selectedItem)
            selectedItem.classList.remove("selected");

        target.classList.add("selected");

        console.log(selectedItemTxt);
    }
})
