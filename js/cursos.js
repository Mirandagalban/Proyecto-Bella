//constructor cursos
class Curso {
    constructor(id,nombre,precio,duracion,tipo){
        this.id= id;
        this.nombre = nombre;
        this.precio= parseFloat (precio);
        this.duracion= duracion;
        this.tipo= tipo;
        }
        descuento(){
            this.precio= (this.precio *10)/100;
            }
    }
const cursos= [];

cursos.push(new Curso(1,"Hilos Cosmetologicos", 17000, "5 semanas", "facial"));
cursos.push(new Curso (2,"Masajes Corporales", 12000, "4 semanas", "corporal"));
cursos.push(new Curso (3,"Dermapen", 20000, "6 semanas", "facial"));
cursos.push(new Curso (4,"Mini HIFU", 17000, "5 semanas", "facial"));
cursos.push(new Curso (5,"Depilación Láser", 15000, "4 semanas","corporal y facial"));
cursos.push(new Curso (6,"Maderoterapia", 12000, "4 semanas", "corporal"));

let usuario= prompt ("¿te gustaria conocer sobre cursos? Elegir si o no");

if (usuario == "si") {
cursos.forEach ((el) => { console.log(el)})
};

let faciales = cursos.filter ((el)=> el.tipo.includes ("facial"));
let corporales = cursos.filter ((el)=> el.tipo.includes ("corporal"));

console.log(faciales);
console.log (corporales);

let precioCard= cursos.map ((el)=>(el.nombre + el.precio));
let precioCash = cursos.map ((el) => (el.nombre + (el.precio - (el.precio *10 )/100)));

console.log (precioCash)
console.log (precioCard)

let listaPrecio= parseFloat(prompt ("¿Desea ver la lista de precios en efectivo (1) o tarjeta (2)?"));

if (listaPrecio == 1) {
    alert("La lista de precios en efectivo es: " +precioCash)
}
else if (listaPrecio== 2) {
    alert("La lista de precios en tarjeta es: " +precioCard)
}
else {
    alert("opcion incorrecta")
}
/*const listaAlumnos = [];
let cantidad = 6;

do {
    let entrada = prompt ("Ingresar tu nombre");
    listaAlumnos.push (entrada);
}while (listaAlumnos.length!= cantidad);

console.log (listaAlumnos);*/





 