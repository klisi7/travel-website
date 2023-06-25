let cikkek = {
    cikk: [
        {
            hely: "Görögország",
            tartalom: /*html*/
            `
            <section class="cikkek">

                <div class="cikkek_box">

                    <div class="box" data-hely="Görögország">
                        <img src="img/chalkidiki-cikk.png" alt="Chalkidiki">
                        
                        <h3>A Chalkidiki félsziget legszebb tengerpartjai</h3>

                        <div class="txt">
                            <p>
                                A három lábú félsziget nagyon népszerű turistalátványosság, gyönyörű városai, természeti
                                képződményei, turisztikai célállomásai okkal vonzzák az idelátogatókat. Tiszta vizei a 
                                búvárkodni vágyók ...
                            </p>
                            <a href="#hosszCikk" class="elolvas_btn">Elolvasom</a>
                        </div>
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
                    <div class="box" data-hely="Ciprus">
                        <img src="img/cyprus-2.png" alt="cyprus">
                    
                        <h3>5 kihagyhatatlan hely, ha Cipruson jársz</h3>

                        <div class="txt">
                            <p>
                                Ha Cyprus mellett döntünk a nyaralásunk során, kétség kívül nehezen lőhetünk mellé.
                                Sajátos tengerpartjainak, változatos látképének elbűvölő ereje van de vannak látványosságai,
                                amit hiba lenne kihagyni ...
                            </p>
                            <a href="#hosszCikk" class="elolvas_btn">Elolvasom</a>
                        </div>
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
                        <div class="box" data-hely="Olaszország">
                            <img src="img/diving-1.png" alt="buvarhelyek">
                    
                            <h3>Olaszország 5 legjobb búvárhelye kezdőknek</h3>

                            <div class="txt">
                                <p>
                                    Gondolkodtál már azon, hogy szabadtüdős merüléssel vagy könnyűbúvár felszereléssel merülj alá
                                    csodaszép tengerpartok habjai alá, hogy megcsodáld a meseszép vízivilág csodáit? 
                                    Itt van 5 olaszországi hely, ahol ...
                                </p>
                                <a href="#hosszCikk" class="elolvas_btn">Elolvasom</a>
                            </div>
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
                        <div class="box" data-hely="Spanyolország">
                            <img src="img/tenerife-1.png" alt="tenerife">
                        
                            <h3>A Vulkánok és Napfény Szigete, Tenerife</h3>

                            <div class="txt">
                                <p>
                                    A Kanári-szigetek legnagyobbika, ahol akár télen is nyaralhatunk Spanyolországhoz tartozik,
                                    habár onnan 1000 km-re esik Afrika mellett. A sziget igazi turistaparadicsom számos utánozhatatlan
                                    ...
                                </p>
                                <a href="#hosszCikk" class="elolvas_btn">Elolvasom</a>
                            </div>
                        </div>
                    

                    </div>
                    
                </section>
            `
        },
    ]
};

