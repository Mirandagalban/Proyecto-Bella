class Producto {
    constructor(nombre, precio,disponible, cantidad ){
        this.nombre = nombre;
        this.precio= parseFloat (precio);
        this.disponible= true;
        this.cantidad=parseFloat(cantidad);
        }
      //  sumaIva() {
       //     this.precio = this.precio * 1.21;
       // }
    }

const productos = [];
productos.push (new Producto ("Serum para ojos", 12000,true, 12));
productos.push (new Producto ("Crema facial", 8000,true,8));
productos.push (new Producto ("Gel de limpieza", 4500,true, 2));
productos.push (new Producto ("Contorno de ojos", 8500,true, 5));
productos.push (new Producto ("Rimmel", 8900,true, 6));
productos.push (new Producto ("Mascara facial", 5700,true, 11));
productos.push (new Producto ("Corrector de ojeras", 2600,true, 8));
productos.push (new Producto ("Protector labial", 2700,true, 2));
productos.push (new Producto ("Crema corporal", 5200, true, 15));
productos.push (new Producto ("Gel reductor", 12000, true, 5));
productos.push (new Producto ("Exfoliante corporal", 4100, true, 3));
productos.push (new Producto ("Bronceador en crema", 2200, false, 0));
productos.push (new Producto ("Masajeador corporal", 14000, true, 2));
productos.push (new Producto ("Esmalte regular", 1100, true, 12));
productos.push (new Producto ("Crema fria para masajes", 3600, true, 8));
productos.push (new Producto ("Aceite corporal", 5400, true, 7));

// plantilla 

const mostrarFaciales = (productos)=> {
    const containerFaciales = document.getElementsByClassName("container-img");
    productos.forEach((producto)=>{
    let containerProductosGrid = document.createElement ("div");
    containerProductosGrid.setAttribute("class","product");
    containerProductosGrid.innerHTML= `
                                        <img src="../multimedia/prod1.jpg" alt="#">  
                                        <h4>${producto.nombre}</h4>
                                        <p>Precio: ${producto.precio}</p>
                                        <input type="button" value="agregar" class="container-btn" ></input>`
        containerFaciales[0].appendChild(containerProductosGrid);

        });
    }

    mostrarFaciales(productos)
    
const agregarCarrito= document.getElementsByClassName("container-btn")
for( let btnAgregar of agregarCarrito){
    btnAgregar.addEventListener("click", () => console.log("se ha agregado al carrito"))
}




//if pago tarjeta sumarle iva 
//iteramos el array con for...of para modificarlos a todos
/*for (const producto of productos){
    producto.sumaIva ();
}*/