//declaro array}
let productosEnCarrito = [];
let productos = [];
//logica para inicializar carrito
//se puede usar operador or 
 if( localStorage.getItem("carrito")) {
    productosEnCarrito = JSON.parse(localStorage.getItem("carrito"))  
 } else {
    localStorage.setItem("carrito", [])
 }
//plantilla a partir de fetch a json

fetch('../database/productos.json')
  .then(res => res.json())
  .then(productos =>
    productos.forEach((producto)=>{
     let containerProductosGrid = document.createElement ("div");
     containerProductosGrid.setAttribute("class","product");
     containerProductosGrid.innerHTML= `
                                         <div class="card" style="width: 16rem;">
                                         <img src= "../multimedia/${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                                             <div class="card-body">
                                                 <h5 class="card-title">${producto.nombre}</h5>
                                                 <p class= "${producto.cantidad <= 5 ? "pocasUnidades" : "muchasUnidades"}"> Quedan pocas unidades!</p>
                                                 <p class="card-text">Precio: $ ${producto.precio}</p>
                                                 <button class="container-btn"  id= "id ${producto.id}"> agregar </button>
                                             </div>
                                         </div>`
 document.getElementsByClassName("container-img")[0].appendChild(containerProductosGrid);
 document.getElementById(`id ${producto.id}`).addEventListener("click", ()=> agregarAlCarrito(producto))
       }
       ))

 
//codigo btnAgregar

function agregarAlCarrito (producto){
    let productoAgregado= productosEnCarrito.indexOf(producto)

if(productoAgregado == -1){
  productosEnCarrito.push(producto)
  //cargar al storage
  localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
  Swal.fire({
    icon: 'success',
    text: `${producto.nombre } ha sido agregado al carrito`,
    confirmButtonText: 'Seguir comprando'
  })
} else{
  Swal.fire({
    icon: 'info',
    text: `${producto.nombre} ya se encuentra en el carrito`,
    confirmButtonText: 'Agregar nuevamente',
  })
  }}

//cargar prod al carrito
let modalBody = document.getElementById("modal-body");
let botonCarrito = document.getElementById ("btn-carrito");

botonCarrito.addEventListener ("click", ()=> {cargarProductosAlCarrito(productosEnCarrito)})

//funcion para agregar al carrito

function cargarProductosAlCarrito (storage){
    modalBody.innerHTML = ""
//plantilla para modal
    storage.forEach((item) => {
        modalBody.innerHTML += `
      <div class="card mb-3" style="max-width: 540px;" id = "producto ${item.id}">
        <div class="row g-0" id= "item-modal" style="width:400px;">
          <div class="col-md-4">
            <img src="../multimedia/${item.imagen}" class="img-fluid rounded-start" alt="${item.nombre}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${item.nombre}</h5>
              <p> Precio: $ ${item.precio}
            </div>
          </div>
          <button class= "btn-eliminar${item.id}" > Eliminar </button>
        </div>
      </div>`
    })

    //btn remover producto usar forEach por fuera del boton  
    storage.forEach((item,indice)=>{
    //capturo el btn sin uso de variable pq no la necesito despues
    document.querySelector(`.btn-eliminar${item.id}`).addEventListener("click", ()=> {
    //cartel emergente
   Swal.fire({
    icon: "success",
    text: `${item.nombre } se ha eliminado del carrito`,
    })
    //eliminar DOM
    let itemEliminado= document.getElementById(`producto ${item.id}`);
    itemEliminado.remove()
    //eliminamos del [] storage
    productosEnCarrito.splice(indice, 1)
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
    cargarProductosAlCarrito(productosEnCarrito)
    })
  })
  //function del total
 totalCompra(storage)
} 

let parrafoTotal = document.querySelector (".parrafo-total")

// let acumulador; usar reduce para el valor total?

function totalCompra(productos){ 
 const precioFinal = productos.reduce((acc, producto) => {
   return acc + Number(producto.precio)
  },0)
console.log(precioFinal)
  precioFinal > 0 ? parrafoTotal.innerHTML= `<p>El importe de su compra es $ ${precioFinal} </p>` : parrafoTotal.innerHTML= `<p>No hay productos en el carrito</p>`
  }

  //vaciar carrito
  let vaciar= document.getElementById("vaciar-carrito")
  vaciar.addEventListener("click", vaciarCarrito)
  function vaciarCarrito (){
    localStorage.clear("carrito")
    modalBody.innerHTML = ""
    parrafoTotal.innerHTML= "";

  }

  let finalizarCompra = document.getElementById ("finalizar-compra");
  finalizarCompra.addEventListener ("click", finCompra)
  function finCompra (){
    Swal.fire({
      title: '¿Desea realizar la compra?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si,claro',
      denyButtonText: `No, gracias`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Gracias por su compra!', '', 'success')
        vaciarCarrito ()
        parrafoTotal.innerHTML= "";
      } else if (result.isDenied) {
        Swal.fire('sus productos siguen en el carrito :(', '', 'info')
      }
    })
  }