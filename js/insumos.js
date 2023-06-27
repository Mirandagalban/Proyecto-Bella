class Producto {
    constructor(id,nombre, precio,disponible, cantidad ){
        this.id=id;
        this.nombre = nombre;
        this.precio= precio;
        this.cantidad=cantidad;
        };
       restaCantidad(){
        this.cantidad=this.cantidad - 1;
    
       };
       
    }

const productos = [];
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


//declaro array
const carrito = [];

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
    carrito.push (producto)
    console.log (carrito)
//cargar al storage
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

 