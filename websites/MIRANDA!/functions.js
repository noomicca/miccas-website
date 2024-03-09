$(document).ready(Inicio)


function Inicio(){

    setTimeout(function(){
        $("#backModal").toggle()
        time()
    }, 1500)

    
    $("#menu").click(function (){
        $("header").toggleClass("open");
        $(this).toggleClass("cruz");
    });
    $("nav a").click(function (){
        $("header").toggleClass("open");
        $("#menu").toggleClass("cruz");
    });
    
    setInterval (swapSocial, 1500);
    
    discos.forEach(cargarDiscos);
    $("#discos .mas").click(function(){
        window.location = "#discos"
        $("#discs div").toggle()
    });
    $("#discs > div").click(upDisco);
    $("#search").keyup(filtrandoDisco);
    

    shows.forEach(cargarShows);
    $("#shows .mas").click(upShow);
    shows.forEach(cargarFiltroShow);
    $("#filterCity").change(filtrandoShow);

    $("#name").keyup(evaluarN)
    $("#apell").keyup(evaluarA)
    $("#contador > #menos").click(restar)
    $("#contador > #mas").click(sumar)
    $("#pago input").click(evaluarForm)
    $("#send").click(enviar)
    
    
    integrantes.forEach(cargarIntegrant)
    $(".integrant > img").click(upIntegrant)
    Grid()
    randomSlider()
}



function cargarIntegrant(elemento){
    $("#integrantes").append(`
    
    <div id="${elemento.img}" >
        <img src="DISCOS/${elemento.img}.jpg" alt="" id="${elemento.id}">
    </div>

    `)
    $("#integrantes img").click(upIntegrant)
}
function upIntegrant(){
    let cual=$(this).attr("id")
    window.location = "#integrantes"
    
    $("#integrantes").empty()
    $("#integrantes").addClass("infointeg")
    $("#integrantes").append(`<h2>Integrantes</h2>`)


    if(cual==="1"){
        $("#integrantes").append(`
        <div class="upIntegrant">
        <div>
        <h2>${integrantes[cual].nombre}</h2>
        <p>- ${integrantes[cual].completo}</p>
        <p>- ${integrantes[cual].anios}</p>
        <p>- ${integrantes[cual].rol}</p>
        <p>- ${integrantes[cual].tipo}</p>
        </div>
        <img src="DISCOS/${integrantes[cual].img}.jpg" alt="" id="${integrantes[cual].id}">
        </div>
        `)
    } else{
        
    $("#integrantes").append(`
    <div class="upIntegrant">
    <img src="DISCOS/${integrantes[cual].img}.jpg" alt="" id="${integrantes[cual].id}">
        <div>
        <h2>${integrantes[cual].nombre}</h2>
        <p>- ${integrantes[cual].completo}</p>
        <p>- ${integrantes[cual].anios}</p>
        <p>- ${integrantes[cual].rol}</p>
        <p>- ${integrantes[cual].tipo}</p>
        </div>
    </div>
    `)
    }

    $("#integrantes").append(`    
    <div class="back">
    <strong>back</strong>
    </div>
    `)

    $("#integrantes .back").click(function (){   
        window.location = "#integrantes"
        $("#integrantes").removeClass("infointeg")
        $("#integrantes").empty()
        $("#integrantes").append(`<h2>Integrantes</h2>`)
        integrantes.forEach(cargarIntegrant)
    })
    
    
    
    
}






function verificarMail(){

let mail=$("#modal input").val()
if(mail.length===0){
    $("#modal p").text("Campo vacio")
    $("#modal input").addClass("invalid")
} else if(mail.indexOf("@") === -1){
    $("#modal input").addClass("invalid")
    $("#modal p").text("Tu mail debe tener un @")
} else if(mail.indexOf(".", mail.indexOf("@")) === -1){
    $("#modal input").addClass("invalid")
    $("#modal p").text("Tu mail debe tener punto")
} else if(mail.charAt(mail.length-1)==="."){
        $("#modal input").addClass("invalid")
        $("#modal p").text("Debe haber texto luego del punto")
    } else{
        $("#modal").empty()
        $("#modal").append(`
        <h1>¡Gracias!</h1>
        <p>Checkea tu mail para confirmar tu suscripción.</p>
        `)
        $("#modal #done").removeClass("disable")

            setTimeout(function(){
                $("#backModal").toggle()
                time()
            }, 1500)
            
        }
}

