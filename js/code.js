/*alert("Bienvenido a Bella insumos :)")
let usuario = prompt("¿cual es tu nombre?");
alert ("Bienvenido "+ usuario);

let producto = parseInt(prompt ("Elija una opcion: 1-cursos 2-insumos 3-promociones" ))

switch (producto){
    case 1:
        (alert(usuario + " elegiste cursos!"))
        let curso= parseInt(prompt ("¿Cual te gustaria realizar 1-faciales 2-corporales?"))
        if (curso==1){
                alert("Elegiste faciales, bievenido a la escuela " + usuario)
        }
        else if (curso== 2) {
            alert("Elegiste corporales, bievenido a la escuela " + usuario)
        }
        else{
            alert("opcion incorrecta")
        }
        break

    case 2:
        alert(usuario + " elegiste Insumos")
        let compra= parseInt(prompt("te gustaria hacer una compra 1-minorista o 2 -mayorista?"))
        if (compra== 1) {
            alert(usuario + " sos comprador minorista")
        }
        else if(compra==2) {
            alert(usuario + " sos comprador mayorista")
        } 
        else{
            alert("opcion incorrecta")
        }
        break
    case 3:
        alert(usuario + " elegiste promociones")
        let promociones= parseInt(prompt("te gustaria conocer nuestras promociones para 1-insumos 2- cursos?"))
        if (promociones== 1) {
            alert(usuario + " elegiste promociones para insumos")
            alert("15% de descuento en tus compras mayores a $4000")
        }
        else if(promociones==2) {
            alert(usuario + " elegiste promociones para cursos")
            alert("10% de descuento anotandote en 2 cursos o mas")
        }
        else{
            alert("opcion incorrecta")
        }
        break

    default:
            alert("opcion incorrecta")
            break
    
    }

    let cantidadInsumos = 10;
    let precioInsumos= 1000;
    console.log(cantidadInsumos);
    console.log(precioInsumos);

    function compra (cantidadInsumos, precioInsumos) {

        let precioCompra= (cantidadInsumos*precioInsumos);

        if (precioCompra>4000){
            return true

        }
        else {
            return false
        }
    }

    console.log (compra(10,1000))

    let precioTotal= compra(10,1000);

    if (precioTotal == true) {
        console.log("Ganaste el 15% de descuento en el total de tu compra!! :)")
    }
    else {
        console.log("el total de tu compra es de " + precioTotal)
    }*/
    const botonDescuento = document.getElementById ("btn-descuento");
    const descuento = document.getElementById ("cupon");

    const mostrarDescuento = (() => { 
    let codigoDescuento = document.createElement ("div");

    if (botonDescuento.classList.contains("desactivado")){
    codigoDescuento.setAttribute("class", "codigo-descuento");
    codigoDescuento.innerHTML = `<h4>Ganaste!</h4>
                                <h6>Usa tu 5% en tu proxima compra mayor $10000</h6>
                                <p>CODIGO UNICO: BELLA20235% </p>
                                <p><small>Valido para un uso único, luego de 2 meses de su creación.</small></p>`
     descuento.style.textAlign= "center";
     descuento.style.margin= "2px"
     descuento.appendChild(codigoDescuento);
     botonDescuento.classList.replace("desactivado","activado");
     botonDescuento.innerText= "Cerrar"
    }

    else{
        descuento.removeChild(document.querySelector(".codigo-descuento"));
        botonDescuento.classList.replace("activado","desactivado");
        botonDescuento.innerText= "Quiero mi codigo"
    }
        });

    botonDescuento.addEventListener("click", mostrarDescuento);

   