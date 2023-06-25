let cikkek = {
    cikk: [
        {
            hely: "Görögország",
            tartalom: /*html*/
            `
                <section class="cikkek">

                <div class="cikkek_box">
                    <div class="box">
                    <img src="img/Névtelen terv(6).png" alt="görögország">
                    
                    <h3>Neos Marmaras, Chalkidiki</h3>

                    <div class="txt">
                        <p>
                            Neos Marmaras egy gyönyörű görög üdülőhely Halkidiki félszigetén, amely lenyűgöző tengerpartokkal
                            és hangulatos kikötővel várja a látogatókat. A tradicionális
                            ...
                        </p>
                        <a href="#article_cikk" class="elolvas_btn">Elolvasom</a>
                    </div>
                </div>

                </section>
            `
        },
        {
            hely: "Ciprus",
            tartalom: /*html*/
            `
                <section class="cikkek">

                <div class="cikkek_box">
                    <div class="box">
                    <img src="img/Névtelen terv(6).png" alt="görögország">
                    
                    <h3>Ciprus</h3>

                    <div class="txt">
                        <p>
                            Ciprus
                            ...
                        </p>
                        <a href="#article_cikk" class="elolvas_btn">Elolvasom</a>
                    </div>
                </div>

                </section>
            `
        },
        {
            hely: "Olaszország",
            tartalom: /*html*/
            `
                <section class="cikkek">

                <div class="cikkek_box">
                    <div class="box">
                    <img src="img/Névtelen terv(6).png" alt="görögország">
                    
                    <h3>Olaszország</h3>

                    <div class="txt">
                        <p>
                            Olaszország
                            ...
                        </p>
                        <a href="#article_cikk" class="elolvas_btn">Elolvasom</a>
                    </div>
                </div>

                </section>
            `
        },
        {
            hely: "Spanyolország",
            tartalom: /*html*/
            `
                <section class="cikkek">

                <div class="cikkek_box">
                    <div class="box">
                    <img src="img/Névtelen terv(6).png" alt="görögország">
                    
                    <h3>Spanyolország</h3>

                    <div class="txt">
                        <p>
                            Spanyolország
                            ...
                        </p>
                        <a href="#article_cikk" class="elolvas_btn">Elolvasom</a>
                    </div>
                </div>

                </section>
            `
        },


    ]
};

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
    
    target.onclick = () =>{
    

        let checkedItem = document.querySelector(".checked");

        if(checkedItem)
            checkedItem.classList.remove("checked");

        target.classList.add("checked");
        
        let checked = document.querySelector(".checked");
        
        if(document.querySelector(".go_btn") == undefined){
        var newBtn = document.createElement("button");
                newBtn.classList.add("go_btn");
                newBtn.innerHTML = "Keres";
                document.querySelector(".select_container").appendChild(newBtn);
        }

        document.querySelector(".go_btn").onclick = () =>{
            
        }
    }
})