//-------------------------
function time(){

    $("#modal").append(`
    <div id="close">
        <span></span>
        <span></span>
    </div>
    <h1>¡Buen día!</h1>
    <h2>¿Quieres recibir actualizaciones y promociones sobre próximos conciertos por mail?</h2>

    <input type="text" name="mail" id="mail" placeholder="Escriba su mail...">
    <input type="button" value="ENVIAR" id="done" class="disable">
    <p></p>
    `)

    var hour = new Date().getHours()
    
    
    if(hour>=5 && hour<13){
        $("#modal > h1").text("¡Buen día!")
        $("#modal").addClass("dia")

    } else if(hour>=13 && hour<20){
        $("#modal > h1").text("¡Buenas tardes!")
        $("#modal").addClass("tarde")
        
    } else if(hour>=20 || hour<5){
        $("#modal > h1").text("¡Buenas noches!")
        $("#modal").addClass("noche")        
    }

    $("#modal #done").click(verificarMail)
    $("#close").click(function(){
        $("#backModal").toggle()
    })
}




function filtrandoDisco(){
    $("#openDiscos").addClass("oculto")
    if($("#discs").css("display", "none")){
        $("#discs").toggle()
    }
    if($("#discos .mas").css("display", "none")){
        $("#discos .mas").toggle()
    }


//-----------------------------------------------
    let input = $("#search").val().toLowerCase();

    
    let result = discos.filter(function (elemento){
        let filtro = elemento.nombre.toLowerCase()
        let filtro3 = elemento.publicacion.toLowerCase()
        let filtro4 = elemento.tipo.toLowerCase()

        if(filtro.includes(input)===true || input===""){
            return elemento;
        } else if(filtro3.includes(input)===true){
            return elemento;
        } else if(filtro4.includes(input)===true){
            return elemento;
        }else if(elemento.tipo==="album"){
            let filtro2 = false
            elemento.canciones.forEach(function (song){
                if(song.toLowerCase().includes(input)){
                    filtro2=true;
                }
            })
            return filtro2;
        }
    })

    $("#discs").html("")
    result.forEach(cargarDiscos)
    $("#discs > div").click(upDisco)
    


}
function upDisco(){
    window.location = "#discos"
    $("#openDiscos").empty();
    $("#discos .mas").toggle()
    $("#discs").toggle();
    $("#openDiscos").toggleClass("oculto");

    let cual=$(this).attr("id")

    let classe;
    if(discos[cual].tipo === "sencillo"){
        classe = "sencillo"

        $("#openDiscos").addClass("sencillo").removeClass("album")
        $("#openDiscos").append(`
            <div id="top">
                <img src="DISCOS/${discos[cual].imag}.jpg" alt="">
                <div>
                <h3>${discos[cual].nombre}</h3>
                <p>${discos[cual].publicacion}!</p>
                </div>
                </div>
                <div id="bottom">
                <p>${discos[cual].tipo}</p>
                ${discos[cual].spotify}
            </div>
            <div class="back">
                <strong>back</strong>
            </div>  
            `
        )
    } else{
        classe = "album"
        $("#openDiscos").addClass("album").removeClass("sencillo")

        let songs = "";
        discos[cual].canciones.forEach(function (song){
            songs = songs + `<li>${song}</li>`
        })

        $("#openDiscos").append(`
            <div id="top">
                <img src="DISCOS/${discos[cual].imag}.jpg" alt="">
                <div>
                <h3>${discos[cual].nombre}</h3>
                <p>${discos[cual].publicacion}!</p>
            </div>

            </div>
                <div id="bottom">
                <p>${discos[cual].tipo}</p>
                    <ul>
                    ${songs}
                    ${discos[cual].spotify}
                    </ul>
            </div>

            <div class="back">
            <strong>back</strong>
            </div>  
            `)
    }

    $("#openDiscos .back").click(function(){

        window.location = "#discos"
        $("#discos .mas").toggle()
        $("#discs").toggle();
        $("#openDiscos").toggleClass("oculto");
    })




}
function cargarDiscos(elemento){
    
    $("#discs").append(`
    <div id="${elemento.id}">
    <img src="DISCOS/${elemento.imag}.jpg" alt="${elemento.nombre}">
    <p>${elemento.nombre}</p>
    </div>
    `)


}



