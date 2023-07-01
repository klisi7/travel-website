let cikkek = {
    cikk: [
        {
            hely: "Görögország",
            tartalom: /*html*/
            `
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
            `
        },
        {
            hely: "Ciprus",
            tartalom: /*html*/
            `
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
            `
        },
        {
            hely: "Olaszország",
            tartalom: /*html*/
            `
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
            `
        },
        {
            hely: "Spanyolország",
            tartalom: /*html*/
            `
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
                            Ne habozz, tervezz egy utat Tenerifére, és fedezd fel a sziget varázslatos világát, ahol a vulkáni tájak, a trópusi strandok és a lenyűgöző természeti csodák garantáltan elkápráztatnak!
                        </p>

                        <div class="down-side">
                            <a href="#cikkBox" class="go_back">Vissza a cikkekhez <i class="fa fa-arrow-right"></i></a>
                            <a href="#hosszCikk" class="go_up"><i class="fa fa-arrow-up"></i></a>
                        </div>
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

                        <div class="down-side">
                            <a href="#cikkBox" class="go_back">Vissza a cikkekhez <i class="fa fa-arrow-right"></i></a>
                            <a href="#hosszCikk" class="go_up"><i class="fa fa-arrow-up"></i></a>
                        </div>
                        
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

                        <div class="down-side">
                            <a href="#cikkBox" class="go_back">Vissza a cikkekhez <i class="fa fa-arrow-right"></i></a>
                            <a href="#hosszCikk" class="go_up"><i class="fa fa-arrow-up"></i></a>
                        </div>
                        
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
                        
                        <div class="down-side">
                            <a href="#cikkBox" class="go_back">Vissza a cikkekhez <i class="fa fa-arrow-right"></i></a>
                            <a href="#hosszCikk" class="go_up"><i class="fa fa-arrow-up"></i></a>
                        </div>
                    </section>
                </article>
            `
        },
        {
            cim: "A karneválok királya, görög módra",
            cikk: /*html*/
            `
                <article id="article_cikk">
                    <h2>A karneválok királya, görög módra</h2>

                    <section>
                        <p>A karneválok ünnepe szerte a világon izgalmas és látványos eseményeket jelent, de ha az ember a görög karneválokra gondol, egy különleges, élettel teli és hagyományokkal teli ünnepre asszociál. Görögországban a karnevál időszaka tele van vidámsággal, örömmel és színpompával, ahol az emberek különleges maszkokba öltözve vonulnak az utcákra, hogy ünnepeljenek és mulassanak. Hadd mutassam be nektek a legnagyobb görög karnevált, ami egyedülálló élményt kínál minden látogatónak.</p>
                        <img src="img/gorog-karneval-fo.jpg" alt="görögország">

                        <h3>A Patraszi Karnevál:</h3>
                        <p>Görögország leghíresebb és legnagyobb karneválja a patraszi karnevál, amelyet minden évben január végétől február végéig rendeznek meg a Patrasz városában. Ez az esemény hatalmas méretű és hatalmas érdeklődést kelt nemcsak helyiek, hanem turisták körében is. A patraszi karnevál hagyománya több mint 180 évre nyúlik vissza, és ma már az egyik legfontosabb kulturális és társadalmi esemény Görögországban.</p>
                        <img src="img/gorog-patra.jpg" alt="görögország">

                        
                        <p>A karnevál időszakát az "Apokriés" néven is ismerik, ami görögül "az értelmetlen" vagy "a visszafogástalan" jelentésű szó. Ez az időszak a böjt előtti utolsó mulatozás, amikor az emberek még egyszer kiereszthetik a gőzt, és mélyen belemerülhetnek a farsangi hangulatba.</p>                
                        <img src="img/gorog-apok.jpg" alt="görögország">


                        <p>A patraszi karnevál hónapokkal a kezdés előtt elkezdődik a szervezés és a felkészülés. A város különböző csoportokra oszlik, akik elkészítik a lenyűgöző maszkokat, kosztümöket és díszleteket. Minden csoport sajátos témát és stílust képvisel, és izgalmas táncokat, zenei előadásokat és színvonalas produkciókat készít.</p>                     
                        <img src="img/gorog-karna.jpg" alt="görögország">


                        <p>A karnevál fő attrakciója az "Apokriatikí Paráda", azaz a Karneváli Menet, amelyben több száz résztvevő vesz részt. Az utcákat áthatja a zene, a tánc és a vidámság hangulata. A főutcák tele vannak nézőkkel, akik izgatottan várják, hogy megláthassák a fantasztikus jelmezeket és a kreatív kocsikat, amelyek a görög mitológia, a történelem és a modern társadalom különböző témáit ábrázolják.</p> 
                        <img src="img/gorog-karn2.jpg" alt="görögország">


                        <p>A patraszi karnevál színes és pörgős programokat kínál a látogatóknak. A városban számos színpad és fesztiváltér található, ahol koncertek, táncbemutatók és kulturális események zajlanak. Az utcák tele vannak árusokkal, akik helyi ételeket, italokat és kézműves termékeket árulnak. A mulatság éjjel-nappal tart, és a város minden szegletében megtalálható a karnevál varázsa.</p> 
                        <img src="img/gorog-karna3.jpg" alt="görögország">


                        <p>A patraszi karnevál több mint egy hétig tart, és a végén az "Égés" nevű esemény zárja le az ünnepet. Az emberek összegyűlnek, és óriási bonfire-t gyújtanak, amely a böjt kezdetét jelzi. A tűz fényében mindannyian együtt táncolnak és énekelnek, miközben búcsúznak a karneváltól és várják a következő évben történő találkozást.</p>                

                        <p>A patraszi karnevál átélésével a látogatók részesei lehetnek a görög kultúra és hagyományok gazdag világának. Ez az ünnepi időszak lehetőséget nyújt arra, hogy a turisták közelebbről megismerjék Görögország vidám és barátságos oldalát, és együtt ünnepeljenek a helyiekkel.</p>
                        <img src="img/gorog-karna4.jpg" alt="görögország">
                        
                        <p>Görögország a karneválok királya, és a patraszi karnevál az egyik legkiemelkedőbb példa erre. Fedezd fel a görög kultúra, a vidámság és a színpompás ünneplés ezen egyedülálló összefonódását, és merülj el a patraszi karnevál felejthetetlen élményeiben!</p>

                        <div class="down-side">
                            <a href="#cikkBox" class="go_back">Vissza a cikkekhez <i class="fa fa-arrow-right"></i></a>
                            <a href="#hosszCikk" class="go_up"><i class="fa fa-arrow-up"></i></a>
                        </div>
                    </section>
                </article>
            `
        },
        {
            cim: "Felfedezésre váró Tengerparti Paradicsomok",
            cikk: /*html*/
            `
                <article id="article_cikk">
                    <h2>Felfedezésre váró Tengerparti Paradicsomok</h2>

                    <section>
                        <p>A tengerparti üdülés mindig is az egyik legvonzóbb módja volt a kikapcsolódásnak, és Európa számos lenyűgöző tengerparttal büszkélkedhet. Ebben a cikkben bemutatunk öt felfedezésre váró európai tengerparti paradicsomot, amelyek garantáltan elvarázsolnak téged.</p>
                        <img src="img/spanyol-hosszu-fo.jpg" alt="spanyolország">

                        <h3>Costa del Sol, Spanyolország:</h3>
                        <p>A Costa del Sol Spanyolország déli részén található, és híres lenyűgöző homokos partjairól és mediterrán életstílusáról. A régió legnépszerűbb városa Marbella, ahol a napsütéses strandok, a luxus üdülőhelyek és a golfpályák várnak rád. Élvezd a gyönyörű tengerparti sétányokat, a kiváló gasztronómiát és a pezsgő éjszakai életet.</p>
                        <img src="img/spanyol-costa.jpg" alt="spanyolország">

                        
                        <h3>Costa Brava, Spanyolország:</h3>
                        <p>A Costa Brava Spanyolország északi partján terül el, és csodálatos tájakat kínál a látogatóknak. Az itt található tengerparti városok, mint például Tossa de Mar és Lloret de Mar, gyönyörű homokos és aprókavicsos strandokkal várják a látogatókat. Fedezd fel a sziklás öblöket, a rejtett ösvényeket és a türkizkék vizet. Ne hagyd ki a Costa Brava híres városát, Gironát sem, ahol a középkori városközpont, a szűk sikátorok és a híres Girona katedrális található.</p>                
                        <img src="img/spanyol-costa-brava.jpg" alt="spanyolország">


                        <h3>Costa Blanca, Spanyolország:</h3>
                        <p>A Costa Blanca Spanyolország keleti partvidékén terül el, és a lenyűgöző strandok, a kristálytiszta víz és a napsütéses éghajlat miatt vonzza a látogatókat. Az Alacant városában található Alicante strandja híres a homokos partjáról és a hatalmas pálmafáiról. Fedezd fel a bájos kisvárosokat, mint például Jávea, Moraira és Calpe, ahol változatos tengerparti élmények várnak rád, beleértve a vízi sportokat és a hajókirándulásokat.</p>                     
                        <img src="img/spanyol-costa-blanca.jpg" alt="spanyolország">


                        <h3>Algarve, Portugália:</h3>
                        <p>Az Algarve Portugália déli partján helyezkedik el, és egy másik elbűvölő tengerparti célpont Európában. A régió híres a kanyargós partvonaláról, a sziklás barlangokról és a homokos öblökről. Albufeira városa egyik legkedveltebb üdülőhely, ahol a napozás, a vitorlázás és a delfinmegfigyelés egyaránt élvezetes programok. Ne hagyd ki a Ponta da Piedade különleges sziklaképződményeinek felfedezését Lagos közelében.</p> 
                        <img src="img/portugal-hosszu.jpg" alt="portugália">


                        <h3>Amalfi-part, Olaszország:</h3>
                        <p>Az Amalfi-part Olaszország déli részén található, és a vidék mesés tengerparti tájairól, a hegyekre épült festői falvakról és az olasz kultúráról híres. Positano városa az egyik legismertebb hely a régióban, és gyönyörű homokos strandjáról, színes épületeiről és a város felett magasodó hegyekről ismert. Élvezd a tengerparti sétautakat, látogass el az Amalfi városába és a Ravello kisvárosába, ahol lenyűgöző kilátás nyílik a tengerre.</p> 
                        <img src="img/olasz-amalfi.jpg" alt="olaszország">


                        <p>Ezek az európai tengerparti célpontok igazi paradicsomok a pihenésre, a kikapcsolódásra és a varázslatos tájakra vágyó utazóknak. Fedezd fel ezeket a helyeket, élvezd a tengerpartok nyújtotta élményeket és merülj el a mediterrán hangulatban.</p>                

                        <div class="down-side">
                            <a href="#cikkBox" class="go_back">Vissza a cikkekhez <i class="fa fa-arrow-right"></i></a>
                            <a href="#hosszCikk" class="go_up"><i class="fa fa-arrow-up"></i></a>
                        </div>
                        
                    </section>
                </article>
            `
        },
        {
            cim: "Kalandok az Egei és a Jón-tengeren",
            cikk: /*html*/
            `
                <article id="article_cikk">
                    <h2>Kalandok az Egei és a Jón-tengeren</h2>

                    <section>
                        <p>Görögország egyedülálló tengerparti paradicsom, amely különleges élményeket kínál az Egei- és a Jón-tengeren. Ebben a cikkben bemutatjuk néhány izgalmas kalandot és felfedeznivalót, amelyek várják az utazókat ezen a varázslatos területen.</p>
                        <img src="img/gorog-hosszu-fo.jpg" alt="görögország">

                        <h3>Szörfözés a Naxos szigetén, az Egei-tengerben:</h3>
                        <p>A Naxos szigete az egyik legjobb helyszín a szörfözés szerelmeseinek. A sziget híres a szélviszonyairól, amelyek ideálisak a szörfözéshez és a kiteszörfözéshez. A mikroklima miatt a nyári hónapokban erős szél fúj a sziget partjain, ami fantasztikus feltételeket teremt a vízi sportok szerelmeseinek. Fedezd fel a Naxos szigetének homokos strandjait és kristálytiszta vizét, miközben élvezed a szörfözés izgalmát.</p>
                        <img src="img/gorog-naxos.jpg" alt="görögország">

                        
                        <h3>Búvárkodás a Zakynthos szigetén, a Jón-tengeren:</h3>
                        <p>A Zakynthos szigete gyönyörű korallokban gazdag tengeri élővilága miatt ideális hely a búvárkodáshoz. A kék barlangok, a rejtett barlangrendszerek és a lenyűgöző tengeri barlangok lenyűgözik a látogatókat. Merülj el a kristálytiszta vízben, és fedezd fel a tenger mélyének titkait. Találkozhatsz teknősökkel, delfinekkel és számos más tengeri élőlényvel, miközben élvezed a búvárkodás varázslatos élményét.</p>                
                        <img src="img/gorog-zakhyntos-diving.jpg" alt="görögország">


                        <h3>Hajókirándulás a Santorini szigetre, az Egei-tengeren:</h3>
                        <p>A Santorini szigete egyszerűen lenyűgöző látványt nyújt, és a hajókirándulás itt igazi élmény. Fedezd fel a vulkanikus sziget csodálatos partjait, amelyek sziklákból emelkednek ki a tengerből. Gyönyörködj a híres kalderában, ahol a fehérre meszelt házak és a kék kupolák a látogatók számára különleges látványt nyújtanak. A hajókirándulás során lehetőséged nyílik fürdőzésre a forró forrásokban és a természetes termálvizekben, valamint a bájos tengerpartokon való pihenésre.</p>                     
                        <img src="img/gorog-santorini.jpg" alt="görögország">


                        <h3>Vitorlázás a Korfu szigeten, a Jón-tengeren:</h3>
                        <p>A Korfu szigete lenyűgöző tengeri tájakkal és változatos vitorlázási lehetőségekkel rendelkezik. Fedezd fel a sziget körüli apró szigeteket, a kis öblöket és a rejtett partszakaszokat. Élvezd a nyugodt vizeket és a szél által hajtott vitorláshajózás élményét. A vitorlázás közben meglátogathatod a mesés tengerparti falvakat, mint például Paleokastritsa, és élvezheted a hagyományos görög gasztronómiát és vendégszeretetet.</p> 
                        <img src="img/gorog-korfu.jpg" alt="görögország">


                        <p>Az Egei- és a Jón-tengeren található görög szigetek izgalmas kalandokat kínálnak a tenger szerelmeseinek. Legyen szó szörfözésről, búvárkodásról, hajókirándulásról vagy vitorlázásról, ezek a helyszínek garantáltan elbűvölnek és felejthetetlen élményekkel gazdagítanak. Merülj el a tengerparti paradicsomok világában, és élvezd a Görögország varázslatos tengeri kalandjait.</p>                

                        <div class="down-side">
                            <a href="#cikkBox" class="go_back">Vissza a cikkekhez <i class="fa fa-arrow-right"></i></a>
                            <a href="#hosszCikk" class="go_up"><i class="fa fa-arrow-up"></i></a>
                        </div>
                        
                    </section>
                </article>
            `
        },
        {
            cim: "Európai Nemzeti Parkok, amik elbűvölnek",
            cikk: /*html*/
            `
                <article id="article_cikk">
                    <h2>Európai Nemzeti Parkok, amik elbűvölnek</h2>

                    <section>
                        <p>Európa számos lenyűgöző Nemzeti Parkkal büszkélkedhet, amelyek a természet csodáit és egyedülálló tájakat kínálnak. Ebben a cikkben bemutatunk néhányat ezek közül, amelyek biztosan elvarázsolnak téged.</p>
                        <img src="img/nemzeti-parkok-fo.jpg" alt="nemzetipark">

                        <h3>Gran Paradiso Nemzeti Park, Olaszország:</h3>
                        <p>Az olasz Alpokban elhelyezkedő Gran Paradiso Nemzeti Park a legősibb nemzeti park Olaszországban. A parkot hegyek, gleccserek és festői völgyek jellemzik. Itt található az Alpok legmagasabb pontja, a Gran Paradiso csúcsa. A park gazdag állat- és növényvilága, valamint a gyönyörű alpesi tájak lehetővé teszik a kirándulásokat, hegymászást és a természeti szépségek felfedezését.</p>
                        <img src="img/olasz-nemzeti-park.jpg" alt="olaszország">
                        <img src="img/olasz-nemzeti-park2.jpg" alt="olaszország">

                        
                        <h3>Ordesa és Monte Perdido Nemzeti Park, Spanyolország:</h3>
                        <p>A spanyol Pireneusokban található Ordesa és Monte Perdido Nemzeti Park egy varázslatos hely, lenyűgöző szurdokokkal, vadregényes vízesésekkel és hegyvidéki tájakkal. Ez a park a természet szerelmeseinek ideális hely a túrázáshoz, hegymászáshoz és a vadon élő állatok megfigyeléséhez. A Monte Perdido, a Pireneusok egyik legmagasabb csúcsa, impozáns látványt nyújt a park területén.</p>                
                        <img src="img/spanyol-nemzeti-park.jpg" alt="spanyolország">
                        <img src="img/spanyol-nemzeti-park2.jpg" alt="spanyolország">


                        <h3>Krka Nemzeti Park, Horvátország:</h3>
                        <p>Horvátországban található a lenyűgöző Krka Nemzeti Park, amelyet a festői Krka folyó és vízesések tesznek egyedivé. A parkban sétahidak és sétaösvények vezetnek a buja növényzet által borított területeken, ahol lenyűgöző vízeséseket, kristálytiszta tavakat és kanyonokat fedezhetsz fel. A Krka Nemzeti Park egy igazi oázis, ahol fürödhetsz a természetben és élvezheted a gyönyörű tájat.</p>                     
                        <img src="img/horvat-nemzeti-park.jpg" alt="horvátország">
                        <img src="img/horvat-nemzeti-park2.jpg" alt="horvátország">


                        <p>Ezek az Európai Nemzeti Parkok igazi kincsek, amelyek varázslatos természeti szépséggel ajándékoznak meg bennünket. Látogasd meg ezeket a parkokat, fedezd fel a hegyek, folyók és vízesések világát, és gyönyörködj a gazdag növény- és állatvilágban. A Nemzeti Parkok ideális helyek a természet szerelmeseinek és az aktív pihenést keresőknek egyaránt.</p>                

                        <div class="down-side">
                            <a href="#cikkBox" class="go_back">Vissza a cikkekhez <i class="fa fa-arrow-right"></i></a>
                            <a href="#hosszCikk" class="go_up"><i class="fa fa-arrow-up"></i></a>
                        </div>
                        
                    </section>
                </article>
            `
        },
        {
            cim: "Természet és Kultúra Európában",
            cikk: /*html*/
            `
                <article id="article_cikk">
                    <h2>Természet és Kultúra Európában</h2>

                    <section>
                        <p>Európa nem csak a gyönyörű tájakról és természeti szépségekről híres, hanem gazdag kulturális örökséggel is rendelkezik. Az alábbi öt helyszín kiemelkedő kulturális élményeket kínál, amelyekbe mélyedve felfedezheted Európa lenyűgöző kulturális sokszínűségét.</p>
                        <img src="img/europa-kultura.jpg" alt="görögország">

                        <h3>Santorini, Görögország:</h3>
                        <p>Görögország kulturális gazdagsága rendkívül változatos, és Santorini szigete kiváló példa erre. A helyi lakosok büszkén ápolják görög hagyományaikat, és hagyományos ünnepek és fesztiválok színesítik az életüket. Fedezd fel a görög konyha gazdagságát, kóstolj meg hagyományos ételeket és italokat, és érezd át a helyi zene és tánc ütemét, amelyek mind hozzájárulnak a görög kulturális élményhez.</p>
                        <img src="img/gorog-santorini2.jpg" alt="görögország">

                        
                        <h3>Firenze, Olaszország:</h3>
                        <p>Firenze Olaszország művészeti és kulturális központja, ahol a reneszánsz csodái találkoznak. A városban számos múzeum, galéria és műemlék található, amelyek lenyűgözik a művészet szerelmeseit. Látogasd meg az Uffizi Galériát, ahol a világhírű festményeket csodálhatod meg, sétálj a város utcáin, és gyönyörködj a művészi műemlékekben, mint például a Duomo vagy a Palazzo Vecchio.</p>                
                        <img src="img/olasz-firenze.jpg" alt="olaszország">


                        <h3>Alpok, Ausztria:</h3>
                        <p>Az osztrák Alpok nem csak a lenyűgöző természeti szépségről híres, hanem a hagyományos osztrák kultúra és zene központjaként is ismert. Az alpesi falvakban és városokban még mindig élő hagyományokat találsz, mint például a híres adventi és karácsonyi vásárok, a népi hagyományőrző fesztiválok és a hegyi táncok és zenék bemutatói. Fedezd fel az osztrák kultúra gazdagságát és a hagyományokba ágyazott életörömöt az Alpok csodálatos környezetében.</p>                     
                        <img src="img/ausztria-alpok.jpg" alt="ausztria">


                        <h3>Dubrovník, Horvátország:</h3>
                        <p>Dubrovník Horvátország egyik legkulturálisabb városa, amely gazdag történelmi és építészeti örökséggel büszkélkedhet. A középkori városfalak, a műemlékek és a kőházak lenyűgöző látványt nyújtanak. Sétálj a városközpontban, látogasd meg a múzeumokat és a galériákat, és érezd át a helyi kulturális élet pezsgését. Ne hagyd ki a hagyományos horvát étkek és italok kóstolását sem, hogy teljes mértékben átélhesd Dubrovník varázslatos kulturális élményeit.</p> 
                        <img src="img/horvat-kultura.jpg" alt="horvátország">


                        <p>Ezek az európai helyszínek kiemelkedő kulturális élményeket kínálnak, amelyek segítségével jobban megismerheted a régiók történelmét, kultúráját és hagyományait. Fedezd fel Európa gazdag kulturális örökségét, és élvezd a különleges élményeket, amiket ezek a helyek nyújtanak.</p>                

                        <div class="down-side">
                            <a href="#cikkBox" class="go_back">Vissza a cikkekhez <i class="fa fa-arrow-right"></i></a>
                            <a href="#hosszCikk" class="go_up"><i class="fa fa-arrow-up"></i></a>
                        </div>
                        
                    </section>
                </article>
            `
        },
        {
            cim: "Top 5 úticél fiataloknak Európában",
            cikk: /*html*/
            `
                <article id="article_cikk">
                    <h2>Top 5 úticél fiataloknak Európában</h2>

                    <section>
                        <p>Európa számos izgalmas és változatos úticélt kínál a fiatal utazók számára. Az alábbiakban bemutatunk öt olyan helyszínt, amelyek garantáltan felejthetetlen élményeket nyújtanak a kalandvágyó fiatalok számára.</p>
                        <img src="img/top5-fiatal.jpg" alt="beach-party">

                        <h3>Berlin, Németország:</h3>
                        <p>Berlin Európa egyik legvibrálóbb és legdivatosabb városa, amely a fiatalok körében rendkívül népszerű. A város tele van művészeti és kulturális eseményekkel, pezsgő éjszakai élettel és alternatív kávézókkal, klubokkal és boltokkal. Fedezd fel a város híres művészeti negyedeit, mint például a Kreuzberg vagy a Friedrichshain, és látogass el a Berlini Fal emlékhelyére. Ne hagyd ki a híres múzeumokat sem, mint például a Pergamon-múzeum vagy a Berlini Fal Múzeum.</p>
                        <img src="img/top5-fiatal-berlin.jpg" alt="németország">

                        
                        <h3>Barcelona, Spanyolország:</h3>
                        <p>Barcelona a mediterrán életstílus és a kreatív szabadság városa. A gyönyörű tengerparti városban lenyűgöző építészeti látnivalók, mint például a Gaudí által tervezett épületek várják az utazókat. Sétálj az ikonikus La Rambla sétányon, élvezd a város pezsgő éjszakai életét, és felfedezd a különleges katalán kultúrát és konyhát. Ne hagyd ki a híres Camp Nou stadiont sem, ahol megtekintheted a Barcelona FC hazai mérkőzéseit.</p>                
                        <img src="img/top5-fiatal-barcelona.jpg" alt="spanyolország">


                        <h3>Prága, Csehország:</h3>
                        <p>Prága az egyik legromantikusabb és legbájosabb város Európában, amely tele van történelemmel és művészettel. A város központjában található Óváros tér és a Károly-híd lenyűgöző látványt nyújtanak, és a Prágai Vár megtekintése magával ragadó élményt kínál. Fedezd fel a város híres sörfőzdéit, és élvezd a cseh konyha remekeit, mint például a tradicionális gulyásleves vagy a trdelník, egy édes cseh sütemény.</p>                     
                        <img src="img/top5-fiatal-praga.jpg" alt="csehország">


                        <h3>Ibiza, Spanyolország:</h3>
                        <p>Ibiza a világ egyik legismertebb bulizós szigete, ahol a fiatalok éjszakai élete egyszerűen lenyűgöző. A világhírű DJ-k és a legmenőbb klubok vonzzák ide az utazókat. Emellett a sziget gyönyörű strandokat és kristálytiszta vizet kínál, ahol pihenésre és kikapcsolódásra is van lehetőség. Ne hagyd ki a híres Pacha vagy Amnesia klubokat, és élvezd a naplemente parti hangulatát a Café del Mar-nál.</p> 
                        <img src="img/top5-fiatal-ibiza.jpg" alt="spanyolország">


                        <h3>Athén, Görögország:</h3>
                        <p>Athén Görögország kulturális és történelmi központja, amely tele van izgalmas látnivalókkal és élményekkel. Látogasd meg az ikonikus Akropoliszt, ahol lenyűgöző ókori épületek találhatók, és élvezd a város kávézóinak és éttermeinek hangulatát. Ne hagyd ki a Plaka negyedet, ahol tradicionális görög ételeket kóstolhatsz, és látogass el a Monastiraki piacra, ahol különféle souvenirek és helyi termékek közül válogathatsz.</p> 
                        <img src="img/top5-fiatal-athen.jpg" alt="horvátország">


                        <p>Ezek az európai úticélok kiváló választások a fiatal utazók számára, akik izgalmas kalandokra vágynak. Ezek a városok és szigetek garantáltan felejthetetlen élményeket nyújtanak, és lehetővé teszik, hogy felfedezd a helyi kultúrákat, gasztronómiát és éjszakai életet. Ne habozz, csomagolj és indulj el a következő fiataloknak szóló európai kalandodra!</p>                
                        <img src="img/top5-fiatal-vege.jpg" alt="nightlife">
                        
                        <div class="down-side">
                            <a href="#cikkBox" class="go_back">Vissza a cikkekhez <i class="fa fa-arrow-right"></i></a>
                            <a href="#hosszCikk" class="go_up"><i class="fa fa-arrow-up"></i></a>
                        </div>
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

document.querySelectorAll("#hosszCikk .elolvas_btn").forEach(target =>{
    target.onclick = () =>{
        let parH3 = target.parentNode.parentNode.querySelector("h3").innerHTML;

        console.log(parH3);

        for(let i = 0; i < hosszCikk.hely.length; i++){
            if(hosszCikk.hely[i].cim == parH3){
                document.querySelector(".cikkek_box").innerHTML = hosszCikk.hely[i].cikk;
            }
        }

    }
})

items.forEach(target =>{
    
    target.onclick = () =>{
    
        var checkedItem = document.querySelector(".checked");

        if(checkedItem)
            checkedItem.classList.remove("checked");

        target.classList.add("checked");
        
        let checked = document.querySelector(".checked");
        
        if(document.querySelector(".go_btn") == undefined){
            let newBtn = document.createElement("button");
            newBtn.classList.add("go_btn");
            newBtn.innerHTML = "Keres";
            document.querySelector(".select_container").appendChild(newBtn);
        }

        document.querySelector(".go_btn").onclick = () =>{
            for(let i = 0; i < cikkek.cikk.length; i++){
                if(cikkek.cikk[i].hely == checked.innerText){
                    document.querySelector("#hosszCikk .cikkek_box").innerHTML = cikkek.cikk[i].tartalom.toString();
                    document.querySelector(".btn_text").innerHTML = checked.innerText;
                }
            }

            document.querySelector(".select_btn").classList.remove("open");
            document.querySelector(".go_btn").remove();


            document.querySelectorAll(".elolvas_btn").forEach(target =>{
                target.onclick = () =>{
                    let parH3 = target.parentElement.parentElement.querySelector("h3").innerHTML;
            
                    for(let i = 0; i < hosszCikk.hely.length; i++){
                        if(hosszCikk.hely[i].cim == parH3){
                            document.querySelector(".cikkek_box").innerHTML = hosszCikk.hely[i].cikk
                        }
                    }
                }
            })

            document.querySelectorAll(".box .elolvas_btn").forEach(target =>{
                target.onclick = () =>{
                    let parH3 = target.parentElement.parentElement.querySelector("h3").innerHTML;
            
                    for(let i = 0; i < hosszCikk.hely.length; i++){
                        if(hosszCikk.hely[i].cim == parH3){
                            document.querySelector(".cikkek_box").innerHTML = hosszCikk.hely[i].cikk
                        }
                    }

                    document.querySelectorAll(".down-side .go_back").forEach(target =>{
                        target.onclick = () =>{
                            let checked = document.querySelector(".select_btn");
                    
                            console.log(checked.innerText);

                            for(let i = 0; i < cikkek.cikk.length; i++){
                                if(cikkek.cikk[i].hely == checked.innerText){
                                    document.querySelector(".cikkek_box").innerHTML = cikkek.cikk[i].tartalom
                                }
                            }
                        }
                    })
                }
                
            })
        }


    }

})


