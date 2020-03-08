//TYPE OF CARDS WITH THEIR VALUES
let ll_cards = [["ŽANER", "GENRE"], ["TIP ŽANRA", "TYPE OF GENRE"], ["TEMA", "THEME"], ["MOTIV", "MOTIVE"], 
                ["NAČIN IGRANJA", "PLAY STYLE"], ["POVOD IGRANJA", "INTERACTIONS"], ["POGLED KAMERE", "VIEWER LOOK"], 
                ["TIP GRAFIKE", "TYPE OF GRAPHICS"], ["GRAFIČNI STIL", "GRAPHICS STYLE"], 
                ["KONTROLE", "CONTROLS"], ["PLATFORME", "PLATFORMS"], ["PUBLIKA", "PUBLIC"]];
let ll_genres = [["Akcija", "Action"], ["Avantura", "Adventure"], ["Arkada", "Arcade"], ["Miselna", "Puzzle"], 
                 ["Igranje vlog", "Role playing"],  ["Simulacija", "Simulation"],  ["Šport", "Sports"], 
                 ["Strategija", "Strategy"],  ["Preživetje", "Survival"]];
let ll_tgenres = [["Priložnostna", "Casual"], ["Gradbena", "Construction"], ["Bojevalna", "Combat"], ["Plesna", "Dancing"], 
                  ["Obrambna", "Defence"], ["Podzemne temnice", "Dungeon crawler"], ["Pretepačina", " Fighting"], ["Letalska", " Flying"], 
                  ["Masovna večigralka", "Massive multiplayer"], ["Mini igre", " Minigames"], ["Pomorska", " Naval"], ["Usmeri in klikni", "Point & Click"], 
                  ["Ploščadna", "Platform"], ["Hitri dogodki", "Quick time events"], ["Dirkačina", "Racing"], ["Realno časovna", "Realtime"], 
                  ["Ritem in bit", "Rythem"], ["Streljačine", "Shooter"], ["Skrivalne", "Stealth"], ["Pripoved", "Storytelling"], 
                  ["Taktična", "Tactical"]];
let ll_themes = [["Živali", "Animals"], ["Komičnost", "Comedy"], ["Kultura", "Culture"], ["Detektivka", "Detective"], ["Ekspedicija", "Expidition"], 
                 ["Evolucija", "Evolution"], ["Fantazija", "Fantasy"], ["Prihodnost", "Future"], ["Grozljivka", "Horror"], ["Vdori", "Incursion"], 
                 ["Stroji", "Machines"], ["Prevozna sredstva", "Means of transport"], ["Srednji vek", "Midival Ages"], ["Mogočnost", "Mightiness"], ["Rudarjenje", "Mining"], 
                 ["Narava", "Nature"], ["Objekti", "Objects"], ["Preteklost", "Past"], ["Sedanjost", "Present"], ["Prerokba", "Proficy"], 
                 ["Realnost", "Reality"], ["Vladanje", "Reign"], ["Religija", "Religion"], ["Romantika", "Romance"], ["Znanstvena fantastika", "Science fiction"], 
                 ["Letni časi", "Seasons"], ["Družba", "Society"], ["Vesolje", "Space"], ["Super heroji", "Super heroes"], ["Potovanje skozi čas", "Time travel"], 
                 ["Potovanje", "Travel"], ["Vojskovanje", "Warfare"]];
let ll_motives = [["Sposobnosti", "Abilities"], ["Arhitektura", "Arhitecture"], ["Artefakti", "Artefacts"], ["Bitja", "Beings"], ["Spremembe", "Changes"], 
                  ["Osvajanje", "Conquering"], ["Plovila", "Crafts"], ["Sanje", "Dreams"], ["Ekosistem", "Ecosystem"], ["Izkušnje", "Experience"], 
                  ["Štirje elementi", "Four elemts"], ["Geometrijski like", "Geometric shapes"], ["Slava", "Glory"], ["Bogovi", "Gods"], ["Dobro in Zlo", "Good & Evil"], 
                  ["Sovraštvo", "Hate"], ["Ljubezen", "Love"], ["Magija", "Magic"], ["Fizikalni zakoni", "Physical laws"], ["Rastline", "Plants"], 
                  ["Politični", "Political"], ["Moč", "Power"], ["Poklici", "Professions"], ["Obljuba", "Promise"], ["Iskanje", "Quest"], 
                  ["Rekreacija", "Recreation"], ["Surovine", "Resources"], ["Znanost", "Science"], ["Vraževerje", "Superstition"], ["Vozila", "Vehicles"], 
                  ["Bogastvo", "Wealth"], ["Orožje", "Weapons"]];
let ll_pstyles = [["Samostojni", "Solo"], ["Tekmovalni", "Competative"], ["Izzvani", "Challenger"], ["Prvenstveni", "Championship"], 
                 ["Turnirski", "Tournament"], ["Sodelovalni", "Cooperative"], ["Ekipni", "Team"]];