var options=""
var date = ""
function upShow(){
    window.location = "#shows"
    $("#shows > .mas").toggle();
    $("#openShows").empty();
    $("#openShows").toggleClass("oculto");
    $("#shows > ul").toggle();
    $("#filterCity").toggle();

    let cual=$(this).attr("id")


    var options=""
    shows.forEach(function(elemento){
        if(cual===elemento.id){
            options = options + `<option selected="selected" value="${elemento.donde}">${elemento.donde}</option>`
        } else{
            if(options.includes(elemento.donde)===false){
            options = options + `<option  value="${elemento.donde}">${elemento.donde}</option>`
            }
        }
        return options
    })


    shows.forEach(function(elemento){
        if(cual===elemento.id){
            date = `"${elemento.value}"`
        }
        return date
    })




    $("#openShows").append(`
    <form action="">
    <input type="text" placeholder="Nombre" id="name">
    <p id="alertN"></p>
    <input type="text" placeholder="Apellido" id="apell">    
    <p id="alertA"></p>
    
    
    <select name="selectShows" id="selectShows">
    ${options}
    </select>
    
    
    <input type="date" name="date" id="date" value=${date}>
    <p id="alertD"></p>
        <div id="pago">
            <label for="paypal">PAYPAL
            <input type="radio" name="pago" id="paypal">
            </label>
            
            <label for="mastercard">MASTERCARD
            <input type="radio" name="pago" id="mastercard">
            </label>

            <label for="visa">VISA
            <input type="radio" name="pago" id="visa">
            </label>
        </div>
        <p id="alertA"></p>
        
        <label for="contador">Seleccione la cantidad de entradas a comprar:</label>
        <div id="contador">
        <input type="button" value="-" id="menos">
        <p>---</p>
        <input type="button" value="+" id="mas">
        </div>
        
        <input type="button" name="send" id="send" value="Enviar" class="disable">
        <div class="back">
            <strong>back</strong>
            </div>
        </form>
    `)


    $("#contador > #menos").click(restar)
    $("#contador > #mas").click(sumar)
    
    $("#name").keyup(evaluarN)
    $("#apell").keyup(evaluarA)

    $("#date").change(evaluarD)

    $("#pago input").click(evaluarForm)
    $("#contador > #menos").click(evaluarForm)
    $("#contador > #mas").click(evaluarForm)

    $("#send").click(enviar)

    
    
    $("#openShows .back").click(function(){
        window.location = "#shows"
        $("#shows > .mas").toggle();
        $("#openShows").toggleClass("oculto");
        $("#shows > ul").toggle();
        $("#filterCity").toggle();
    })

}
function cargarShows(elemento){

    $("#shows ul").append(`
    <li>
    <p>
    ${elemento.donde}
    </p>
    <strong>
    ${elemento.fecha}
    </strong>
    <p>
    ${elemento.precio}
    </p>
    
    <div class="mas" id="${elemento.id}">
    comprar
    </div>
    </li>
    `)

}
function cargarFiltroShow(elemento){
    if(options.includes(elemento.donde)===false){
        options = options + `<option  value="${elemento.donde}">${elemento.donde}</option>`
    }
    
    $("#filterCity").html(`
    <option value="Filtra por ciudad y país">Filtra por ciudad y país</option>
    ${options}
    `)
}
function filtrandoShow(){

    let seleccion = $("#filterCity").val()


    let resultshow = shows.filter(function (elemento){
        if(elemento.donde === seleccion || seleccion === "Filtra por ciudad y país"){
            return elemento
        }
    })
    $("#shows ul").empty()
    resultshow.forEach(cargarShows)
    
    $("#shows .mas").click(upShow);
}



