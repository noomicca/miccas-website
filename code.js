const $slider = document.querySelector(".slider");
const $indexLang = document.querySelector("#indexLang");

const $menu = document.querySelector("#menu");
const $nav = document.querySelector("nav");
const $submitForm = document.querySelector("submitForm");
const $thankYouForm = document.querySelector("#thankYouForm");
const $webBody = document.querySelector("#webBody");
const $body = document.querySelector("body");
const $time = document.querySelector("#time");
var now = luxon.DateTime.now();

var idioma = $body.getAttribute("id");
var $leftArrowSlider = "";
var $rightArrowSlider = "";
var loadedWebCards = "";
var previousScreenSize = window.innerWidth;

startWeb();
setTimeZone();
function startWeb() {
    setInterval(() => {
        setTimeZone();
    }, 1000);

    startSlider();
    startGrid();
    startWebCards();
    menuEvent();
    if ($body.getAttribute("id") === "español") {
        console.log("Página hecha por Micca.");
    } else {
        console.log("Website made by Micca.");
    }
}

function setTimeZone() {
    now = luxon.DateTime.now();
    $time.innerHTML = now.toFormat("HH:mm:ss, ZZZZ");
}

//------GRID------
function startWebCards() {
    websites.forEach(saveWebCards);

    $webBody.innerHTML = loadedWebCards;
}
function saveWebCards(e) {
    if (e.warning === undefined) {
        if ($body.getAttribute("id") === "español") {
            loadedWebCards += `
            <div class="mic-webCard";">
            <a href="${e.url}" target="_blank" rel="noopener" class="mic-btn-window mic-white">
            <h4 class="windowTitle" >${e.title}</h4>
            <p>
            ${e.desc}
            </p>
            </a>
            <img src="${e.img}" alt="" />
            </div>
            `;
        } else {
            loadedWebCards += `
            <div class="mic-webCard";">
            <a href="${e.url}" target="_blank" rel="noopener" class="mic-btn-window mic-white">
            <h4 class="windowTitle" >${e.title}</h4>
            <p>
            ${e.descENG}
            </p>
            </a>
            <img src="${e.img}" alt="" />
            </div>
            `;
        }
    } else {
        if ($body.getAttribute("id") === "español") {
            loadedWebCards += `
            <div class="mic-webCard";">
            <a href="${e.url}" target="_blank" rel="noopener" class="mic-btn-window mic-white">
            <h4 class="windowTitle" >${e.title}</h4>
            <p>
            ${e.desc}
            </p>
            <p>
            ${e.warning}
            </p>
            </a><img src="${e.img}" alt="" />
            </div>
            `;
        } else {
            loadedWebCards += `
            <div class="mic-webCard";">
            <a href="${e.url}" target="_blank" rel="noopener" class="mic-btn-window mic-white">
            <h4 class="windowTitle" >${e.title}</h4>
            <p>
            ${e.descENG}
            </p>
            <p>
            ${e.warningENG}
            </p>
            </a>
            <img src="${e.img}" alt="" />
            </div>
            `;
        }
    }
}
//------GRID------
function startGrid() {
    if ($body.getAttribute("id") === "español") {
        for (let i = 0; i < ilustrations.length; i++) {
            var ilusItem = {
                id: i,
                title: `${descIlustrationsEsp[ilusIndex].title}`,
                text: ` ${descIlustrationsEsp[ilusIndex].text}`,
                img: ilustrations[ilusIndex],
            };
            ilusPosts.push(ilusItem);
            ilusIndex++;
            if (ilusIndex > ilustrations.length - 1) {
                ilusIndex = 0;
            }
        }
    } else {
        for (let i = 0; i < ilustrations.length; i++) {
            var ilusItem = {
                id: i,
                title: `${descIlustrationsEng[ilusIndex].title}`,
                text: ` ${descIlustrationsEng[ilusIndex].text}`,
                img: ilustrations[ilusIndex],
            };
            ilusPosts.push(ilusItem);
            ilusIndex++;
            if (ilusIndex > ilustrations.length - 1) {
                ilusIndex = 0;
            }
        }
    }
}

