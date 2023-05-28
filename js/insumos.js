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
productos.push (new Producto ("serum para ojos", 12000,true, 12));
productos.push (new Producto("crema corporal", 8000,true,8));
productos.push (new Producto("gel de limpieza", 4500,true, 2));
productos.push (new Producto ("Contorno de ojos", 8500,true, 5));
productos.push (new Producto ("Protector Solar", 5700,true, 6));

console.log (productos)

//if pago tarjeta sumarle iva 
//iteramos el array con for...of para modificarlos a todos
/*for (const producto of productos){
    producto.sumaIva ();
}*/