let ll_intacts = [["Izzivi", "Challenges"], ["Misije", "Missions"], ["Runde", "Rounds"], ["Cilji", "Goals"], 
                  ["Pogoji", "Objectives"], ["Izločanje", "Elimination"], ["Odprti svet", "Sandbox"]];
let ll_vlooks = [["Prvoosebni pogled", "First-person view"], ["Tretjeosebni pogled", "Third-person view"], ["Pogled od zgoraj", "Top-down view"], 
                 ["Pogled od strani", "Side view"], ["Prosti pogled", "Free view"]];
let ll_tgraphs = [["2D grafika", "2D graphics"], ["2.5D grafika", "2.5D graphics"], ["3D grafika", "3D graphics"], ["4D grafika", "4D graphics"]];
let ll_sgraphs = [["Abstrakten", "Abstract"], ["Risankast", "Cartoonish"], ["Pikslast", "Pixel art"], ["Realističen", "Realistic"], ["Semi realističen", "Semi-realistic"]];
let ll_conts = [["Miška", "Mouse"], ["Tipkovnica", "Keyboard"], ["Kontroler", "Gamepad"], ["Igralna palica", "Joystick"], ["Dirkalni volan", "Racing wheel"], 
                ["VR naprava", "VR device"], ["Zaslon na dotik", "Touch screen"], ["Detektor gibanja", "Motion tracker"], ["Zajem gibanja", "Motion capture"]];
let ll_platfs = [["PC/MAC", "Windows"], ["PC/MAC", "Linux"], ["MAC", "OS X"], ["Konzola", "Microsoft - XBOX"], ["Konzola", "Sony - Playstation"], 
                 ["Konzola", "Nintendo - Switch"], ["Tablični", "Android"], ["Tablični", "iOS"], ["Spletni brskalnik", "WebGL"], ["Spletni brskalnik", "Backend language"]];
let ll_pubs = [["Otroci", "Children"], ["Najstniki", "Teenagers"], ["Odrasli", "Adults"], ["Moški", "Male"], ["Ženske", "Women"]];

//ELEMENTS USED TO DEMONSTRATE GAME
const ll_ulists = ["list_tal_genre", "list_tal_tgenre", "list_tal_theme", "list_tal_motive", 
                   "list_tal_pstyle", "list_tal_intact", "list_tal_vlook", "list_tal_tgraph", "list_tal_sgraph", 
                   "list_tal_cont", "list_tal_platf", "list_tal_pub"];
const ll_buttons = ["btns_tal_genre", "btns_tal_tgenre", "btns_tal_theme", "btns_tal_motive", 
                    "btns_tal_pstyle", "btns_tal_intact", "btns_tal_vlook", "btns_tal_tgraph", "btns_tal_sgraph", 
                    "btns_tal_cont", "btns_tal_platf", "btns_tal_pub"];
//GAME BEHAVIOUR
const ll_choose = [5, 7, 12, 12, 7, 7, 5, 4, 5, 9, 10, 5];
const ll_show = [2, 3, 5, 5, 3, 3, 2, 1, 2, 4, 4, 2];
let ll_change = [1, 2, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0];
const ll_keep = [2, 2, 2, 4, 1, 1, 1, 1, 1, 1, 2, 2];
//GAME DATA
//uses format [#name_card, #revealed, #chosen]
let ll_pack = [[], [], [], [],
               [], [], [], [], [], 
               [], [], []];
let ll_shown = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
let ll_kept = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
let ll_swapable = [[], [], [], [],
                   [], [], [], [], [], 
                   [], [], []];