//------MENU------
function menuEvent() {
    checkWindowWith(previousScreenSize);
    window.addEventListener("resize", checkWindowWith(window.innerWidth));
}
function checkWindowWith(e) {
    if (e >= 992) {
        $menu.removeEventListener("click", hearMenu);
        $nav.removeEventListener("click", navAnimation);
        $nav.classList.remove("mic-slideInLeft");
        $nav.classList.remove("mic-slideOutLeft");
        $nav.classList.remove("mic-nav-invisible");
    } else {
        $menu.addEventListener("click", hearMenu);
    }
}
function hearMenu() {
    $nav.addEventListener("click", navAnimation);
    if ($nav.classList.contains("mic-nav-invisible")) {
        $nav.classList.remove("mic-nav-invisible");
        $nav.classList.add("mic-slideInLeft");
    } else {
        $nav.classList.add("mic-slideOutLeft");
        $nav.classList.remove("mic-slideInLeft");
        setTimeout(() => {
            $nav.classList.add("mic-nav-invisible");
            $nav.classList.remove("mic-slideOutLeft");
        }, 200);
    }
}
function navAnimation() {
    $nav.classList.add("mic-slideOutLeft");
    $nav.classList.remove("mic-slideInLeft");
    setTimeout(() => {
        $nav.classList.add("mic-nav-invisible");
        $nav.classList.remove("mic-slideOutLeft");
    }, 200);
}

//------FORM------
function formEvent() {
    $thankYouForm.classList.add("mic-visible");
    setTimeout(() => {
        location.reload();
    }, 5000);
}

//------SLIDER------
function startSlider() {
    if (idioma === "español") {
        printEspSlider(0);
    } else if (idioma === "english") {
        printEngSlider(0);
    }
}

function printEngSlider(e) {
    $slider.innerHTML = `
        <li id="slide-${videos[e].id}">
        <iframe
            src="${videos[e].src}"
            title="YouTube video player"
            frameborder="0"
            allowscriptaccess="always" 
            allowfullscreen
        ></iframe>
        <h4>${descVideosEng[e].title}</h4>
        <p>${descVideosEng[e].text}</p>
        </li>
        
        <div class="arrows">
    <img
    src="svg/chevron-left.svg"
    alt="video anterior"
    id="leftArrow"
    />
    <img
    src="svg/chevron-right.svg"
    alt="siguiente video"
    id="rightArrow"
    />
    </div>
        `;

    workingArrows();
}
function printEspSlider(e) {
    $slider.innerHTML = `
        <li id="slide-${videos[e].id}">
        <iframe
            src="${videos[e].src}"
            title="YouTube video player"
            frameborder="0"
            allowscriptaccess="always" 
            allowfullscreen
        ></iframe>
        <h4>${descVideosEsp[e].title}</h4>
        <p>${descVideosEsp[e].text}</p>
        </li>
        
        <div class="arrows">
    <img
    src="svg/chevron-left.svg"
    alt="video anterior"
    id="leftArrow"
    />
    <img
    src="svg/chevron-right.svg"
    alt="siguiente video"
    id="rightArrow"
    />
    </div>
        `;

    workingArrows();
}
function workingArrows() {
    $leftArrowSlider = document.querySelector("#leftArrow");
    $rightArrowSlider = document.querySelector("#rightArrow");

    $leftArrowSlider.addEventListener("click", previous);
    $rightArrowSlider.addEventListener("click", next);
}
function previous() {
    //get slide info
    var splitName = $slider.querySelector("li").getAttribute("id").split("-");
    var num = parseInt(splitName[1]);

    //get previous slide
    var lessNum = num - 1;

    if (videos[lessNum] === undefined) {
        $leftArrowSlider.classList.add("locked");
    } else {
        //print prev slide
        if (idioma === "español") {
            printEspSlider(lessNum);
        } else if (idioma === "english") {
            printEngSlider(lessNum);
        }
        //unlock arrows
        $leftArrowSlider.classList.remove("locked");
        $rightArrowSlider.classList.remove("locked");
    }
}
function next() {
    //get slide info
    var splitName = $slider.querySelector("li").getAttribute("id").split("-");
    var num = parseInt(splitName[1]);

    //get next slide
    var plusNum = num + 1;

    if (videos[plusNum] === undefined) {
        $rightArrowSlider.classList.add("locked");
    } else {
        //print prev slide
        if (idioma === "español") {
            printEspSlider(plusNum);
        } else if (idioma === "english") {
            printEngSlider(plusNum);
        }
        //unlock arrows
        $leftArrowSlider.classList.remove("locked");
        $rightArrowSlider.classList.remove("locked");
    }
}
