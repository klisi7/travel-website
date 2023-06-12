let uticelok = {
    celok: [
        {
            hely: "Görögország",
            tartalom: 
            `
                <section class="cikkek">

                <div class="cikkek_box">
                    <div class="box">
                    <img src="img/marmaras-1.jpg" alt="cyprus">
                    
                    <h3>Neos Marmaras, Chalkidiki</h3>

                        <div class="txt">
                            <p>
                                Neos Marmaras egy gyönyörű görög üdülőhely Halkidiki félszigetén, amely lenyűgöző tengerpartokkal
                                és hangulatos kikötővel várja a látogatókat. A tradicionális
                                ...
                            </p>
                            <a href="#" class="elolvas_btn">Elolvasom</a>
                        </div>
                    </div>

                    <div class="box">
                        <img src="img/athen-1.png" alt="cyprus">
                    
                        <h3>Athén</h3>

                        <div class="txt">
                            <p>
                                Athén Görögország fővárosa, ahol az ókori történelem és a modern életstílus találkozik,
                                 lenyűgözőantik emlékekkel, izgalmas múzeumokkal és pezsgő városi élettel ...
                            </p>
                            <a href="#" class="elolvas_btn">Elolvasom</a>
                        </div>
                    </div>

                    <div class="box">
                        <img src="img/katerini-4.png" alt="cyprus">
                    
                        <h3>Katerini</h3>

                        <div class="txt">
                            <p>
                                Katerini egy festői város Észak-Görögországban, amely a gyönyörű Oroszország-hegység 
                                közelében található, és kiváló kiindulópont a tengerparti üdülőhelyek és ...
                            </p>
                            <a href="#" class="elolvas_btn">Elolvasom</a>
                        </div>
                    </div>
                </div>
            `
        },

        {
            hely: "Ciprus",
            tartalom: 
            `
                <section class="cikkek">

                <div class="cikkek_box">
                    <div class="box">
                        <img src="img/cyprus-2.png" alt="cyprus">
                        
                        <h3>5 kihagyhatatlan hely, ha Cypruson jársz</h3>

                        <div class="txt">
                            <p>
                                Ha Cyprus mellett döntünk a nyaralásunk során, kétség kívül nehezen lőhetünk mellé.
                                Sajátos tengerpartjainak, változatos látképének elbűvölő ereje van de vannak látványosságai,
                                amit hiba lenne kihagyni ...
                            </p>
                            <a href="#" class="elolvas_btn">Elolvasom</a>
                    </div>
            </div>
            `
        },

        {
            hely: "Olaszország",
            tartalom: 
            `
                <section class="cikkek">

                <div class="cikkek_box">
                    <div class="box">
                    <img src="img/diving-1.png" alt="cyprus">
                    
                    <h3>Olaszország 5 legjobb búvárhelye kezdőknek</h3>

                        <div class="txt">
                            <p>
                                Gondolkodtál már azon, hogy szabadtüdős merüléssel vagy könnyűbúvár felszereléssel merülj alá
                                csodaszép tengerpartok habjai alá, hogy megcsodáld a meseszép vízivilág csodáit? 
                                Itt van 5 olaszországi hely, ahol ...
                            </p>
                            <a href="#" class="elolvas_btn">Elolvasom</a>
                        </div>
                    </div>
                </div>
            `
        },

        {
            hely: "Spanyolország",
            tartalom: 
            `
                <section class="cikkek">

                <div class="cikkek_box">
                    <div class="box">
                        <img src="img/tenerife-1.png" alt="cyprus">
                
                        <h3>Kanári-szigetek, Tenerife</h3>

                        <div class="txt">
                            <p>
                                A Kanári-szigetek legnagyobbika, ahol akár télen is nyaralhatunk Spanyolországhoz tartozik,
                                habár onnan 1000 km-re esik Afrika mellett. A sziget igazi turistaparadicsom számos utánozhatatlan
                                ...
                            </p>
                        <a href="#" class="elolvas_btn">Elolvasom</a>
                        </div>
                    </div>
                </div>
            `
        },
    ]
}

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

        for(let i = 0; i < uticelok.celok.length; i++){
            if(selectedItemTxt == uticelok.celok[i].hely){
                document.querySelector("#target_uticel").innerHTML = uticelok.celok[i].tartalom;
            }
        }
    }
})

