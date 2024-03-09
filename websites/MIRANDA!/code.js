

var redesImg = [
    {
        link:"https://twitter.com/mirandaenvivo?lang=es",
        img:"Twitter",
        alt:"Twitter"
    },
    {
        img:"Instagram",
        link:"https://www.instagram.com/mirandaenvivo/?hl=es-la" ,
        alt:"Instagram"
    },
    {
        img:"tiktok",
        link:"https://www.tiktok.com/@mirandaenvivo?lang=es",
        alt:"TikTok"
    },
    {
        img:"TY",
        link:"https://www.youtube.com/channel/UCcnn0TZ51ULmLgT3WQFL-xQ",
        alt:"YouTube"
    },
    {
        img:"FB",
        link:"https://es-la.facebook.com/MirandaEnVivo",
        alt:"Facebook"
    },
    {
        img:"applemusic",
        link:"https://music.apple.com/cl/artist/miranda/589298876",
        alt:"Apple Music"
    },
    {
        img:"Spotify",
        link:"https://open.spotify.com/artist/2eEmsgWmUFMbtU7agJpnjY",
        alt:"Spotify"
    } 
]


var metodoListaCanciones = function (){
    let listaSongs = "";
    this.canciones.forEach(function(song) {
        listaSongs = listaSongs + `<li>${song}</li>`
    })
    return listaSongs;
}
const discos=[
    
    {
        id: "0",
        nombre: "Cálido y Rojo",
        imag: "calidoYRojo",
        tipo: "sencillo",
        spotify: `<iframe src="https://open.spotify.com/embed/track/2jRKBUo4e8E1l4VScUcXlY?theme=0" width="250" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
        publicacion:"2017"
    },
    
    {                
        id: "1",
        nombre:"Safari",
        imag:"safari",
        tipo:"album",
        canciones: ["Fantasmas", "Extraño", "Es Por Él", "Sólo Lo Sabe La Luna", "Miro La Vida Pasar", "Sé Mía", "Buen Día", "Nadie Como Tú", "Fotos", "Para Olvidar Tu Amor"],
        spotify: `<iframe src="https://open.spotify.com/embed/album/3zkAWa490tzBYIEEG7heay?theme=0" width="250" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
        publicacion:"2014",
        listaCanciones: metodoListaCanciones
    },
    
    {
        id: "2",
        nombre: "La Colisión",
        imag: "colision",
        tipo: "sencillo",
        spotify: `<iframe src="https://open.spotify.com/embed/album/7BTzuKbh1p2EP3q1gItU02?theme=0" width="250" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
        publicacion:"2018",
    },
    
    {
        id: "3",
        nombre:"Es Imposible!",
        imag:"imposible",
        tipo:"album",
        canciones: ["Mentía", "Lo Que Siento Por Tí", "Romance Juvenil", "El Showcito", "Tu Mirada", "Tu Misterioso Alguien", "Si Pudiera Volver", "No Lo Digas", "Entre Mis Brazos", "Hola Probando"],
        spotify: `<iframe src="https://open.spotify.com/embed/album/1UTpvroWrhmgpntarWj1OO?theme=0" width="250" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
        publicacion:"2009",
        listaCanciones: metodoListaCanciones
    },
    
    {
        id: "4",
        nombre: "Casi Felíz",
        imag: "casiFeliz",
        tipo: "sencillo",
        spotify: `<iframe src="https://open.spotify.com/embed/album/7Gy2d1jCW1kfvUtQxUhHN9?theme=0" width="250" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
        publicacion:"2021"
    },
    
    {
        id: "5",
        nombre:"Fuerte",
        imag:"fuerte",
        tipo:"album",
        canciones: ["743", "Cálido Y Rojo", "Lejos De Mi Alcance", "No", "Ahora Que Soy Cantante", "Amante Amigo", "Enero", "En Esta Noche", "Tu Hombre", "Tu Padre", "Quiero Vivir A Tu Lado", "Mala Señal"],
        spotify: `<iframe src="https://open.spotify.com/embed/album/79td5wJW8V4nVgnCUEKWbJ?theme=0" width="250" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
        publicacion:"2017",
        listaCanciones: metodoListaCanciones
    },
    
    {
        id: "6",
        nombre: "Por Amar al Amor",
        imag: "porAmarAlAmor",
        tipo: "sencillo",
        spotify: `<iframe src="https://open.spotify.com/embed/album/4IrTGHRpPXTOYhs7DXTmhP?theme=0" width="250" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
        publicacion:"2021"
    },
    
    {
        id: "7",
        nombre: "Juan y Paul",
        imag: "juanYPaul",
        tipo: "sencillo",
        spotify: `<iframe src="https://open.spotify.com/embed/album/2SeXBoDldRJ3HBvvir021j?theme=0" width="250" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
        publicacion:"2021"
    },
    
    {
        id: "8",
        nombre: "Me Gustas Tanto",
        imag: "meGustasTanto",
        tipo: "sencillo",
        spotify: `<iframe src="https://open.spotify.com/embed/album/124sJlSZvzYaoWt3IlyLQg?theme=0" width="250" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
        publicacion:"2021"
    },
    
    {
        id: "9",
        nombre: "Un Tiempo",
        imag: "unTiempo",
        tipo: "sencillo",
        spotify: `<iframe src="https://open.spotify.com/embed/album/7dbpy3l6f98Z9WWrORO38s?theme=0" width="250" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
        publicacion:"2021"
    },
    
    {
        id: "10",
        nombre: "El Disco de tu Corazòn",
        imag: "elDiscoDeTuCorazon",
        tipo: "album",
        canciones:["Prisionero", "Hola", "Perfecta", "Enamorada", "Nada Es Igual", "Dejame", "Amanece Junto A Mi", "Hasta Hoy", "Vete De Aquí", "No Me Celes", "Te Atreviste Y Me Morí", "Voces"],
        spotify: `<iframe src="https://open.spotify.com/embed/album/23sglTmI7lQhVogpoa5TXe?theme=0" width="250" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
        publicacion:"2007",
        listaCanciones: metodoListaCanciones
    },
    
    {
        id: "11",
        nombre: "Precoz",
        imag:"precoz",
        tipo:"album",
        canciones:["Burla", "Sedán", "No Tengo Plata", "No Da", "Estar Contigo", "Hay Una Luz", "Taxi", "Duran Duran"],
        spotify: `<iframe src="https://open.spotify.com/embed/album/7toSxHtkgRgtJYuGBS4hBw?theme=0" width="250" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
        publicacion:"2019",
        listaCanciones: metodoListaCanciones
    }

]