let hosszCikk = {
    hely: [
        {
            cim: "A Vulkánok és Napfény Szigete, Tenerife",
            cikk: /*html*/
            `
                <article id="article_cikk">
                    <h2>A Vulkánok és Napfény Szigete, Tenerife</h2>

                    <section>
                        <p>
                            Ha a napsütésre és az izgalmas kalandokra vágysz, akkor ez a hely neked való. Tenerife egy olyan célpont, ahol a vulkáni tájak, lenyűgöző strandok és lenyűgöző természeti csodák összefonódnak, hogy varázslatos élményt nyújtsanak az utazóknak. Készülj fel, hogy felfedezd a sziget egyedülálló programlehetőségeit!                        </p>
                        <img src="img/tenerife-fo.jpg" alt="tenerife">

                        <h3>El Teide Nemzeti Park:</h3>
                        <p>
                            Kezdjük azzal, hogy meglátogatjuk a Kanári-szigetek legmagasabb csúcsát, a Teide-t. Ez az aktív vulkán 3 718 méter magas, és a nemzeti park egyik gyöngyszeme. Csodálatos túrákat tehetsz a hegy tetejére, vagy ha kevésbé kalandvágyó vagy, felmehetsz a Teide-kábelekkel is. Az elképesztő panoráma és a lenyűgöző látkép minden bizonnyal emlékezetes marad.                        </p>
                        <img src="img/teide-tenerife.jpg" alt="tenerife">

                        
                        <h3>Siam Park:</h3>
                        <p>
                            Ha a családdal utazol, ne hagyd ki a Siam Parkot, amely Európa egyik legnagyobb és legszórakoztatóbb vízi parkja. Itt olyan izgalmas attrakciók várnak, mint a hullámmedencék, vízi csúszdák és látványos vízi show-k. Élvezd a pihenést a trópusi környezetben, miközben az egész család szórakozik.                        </p>
                        <img src="img/siam-tenerife.jpg" alt="tenerife">


                        <h3>Los Gigantes:</h3>
                        <p>
                            Ne hagyd ki a Los Gigantes nevű várost sem, amely a sziget nyugati partján található. A hatalmas sziklafalak, amelyek az óceánból emelkednek, lenyűgöző látványt nyújtanak. Fedezd fel a tenger mélységeit egy hajókázás vagy búvárkodás során, és találkozz a tengeri teknősökkel és a delfinekkel.                        </p>
                        <img src="img/gigantes-tenerife.jpg" alt="tenerife">


                        <h3>Masca-völgy:</h3>
                        <p>
                            Ha szeretnéd felfedezni Tenerife természeti szépségeit, látogass el a varázslatos Masca-völgybe. Ez a hegyi völgy lenyűgöző sziklaképződményekkel és buja növényzettel rendelkezik. Készülj fel egy gyönyörű túrára a völgyben, amelynek végén egy tengerparti faluba érkezel, ahol megpihenhetsz és felfrissülhetsz.                        </p>
                        <img src="img/masca-tenerife.jpg" alt="tenerife">


                        <h3>Santa Cruz de Tenerife:</h3>
                        <p>
                            Ne felejtsd el felfedezni a sziget fővárosát, Santa Cruz de Tenerifét sem. Egy kellemes sétával felfedezheted a történelmi negyedet, ahol gyönyörű épületek, hangulatos terek és kávézók várnak. Ne hagyd ki a César Manrique tervezte Auditorio de Tenerife-t, amely a modern építészet remekműve.                        </p>
                        <img src="img/santa-tenerife.jpg" alt="tenerife">


                        <h3>Anaga-hegység:</h3>
                        <p>
                        Tenerife északi részén található az Anaga-hegység, ami egy igazi természeti kincs. Fedezd fel a lenyűgöző erdőket, a hatalmas kanyonokat és a gyönyörű kilátást a hegytetőkről. A túrázók számára ez egy igazi paradicsom, ahol felfedezhetik a sziget ősi erdőit és megcsodálhatják a lenyűgöző panorámát a sziget többi részére.                </p>        
                        <img src="img/anga-tenerife.jpg" alt="tenerife">

                        <h3>Programajánló</h3>
                        
                        <p>
                            Tenerife egész évben ideális utazási célpont, mivel az éghajlat meleg és enyhe. Az itt tapasztalható kulturális sokszínűség, a festői tájak és a számos programlehetőség garantálja, hogy soha ne unatkozz a szigeten. Az ízletes helyi ételek és a barátságos helyiek további érvet jelentenek a Kanári-szigetek felfedezése mellett.
                        </p>

                        <p>
                            Ne habozz, tervezz egy utat Tenerifére, és fedezd fel a sziget varázslatos világát, ahol a vulkáni tájak, a trópusi strandok és a lenyűgöző természeti csodák garantáltan elkápráztatnak!                        </p>
                    </section>
                </article>
            `
        },
        {
            cim: "5 kihagyhatatlan hely, ha Cipruson jársz",
            cikk: /*html*/
            `
                <article id="article_cikk">
                    <h2>5 kihagyhatatlan hely, ha Cipruson jársz</h2>

                    <section>
                        <p>
                            Ciprus egy csodálatos földközi-tengeri sziget, amely híres a lenyűgöző tájairól, gazdag történelmi örökségéről és a vendégszerető helyiekről. Ha szeretnéd felfedezni ezt a varázslatos helyet, itt van egy lista az öt kihagyhatatlan helyről, amelyeket feltétlenül meg kell látogatnod Cipruson.                        </p>
                        <img src="img/ciprus-fo.jpg" alt="ciprus">

                        <h3>Lárnaka óvárosa:</h3>
                        <p>
                            Kezdjük az utazást Ciprus történelmi szívével, a Lárnaka óvárossal. Sétálj az elbűvölő, szűk utcákon, és fedezd fel a régi, hagyományos házakat és az ókori emlékeket. Látogass el a Szent Lázár ortodox templomhoz, amely Ciprus legfontosabb vallási helyei közé tartozik, és sétálj a híres Finikoudes strand promenádján.                        </p>
                        <img src="img/ciprus-ovaros.jpg" alt="ciprus">

                        
                        <h3>Paphos ókori romvárosa:</h3>
                        <p>
                            Ciprus nyugati partján található Paphos városa híres az ókori romokról és a kulturális örökségről. Látogasd meg a Paphos Régészeti Parkot, ahol számos ókori rom és műemlék található, köztük a híres mozaikok. Ne hagyd ki az ókori Paphos kikötőjét sem, ahol gyönyörű kilátás nyílik a tengerre, és élvezd a hangulatos éttermeket és üzleteket.        </p>                
                        <img src="img/ciprus-rom.jpg" alt="ciprus">


                        <h3>Troodos-hegység:</h3>
                        <p>
                            Ha a természet szerelmese vagy, a Troodos-hegység a tökéletes úti cél. Ez a festői hegyvidék tele van fenyvesekkel, vízesésekkel és eldugott falvakkal. Látogasd meg a Kykkos kolostort, amely Ciprus legrégebbi és leggazdagabb kolostora, és élvezd a gyönyörű kilátást a hegytetőkről. A Troodos-hegység ideális hely a túrázáshoz, a természetjárók pedig élvezhetik a gyönyörű gyalogútvonalakat.    </p>                     
                        <img src="img/ciprus-troodos.jpg" alt="ciprus">


                        <h3>Protaras és az Ayia Napa tengerpartok:</h3>
                        <p>
                            Ciprus híres a kristálytiszta vizeiről és gyönyörű homokos partjairól. Protaras és Ayia Napa a legnépszerűbb tengerparti üdülőhelyek a szigeten. Fedezd fel a gyönyörű Nissi Beachet Ayia Napánál, vagy élvezd a csendes és pihentető időt a Fig Tree Bay-nél Protarasban. A nyugodt tengerparti hangulat, a napfény és a türkizkék víz garantáltan elkápráztat majd.                       </p> 
                        <img src="img/ciprus-protaras.jpg" alt="ciprus">


                        <h3>Kirenia óvárosa:</h3>
                        <p>Kirenia, vagy más néven Girne, a sziget északi részén található, és tele van történelmi látnivalókkal és festői tájakkal. Látogasd meg a Kirenia kikötőjét, amely egy hagyományos ciprusi halászfalu hangulatát sugallja. Fedezd fel a város központját, ahol számos bolt, étterem és kávézó vár, és menj fel a Kirenia várára, hogy élvezd a lenyűgöző kilátást a városra és a tengerre.</p> 
                        <img src="img/ciprus-kyrenia.jpg" alt="ciprus">


                        <p>
                        Ciprus valóban elbűvölő és sokszínű hely, ahol a történelem, a természet és a tengerparti pihenés találkozik. Ne hagyd ki ezeket a kihagyhatatlan helyeket, ha ellátogatsz erre a gyönyörű szigetre. Élvezd a ciprusi vendégszeretetet, kóstolj meg helyi ételeket és fedezd fel a sziget varázslatos világát!     </p>                
                        
                    </section>
                </article>
            `
        },
        {
            cim: "Olaszország 5 legjobb búvárhelye kezdőknek",
            cikk: /*html*/
            `
                <article id="article_cikk">
                    <h2>Olaszország 5 legjobb búvárhelye kezdőknek</h2>

                    <section>
                        <p>Olaszország nemcsak híres történelmi városairól és csodálatos gasztronómiájáról, hanem búvárparadicsomairól is. Ha kezdő búvár vagy, Olaszország számos helyet kínál, ahol felfedezheted a tenger mélységeit és élvezheted a búvárkodás izgalmait. Íme az Olaszország 5 legjobb búvárhelye kezdőknek.</p>
                        <img src="img/olasz-fo.jpg" alt="olaszország">

                        <h3>Ischia, Nápoly közelében:</h3>
                        <p>Ischia egy lenyűgöző sziget Nápoly közelében, amely népszerű célpont a búvárkodók körében. A kellemes vízhőmérséklet és a jó látási viszonyok ideálissá teszik a helyet a kezdő búvárok számára. Fedezd fel a tenger alatti barlangokat, élvezd a színes korallzátonyokat és találkozz a tengeri élet lenyűgöző képviselőivel.</p>
                        <img src="img/olasz-ischia.jpg" alt="olaszország">

                        
                        <h3>Porto Ercole, Toszkána:</h3>
                        <p>Porto Ercole egy bájos kisváros Toszkánában, amely kiváló lehetőségeket kínál a búvárkodásra. Az itteni vizek kristálytiszták és gazdag tengeri élettel rendelkeznek. Látogass el a Feniglia tengerparti rezervátumba, ahol a sekély vizek ideálisak a kezdő búvárok számára. Csodáld meg a tengeri fáklyafish és a homokhólyag medúza színes táncát.</p>                
                        <img src="img/olasz-porto.jpg" alt="olaszország">


                        <h3>Cinque Terre, Ligúria:</h3>
                        <p> A festői Cinque Terre part menti falvak híresek a lenyűgöző kilátásról és a gazdag tengeri életről. A kezdő búvárok számára a Monterosso al Mare vagy a Vernazza partjainál található búvárközpontok kínálnak órákat és túrákat. Fedezd fel a meredek sziklafalakat, a tenger alatti barlangokat és az élénk színekben pompázó tengeri élőlényeket.</p>                     
                        <img src="img/olasz-cinque.jpg" alt="olaszország">


                        <h3>Ustica, Szicília:</h3>
                        <p>Ustica egy kis sziget Szicília partjainál, amely híres a tengeri rezervátumáról és a kristálytiszta vizeiről. Az itt található búvárközpontok számos lehetőséget kínálnak a kezdő búvároknak, beleértve az oktatást és az útmutatást is. Merülj le a mélybe, és fedezd fel az Ustica lenyűgöző tengeri világát, ahol gyakran lehet látni cápákat, teknősöket és színpompás halakat.</p> 
                        <img src="img/olasz-ustica.jpg" alt="olaszország">


                        <h3>Capo Carbonara, Sardínia:</h3>
                        <p>Capo Carbonara egy tengerparti üdülőhely Sardínia déli részén, amely ideális választás a kezdő búvárok számára. A homokos strandok és a sekély vizek kiváló lehetőségeket kínálnak a tanulásra és a gyakorlásra. Fedezd fel a tengeri legyek világát, élvezd a korallzátonyokat és találkozz a különböző tengeri fajokkal.</p> 
                        <img src="img/olasz-capo.jpg" alt="olaszország">


                        <p>Ezek az Olaszország 5 legjobb búvárhelye kezdőknek garantáltan izgalmas és emlékezetes búvárélményeket kínálnak. Ne habozz felfedezni a tenger mélységeit, és csodálkozz rá a lenyűgöző tengeri életre, amely Olaszország búvárhelyein otthonra talál!</p>                
                        
                    </section>
                </article>
            `
        },
        {
            cim: "A Chalkidiki félsziget legszebb tengerpartjai",
            cikk: /*html*/
            `
                <article id="article_cikk">
                    <h2>A Chalkidiki félsziget legszebb tengerpartjai</h2>

                    <section>
                        <p>Görögországban található Chalkidiki félsziget, vagy más néven Halkidiki, egy igazi paradicsom a tengerpart szerelmeseinek. Ez a lenyűgöző terület három "láb" vagy félszigetből áll: Kassandra, Sithonia és Athosz. Ha a tökéletes tengerparti élményre vágysz, itt van egy lista a Chalkidiki félsziget legszebb tengerpartjairól.</p>
                        <img src="img/gorog-fo.jpg" alt="görögország">

                        <h3>Kassandra félsziget, Kalithea:</h3>
                        <p>A Kalithea strand Kassandra egyik legismertebb és legnépszerűbb tengerpartja. A kristálytiszta víz, a finom homok és a gyönyörű táj egyaránt elbűvölővé teszik ezt a helyet. Itt számos szolgáltatás és bárok találhatók, így nem fogsz unatkozni.</p>
                        <img src="img/gorog-kalithea.jpg" alt="görögország">

                        
                        <h3>Kassandra félsziget, Pefkohori:</h3>
                        <p> Pefkohori egy másik gyönyörű tengerparti üdülőhely Kassandra félszigeten. A hosszú homokos strand és a türkizkék víz tökéletes környezetet teremt a pihenésre és a fürdőzésre. Fedezd fel a part menti tavernákat és élvezd a friss tenger gyümölcseit.</p>                
                        <img src="img/gorog-pefkohori.jpg" alt="görögország">


                        <h3>Sithonia félsziget, Porto Koufo:</h3>
                        <p>Porto Koufo a Chalkidiki félsziget legnagyobb természetes kikötője, és egyben egy csodálatos tengerpart is. Az itteni vizek mélyek és kristálytiszták, ideálisak a búvárkodáshoz és a snorkelinghez. Élvezd a csendes és nyugodt környezetet, és merülj el a tenger nyugalmában.</p>                     
                        <img src="img/gorog-porto.jpg" alt="görögország">


                        <h3>Sithonia félsziget, Vourvourou:</h3>
                        <p>Vourvourou egy varázslatos öböl Sithonia félszigeten. A tengerpartot körülvevő hegyek és a szigetek látványa lenyűgöző. Fedezd fel a gyönyörű öblöket és a homokos strandokat, és élvezd a nyugodt vizek nyújtotta fürdőzést.</p> 
                        <img src="img/gorog-vourvourou.jpg" alt="görögország">


                        <h3>Athosz félsziget, Ammouliani-sziget:</h3>
                        <p>Bár az Athosz félsziget az ortodox szerzetesek zárt területe, a környező területeken számos csodálatos tengerpart található, köztük az Ammouliani-sziget. Ez a gyönyörű sziget lenyűgöző homokos strandokkal és kristálytiszta vizekkel várja a látogatókat. Élvezd a pihentető napozást és fürdőzést a sziget bájos környezetében.</p> 
                        <img src="img/gorog-athos.jpg" alt="görögország">


                        <p>A Chalkidiki félsziget kínálja a Görögországban található leglenyűgözőbb tengerparti helyek egyikét. Függetlenül attól, hogy melyik félszigeten tartózkodsz, garantáltan elkápráztatnak majd a gyönyörű homokos partok és a türkizkék víz. Merülj el a tengeri paradicsomban, és élvezd a Chalkidiki lenyűgöző tengerpartjainak varázsát!</p>                
                        
                    </section>
                </article>
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
            for(let i = 0; i < cikkek.cikk.length; i++){
                if(cikkek.cikk[i].hely == checked.innerText){
                    document.querySelector(".cikk .cikkek .cikkek_box").innerHTML = cikkek.cikk[i].tartalom;
                }
            }

            document.querySelector(".select_btn").classList.remove("open");
            document.querySelector(".go_btn").remove();


            document.querySelectorAll(".cikkek_box .box .elolvas_btn").forEach(target =>{
                target.onclick = () =>{
                    let parH3 = target.parentNode.parentNode.querySelector("h3").innerHTML;
    
                    for(let i = 0; i < hosszCikk.hely.length; i++){
                        if(hosszCikk.hely[i].cim == parH3){
                            document.querySelector(".cikkek_box").innerHTML = hosszCikk.hely[i].cikk;
                        }
                    }
    
                }
            })
        }

    }
})