//FUNCTIONS FOR THE BUTTONS
function fillList(btn, tcard) {
    let btn2 = btn.nextElementSibling;
    let btn3 = btn2.nextElementSibling;
    let spn1 = btn3.nextElementSibling;
    let spn2 = spn1.nextElementSibling;
    let ulist = document.getElementById(ll_ulists[tcard]);
    chooseRandomly(ulist, tcard);
    btn.disabled = true;
    if(ll_change[tcard] > 0)
        btn2.disabled = false;
    btn3.disabled = false;
    spn1.innerText = "Št. zamenjav: " + ll_change[tcard];
    spn2.innerText = "Maks. izbranih: " + ll_keep[tcard];
}
function swapCards(btn, tcard) {
    let ulist = document.getElementById(ll_ulists[tcard]);
    let ul_elem = ulist.firstElementChild;
    for(let i=0; i < ll_pack[tcard].length; i++) {
        if(ll_pack[tcard][i][2] == true && ll_change[tcard] > 0) {
            let x = Math.floor(Math.random() * ll_swapable[tcard].length);
            let name = ll_swapable[tcard].splice(x, 1).toString().split(",");
            ll_swapable[tcard].push(ll_pack[tcard][i][0]);
            ll_pack[tcard][i][0] = name;
            ul_elem.lastElementChild.innerText = name[0] + " (" + name[1] + ")";
            ll_change[tcard]--;
        }
        if(ll_change[tcard] == 0) {
            btn.disabled = true;
            break;
        }
        ul_elem = ul_elem.nextElementSibling;
    }
    let btnlist = document.getElementById(ll_buttons[tcard]);
    let spn1 = btnlist.lastElementChild.previousElementSibling;
    spn1.innerText = "Št. zamenjav: " + ll_change[tcard];
}
function keepCards(btn, tcard) {
    if(ll_kept[tcard] > 0) {
        let ulist = document.getElementById(ll_ulists[tcard]);
        let ul_elem = ulist.firstElementChild;
        let children = ulist.children.length;

        //fix elements so they can't be used again
        for(let i=0, j=1; i < children; i++) {
            if(i > 0)
                ul_elem = ul_elem.nextElementSibling;
            if(ll_pack[tcard][i][2] == true)
                ul_elem.className = "tachosen"
            ul_elem.firstElementChild.disabled = true;
            ul_elem.lastElementChild.className = "tadisabled";
        }

        //remove unwanted elements
        ul_elem = ulist.firstElementChild;
        let i=0;
        while(i < ll_pack[tcard].length) {
            if(ll_pack[tcard][i][1] != true) {
                let ul_remove = ul_elem;
                ul_elem = ul_elem.nextElementSibling;
                ulist.removeChild(ul_remove);
                i++;
            }
            else {
                ul_elem = ul_elem.nextElementSibling;
                i++;
            }
        }

        //disable buttons
        btn.disabled = true;
        btn.previousElementSibling.disabled = true;
    }
}
//OTHER FUNCTIONS
function chooseRandomly(ulist, tcard) {
    let tmp_cards;

    switch(tcard) {
        case 0: tmp_cards = [...ll_genres]; break;      //class
        case 1: tmp_cards = [...ll_tgenres]; break;
        case 2: tmp_cards = [...ll_themes]; break;      //cont
        case 3: tmp_cards = [...ll_motives]; break;
        case 4: tmp_cards = [...ll_pstyles]; break;     //form
        case 5: tmp_cards = [...ll_intacts]; break;
        case 6: tmp_cards = [...ll_vlooks]; break;
        case 7: tmp_cards = [...ll_tgraphs]; break;
        case 8: tmp_cards = [...ll_sgraphs]; break;
        case 9: tmp_cards = [...ll_conts]; break;       //tagt
        case 10: tmp_cards = [...ll_platfs]; break;
        case 11: tmp_cards = [...ll_pubs]; break;
    }

    for(let i = 0; i < ll_choose[tcard]; i++) {
        let x = Math.floor(Math.random() * tmp_cards.length);
        let name = tmp_cards.splice(x, 1).toString().split(",");
        let card = [name, false, false];
        ll_pack[tcard].push(card);
        createListItem(ulist, tcard, i);
    }

    for(let card in tmp_cards)
        ll_swapable[tcard].push(tmp_cards[card]);
}
function createListItem(ulist, tcard, poz) {
    let ul_elem = document.createElement("li");
    let li_check = document.createElement("input");
    let li_span = document.createElement("span");
    let el_txt = ll_cards[tcard][0] + " (" + ll_cards[tcard][1] + ")";
    li_check.setAttribute("type", "checkbox");
    li_check.setAttribute("onclick", "checkBoxStatus(this, " + tcard + ", " + poz + ")");
    li_check.disabled = true;
    li_span.setAttribute("onclick", "visibilityItem(this, " + tcard + ", " + poz + ")");
    li_span.appendChild(document.createTextNode(el_txt));
    ul_elem.appendChild(li_check);
    ul_elem.appendChild(li_span);
    ulist.appendChild(ul_elem);
}
function visibilityItem(span, tcard, poz) {
    let txtNode = span.lastChild;
    let checkNode = span.parentNode.firstElementChild;

    if(ll_pack[tcard][poz][1] == false && ll_shown[tcard] < ll_show[tcard]) {
        //if item is to be revealed then do
        let name = ll_pack[tcard][poz][0];
        txtNode.data = name[0] + " (" + name[1] + ")";
        ll_pack[tcard][poz][1] = true;
        ll_shown[tcard]++;
        checkNode.disabled = false;
    }
    else if(ll_pack[tcard][poz][1] == true && ll_shown[tcard] > 0 && ll_pack[tcard][poz][2] != true) {
        //if item is going to be hidden and is not checked
        txtNode.data = ll_cards[tcard][0] + " (" + ll_cards[tcard][1] + ")";
        ll_pack[tcard][poz][1] = false;
        ll_shown[tcard]--;
        checkNode.disabled = true;
    }
}
function checkBoxStatus(checkbox, tcard, poz) {
    if(checkbox.checked == true)
    {
        if(ll_kept[tcard] < ll_keep[tcard]) {
            ll_pack[tcard][poz][2] = true;
            ll_kept[tcard]++;
        }
        else
            checkbox.checked = false;
    }
    else {
        ll_pack[tcard][poz][2] = false;
        if(ll_kept[tcard] > 0)
            ll_kept[tcard]--;
    }
}