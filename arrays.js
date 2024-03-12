var videoIndex = 0;
const videoPosts = [];

const videos = [
    {
        src: "https://www.youtube.com/embed/dRpnbjKUNGk?si=BOWw9fRfe6CwAChw",
        poster: "vid/POSTER - Carpeta Anual 1.jpg",
        id: 0,
    },
    {
        src: "https://www.youtube.com/embed/qRPkdk4asWo?si=4Lwrv7lZ1hwjRtA4",
        poster: "vid/POSTER - Knee Deep at ATP - Videoclip.mp4.png",
        id: 1,
    },
    {
        src: "https://www.youtube.com/embed/TmlPmFfWPiA?si=0BiLv1puD-caoFlI",
        poster: "vid/POSTER - Maniac - Videoclip.jpg",
        id: 2,
    },
    {
        src: "https://www.youtube.com/embed/WmuxR1THtWg?si=tWJAVXxPmJ3bhOwF",
        poster: "vid/POSTER - Continuidad de los Parques - Webcomic.jpg",
        id: 3,
    },
    {
        src: "https://www.youtube.com/embed/8K7Xpd_C9QQ?si=5a99BgwcncCFUYc7",
        poster: "vid/POSTER - Night Shop - Trailer.png",
        id: 4,
    },
    {
        src: "https://www.youtube.com/embed/k6Vmlzp1bvY?si=8F2gqmlw572FCHFt",
        poster: "vid/POSTER - Night Shop - Teaser.jpg",
        id: 5,
    },
];
const descVideosEsp = [
    { title: "Carpeta Anual 1 - 2021", text: "" },
    {
        title: "Knee Deep at ATP - Videoclip, Fotografía en Medios Audiovisuales - 2023",
        text: "",
    },
    {
        title: "Maniac - Videoclip, Diseño y Comunicación Visual 2 - 2021",
        text: "",
    },
    {
        title: "Continuidad de los Parques - Webcomic, Diseño y Comunicación Visual 1 - 2021",
        text: "",
    },
    {
        title: " Night Shop - Trailer de videojuego, Diseño y Comunicación Visual 2 - 2022",
        text: "",
    },
    {
        title: "Night Shop - Teaser de videojuego, Diseño y Comunicación Visual 2 - 2022",
        text: "",
    },
];
const descVideosEng = [
    {
        title: "Annual Work Recap - 2021",
        text: "",
    },
    {
        title: "Knee Deep at ATP - Videoclip, Photography in Audiovisual Media - 2023",
        text: "",
    },
    {
        title: "Maniac - Videoclip, Design and Visual Communication 2 - 2021",
        text: "",
    },
    {
        title: `"Continuidad de los Parques" - Webcomic, Design and Visual Communication 1 - 2021`,
        text: "",
    },
    {
        title: " Night Shop - Video Game Trailer, Design and Visual Communication 2 - 2022",
        text: "",
    },
    {
        title: "Night Shop - Video Game Teaser, Design and Visual Communication 2 - 2022",
        text: "",
    },
];

var ilusIndex = 0;
const ilusPosts = [];
const ilustrations = [
    { img: "imgs/micc furry.png" },
    { img: "imgs/sowfi furry.png" },
    { img: "imgs/tafy furry.png" },
    { img: "imgs/Leñador.jpg" },
    { img: "imgs/Two monsters under ur bed.png" },
    { img: "imgs/TRANS-RIGHTS.png" },
    { img: "imgs/knight and monarch.png" },
    { img: "imgs/Stickers.png" },
];

const descIlustrationsEsp = [
    {
        title: "Gato como animal espiritual",
        text: "Representando amigos como sus animales espirituales.",
    },
    {
        title: "Conejo como animal espiritual",
        text: "Representando amigos como sus animales espirituales. Sofi, @sowfairy en Instagram.",
    },
    {
        title: "Zorro como animal espiritual",
        text: "Representando amigos como sus animales espirituales. Tefi, @fanyart70 en Instagram.",
    },
    {
        title: "Leñador",
        text: "Diseño de leñador.",
    },
    {
        title: "Monstruos bajo tu cama",
        text: "A partir de un challenge de Instagram, junto con una amiga diseñamos dos monstruos que viven bajo nuestras camas.",
    },
    {
        title: "niñO o niñA",
        text: "Entrada al concurso Ads for Good, realizado por Starbucks en 2022",
    },
    {
        title: "El caballero y su Monarca ",
        text: "",
    },
    {
        title: "Stickers ",
        text: "Regalo de cumpleaños :D",
    },
];

const descIlustrationsEng = [
    {
        title: "Cat as a spirit animal",
        text: "Representing two of my closest friends as their spirit animals. On this one I am representing myself.",
    },
    {
        title: "Bunny as a spirit animal",
        text: "Representing two of my closest friends as their spirit animals. Sofi, @sowfairy on Instagram.",
    },
    {
        title: "Fox as a spirit animal",
        text: "Representing two of my closest friends as their spirit animals. Tefi, @fanyart70 on Instagram.",
    },

    {
        title: "Lumberjack",
        text: "A lumberjack design.",
    },
    {
        title: "Monsters under your bed",
        text: "Starting from an Instagram challenge, together with a friend we designed two monsters that live under our beds.",
    },
    {
        title: "niñO o niñA (Boy or Girl)",
        text: "Entry to the Ads for Good contest, held by Starbucks in 2022",
    },
    {
        title: "The Knight and his Monarch ",
        text: "",
    },
    {
        title: "Stickers ",
        text: "Birthday gift :D",
    },
];

const websites = [
    {
        title: "Miranda!",
        url: "websites/MIRANDA!/index.html",
        img: "websites/MIRANDA!/Miranda.png",
        descENG: "Design for Miranda!, an Argentine pop musical duo.",
        desc: "Diseño de Miranda!, dúo musical argentino de pop.",
    },
    {
        title: "La Sanducherie",
        url: "websites/La Sanducherie/index.html",
        img: "websites/La Sanducherie/LaSandwicherie.png",
        descENG: "Spanish cozy restaurant based on Madrid.",
        desc: "Restaurante acogedor en Madrid.",
    },
    {
        title: "Karola Crochet",
        url: "websites/Karola Crochet/index.html",
        img: "websites/Karola Crochet/KarolaCrochet.png",
        descENG:
            "An Instagram online store for custom amigurumis. @karolacrochet",
        desc: "Tienda online para la cuenta de instagram de amigurumis personalizados, @karolacrochet",
    },
    {
        title: "Lo de Lalo",
        descENG: "Restaurant on La Floresta, Uruguay.",
        desc: "Restaurante en La Floresta, Uruguay.",
        warning: "(NO es responsive/NO funciona en celulares)",
        warningENG: "(Is NOT responsive/It does NOT work on phones)",
        url: "websites/Lo de Lalo/index.html",
        img: "websites/Lo de Lalo/LoDeLalo.png",
    },
];
