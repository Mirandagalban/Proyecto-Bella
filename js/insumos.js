//declaro array
let productosEnCarrito = [];
let productos = [];

class Producto {
    constructor(id,nombre,precio,cantidad ){
        this.id=id;
        this.nombre = nombre;
        this.precio= precio;
        this.cantidad=cantidad;
        };
       }
    

productos.push (new Producto (0,"Serum para ojos", 12000, 12));
productos.push (new Producto (1,"Crema facial", 8000,8));
productos.push (new Producto (2,"Gel de limpieza", 4500, 2));
productos.push (new Producto (3,"Contorno de ojos", 8500, 5));
productos.push (new Producto (4,"Rimmel", 8900, 6));
productos.push (new Producto (5,"Mascara facial", 5700, 11));
productos.push (new Producto (6,"Corrector de ojeras", 2600, 8));
productos.push (new Producto (7,"Protector labial", 2700, 2));
productos.push (new Producto (8,"Crema corporal", 5200, 15));
productos.push (new Producto (9,"Gel reductor", 12000, 5));
productos.push (new Producto (10,"Exfoliante corporal", 4100, 3));
productos.push (new Producto (11,"Bronceador en crema", 2200, 0));
productos.push (new Producto (12,"Masajeador corporal", 14000, 2));
productos.push (new Producto (13,"Esmalte regular", 1100, 12));
productos.push (new Producto (14,"Crema fria", 3600, 8));
productos.push (new Producto (15,"Aceite corporal", 5400, 7));

//logica para inicializar carrito

 if( localStorage.getItem("carrito")) {
    productosEnCarrito = JSON.parse(localStorage.getItem("carrito"))  
 } else {
    localStorage.setItem("carrito", [])
 }

// plantilla 

const mostrarFaciales = (productos)=> {
    const containerFaciales = document.getElementsByClassName("container-img");
    productos.forEach((producto)=>{
    let containerProductosGrid = document.createElement ("div");
    containerProductosGrid.setAttribute("class","product");
    containerProductosGrid.innerHTML= `
                                        <div class="card" style="width: 16rem;">
                                        <img src="../multimedia/prod1.jpg" class="card-img-top" alt="#">
                                            <div class="card-body">
                                                <h5 class="card-title">${producto.nombre}</h5>
                                                <p class="card-text">Precio: $ ${producto.precio}</p>
                                                <button class="container-btn "  id= "id ${producto.id}"> agregar </button>
                                            </div>
                                        </div>`
        containerFaciales[0].appendChild(containerProductosGrid);


let btnAgregar= document.getElementById(`id ${producto.id}`);

btnAgregar.addEventListener("click", ()=> agregarAlCarrito(producto))

        });
    }

    mostrarFaciales(productos)
 
//codigo btnAgregar

function agregarAlCarrito (producto){
    console.log (`El producto ${producto.nombre} ha sido agregado al carrito`)
    productosEnCarrito.push (producto)
    console.log (productosEnCarrito)
//cargar al storage
localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
}

//cargar prod al carrito
let modalBody = document.getElementById("modal-body");
let botonCarrito = document.getElementById ("btn-carrito")

botonCarrito.addEventListener ("click", ()=> {cargarProductosAlCarrito(productosEnCarrito)})

//funcion para agregar al carrito

function cargarProductosAlCarrito (storage){
    modalBody.innerHTML = ""

    storage.forEach((item) => {
        modalBody.innerHTML += `<div class="card mb-3" style="max-width: 540px;" id = "producto ${item.id}>
        <div class="row g-0" id= "item-modal">
          <div class="col-md-4">
            <img src="../multimedia/prod1.jpg" class="img-fluid rounded-start" alt="${item.nombre}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${item.nombre}</h5>
              <p> Precio: $ ${item.precio}
            </div>
          </div>
          <button class= "btn-eliminar" > Eliminar </button>
        </div>
      </div>`
 
    })
//function del total
 // totalCompra(storage)
} 

// let acumulador;

// function totalCompra(total){
//   acumulador = 0;
//   //recorremos el total
//   total.forEach((item)=>{
//   acumulador += item.precio
//   })
//   console.log(totalCompra)
//   if(total==0){
//     <p>No hay productos en el carrito</p>
//   }
// }