//constructor cursos
let cursos= [];

class Curso {
    constructor(id, img, nombre,precio,duracion, tipo){
        this.id= id,
        this.img = img,
        this.nombre = nombre,
        this.precio= precio,
        this.duracion= duracion,
        this.tipo= tipo
        }  
     };

cursos.push(new Curso (1, "../multimedia/curso.jpg", "Hilos Cosmetologicos", 17000, "5 semanas", "facial"));
cursos.push(new Curso (2,"../multimedia/curso2.jpg","Masajes Corporales", 12000, "4 semanas","corporal"));
cursos.push(new Curso (3, "../multimedia/curso3.jpg","Dermapen", 20000, "6 semanas","facial"));
cursos.push(new Curso (4,"../multimedia/curso4.jpg","Mini HIFU", 17000, "5 semanas","facial"));
cursos.push(new Curso (5,"../multimedia/curso5.jpg","Depilación Láser", 15000, "4 semanas","corporal y facial"));
cursos.push(new Curso (6, "../multimedia/curso6.jpg","Maderoterapia", 12000, "4 semanas","corporal"));


//plantillas 

const mostrarCursos = (cursos)=> {
    const containerCursos = document.getElementsByClassName("container-cursos");
    cursos.forEach((curso)=> {
    let containerCursosGrid = document.createElement ("div");
    containerCursosGrid.setAttribute("class","product");
    containerCursosGrid.innerHTML= `<img src= ${curso.img} alt="${curso.nombre}" class= "curso-img"> 
                                    <div class="curso-content">
                                        <h3>${curso.nombre} </h3>
                                        <p> Precio: $ ${curso.precio} </p>
                                        <p> Duración: ${curso.duracion} </p>
                                        <input type="button" value="agregar" id= "boton${curso.id}" class="container-btn">
                                    </div>`;
    containerCursos[0].appendChild(containerCursosGrid)
});             
    };

mostrarCursos(cursos);

const agregarCarrito= document.getElementsByClassName("container-btn")
for( let btnAgregar of agregarCarrito){
    btnAgregar.addEventListener("click", () => console.log("se ha agregado al carrito"))
}