const shows=[
    {
        id:"0",
        fecha: "14/jul.",
        precio: "$670",
        donde: "Tucumán, Argentina",
        value: "2021-07-14"
    },
    {
        id:"1",
        fecha: "15/Sep.",
        precio: "$670",
        donde: "Sala del Museo, Montevideo, Uruguay",
        value: "2021-09-15"
    },
    {
        id:"2",
        fecha: "21/oct.",
        precio: "$655",
        donde: "Córdoba, Argentina",
        value: "2021-10-21"
    },
    {
        id:"3",
        fecha: "22/oct.",
        precio: "$650",
        donde: "Río Cuatro, Argentina",
        value: "2021-10-22"
    },
    {
        id:"4",
        fecha: "17/oct.",
        precio: "$670",
        donde: "Santa Fe, Argentina",
        value: "2021-10-17"
    },
    {
        id:"5",
        fecha: "19/Nov.",
        precio: "$700",
        donde: "Parque Camet, Mar del Plata, Argentina",
        value: "2021-11-19"
    },
    {
        id:"6",
        fecha: "30/Nov.",
        precio: "$750",
        donde: "Sun Monticello, Mostazal, Chile",
        value: "2021-11-30"
    },
    {
        id:"7",
        fecha: "10/Dec.",
        precio: "$700",
        donde: "Sun Monticello, Mostazal, Chile",
        value: "2021-12-10"
    },
    {
        id:"8",
        fecha: "27/Dec.",
        precio: "$700",
        donde: "Parque Camet, Mar del Plata, Argentina",
        value: "2021-12-27"
    },
]

const integrantes=[
    {
        img:"integ-1",
        id:"0",
        nombre:"Ale Sergi",
        completo:"Alejandro Gustavo Sergi Galante",
        rol:"Voz, tecladista, guitarrista, productor musical y compositor",
        tipo:"Tenor ligero",
        anios:"5 de octubre de 1971"
    },
    {
        img:"integ-2",
        id:"1",
        nombre:"Juliana Gattas",
        completo:"Juliana Sofía Gattas Grelia",
        rol:"Voz y guitarra",
        tipo:"Mezzosoprano",
        anios:"1 de agosto de 1978"
    }
]




const slider=[ "slider1","slider2","slider3","slider4","slider5","slider6","slider7","slider8","slider9","slider10"]