function evaluarForm(){
    
    let inputA=$("#apell").val()
    let inputN=$("#name").val()
    let inputDate=$("#date").val()
    let cuantos=$("#contador > p").text()
    
    if(inputA!="" && inputN!="" && !inputDate===false && cuantos!="---" && cuantos!="0" && $("#pago input").is(':checked')===true){
        $("#send").removeClass("disable")
    } else{
        $("#send").addClass("disable")
    }

    

}
function evaluarD(){
    let inputDate=$("#date").val()

    if(inputDate!=date){
        $("#alertD").text(` ^ No hay un evento que conincida con esta fecha.^ `)
        $("#date").addClass("invalid")
    } else if(inputDate===date){
        $("#alertD").text(``)
        $("#date").removeClass("invalid")
    } else if(!inputDate===true){
        $("#alertD").text(` ^ Este campo es obligatorio, por favor completar. ^ `)
        $("#date").addClass("invalid")
    }else{
        $("#alertD").text(``)
        $("#date").removeClass("invalid")
    }
    evaluarForm()
}
function evaluarA(){
    let inputA=$("#apell").val()
    
    if(inputA==="" || inputA===" "){
        $("#alertA").text(` ^ Este campo es obligatorio, por favor completar. ^ `)
        $("#apell").addClass("invalid")
    }else{
        $("#alertA").text(``)
        $("#apell").removeClass("invalid")
        
    }
    evaluarForm()
}
function evaluarN(){
    let inputN=$("#name").val()
    if(inputN==="" || inputN===" "){
        $("#alertN").text(` ^ Este campo es obligatorio, por favor completar. ^ `)
        $("#name").addClass("invalid")
    } else{
        $("#alertN").text(``)
        $("#name").removeClass("invalid")
    }
    evaluarForm()
}

var save=0
function sumar(){
    if(save<20){
        save = save + 1
        $("#contador > p").text(save)
    }
    evaluarForm()
}
function restar(){
    if(save>0){
        save = save -  1
        $("#contador > p").text(save)
    }
    evaluarForm()
}
function enviar(){
    if($("#send").hasClass("disable")===false){
        save=0
        $("#send").click(function (){
            $("#thanks").toggleClass("oculto");
            $("#openShows").toggleClass("oculto")
            setTimeout(function(){
                $("#thanks").toggleClass("oculto");
                
                $("#shows > .mas").toggle();
                $("#shows > ul").toggle();
                $("#filterCity").toggle();
            },1600)
        })
    }
}











var imguno = 0
var imgdos = 1
var imgtres = 2
var imgcuatro = 3
function swapSocial(){
    $("#social > div").empty()
    imguno++
    imgdos++
    imgtres++
    imgcuatro++        
    
    if(imguno>redesImg.length-1){
        imguno = 0
    } else if(imgdos>redesImg.length-1){
        imgdos = 0
    } else if(imgtres>redesImg.length-1){
        imgtres = 0
    } else if(imgcuatro>redesImg.length-1){
        imgcuatro = 0
    }
    $("#social > div").append(`
    <a target="_blank" href="${redesImg[imguno].link}"><img src="REDES/${redesImg[imguno].img}.png" alt="${redesImg[imguno].alt}"></a>
    <a target="_blank" href="${redesImg[imgdos].link}"><img src="REDES/${redesImg[imgdos].img}.png" alt="${redesImg[imgdos].alt}"></a>
    <a target="_blank" href="${redesImg[imgtres].link}"><img src="REDES/${redesImg[imgtres].img}.png" alt="${redesImg[imgtres].alt}"></a>
    <a target="_blank" href="${redesImg[imgcuatro].link}"><img src="REDES/${redesImg[imgcuatro].img}.png" alt="${redesImg[imgcuatro].alt}"></a>
    `)



}


function randomSlider() {
    let imag = Math.round(Math.random() * (1));
    //alert(posicionImagen)
    $("#slider").html(`<img src="IMG/${slider[imag]}.jpg">`);
}
function Grid(){
    $("#grid").append(`
    <img src="IMG/${slider[6]}.jpg" alt="">
    <img src="IMG/${slider[3]}.jpg" alt="">
    <img src="IMG/${slider[7]}.jpg" alt="">
    <img src="IMG/${slider[5]}.jpg" alt="">
    <img src="IMG/${slider[0]}.jpg" alt="">
    `)

}