class Producto {
    constructor(id,nombre, precio,disponible, cantidad ){
        this.id=id;
        this.nombre = nombre;
        this.precio= parseFloat (precio);
        this.disponible= true;
        this.cantidad=parseFloat(cantidad);
        };
       restaCantidad(){
        this.cantidad=this.cantidad - 1;
    
       };
       
    }

const productos = [];
productos.push (new Producto (0,"Serum para ojos", 12000,true, 12));
productos.push (new Producto (1,"Crema facial", 8000,true,8));
productos.push (new Producto (2,"Gel de limpieza", 4500,true, 2));
productos.push (new Producto (3,"Contorno de ojos", 8500,true, 5));
productos.push (new Producto (4,"Rimmel", 8900,true, 6));
productos.push (new Producto (5,"Mascara facial", 5700,true, 11));
productos.push (new Producto (6,"Corrector de ojeras", 2600,true, 8));
productos.push (new Producto (7,"Protector labial", 2700,true, 2));
productos.push (new Producto (8,"Crema corporal", 5200, true, 15));
productos.push (new Producto (9,"Gel reductor", 12000, true, 5));
productos.push (new Producto (10,"Exfoliante corporal", 4100, true, 3));
productos.push (new Producto (11,"Bronceador en crema", 2200, false, 0));
productos.push (new Producto (12,"Masajeador corporal", 14000, true, 2));
productos.push (new Producto (13,"Esmalte regular", 1100, true, 12));
productos.push (new Producto (14,"Crema fria para masajes", 3600, true, 8));
productos.push (new Producto (15,"Aceite corporal", 5400, true, 7));

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
                                        <input type="button" value="agregar" class="container-btn" onclick="${producto.restaCantidad()}"></input>`
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