//constructor cursos
let cursos= [];

//iniciamos carrito
if( localStorage.getItem("carrito")) {
    productosEnCarrito = JSON.parse(localStorage.getItem("carrito"))  
 } else {
    localStorage.setItem("carrito", [])
 }

//plantillas 
fetch ('../database/cursos.json')
.then (res=> res.json())
.then (cursos=>
    cursos.forEach((curso)=>{
    let containerCursosGrid = document.createElement ("div");
    containerCursosGrid.setAttribute("class","product");
    containerCursosGrid.innerHTML= `
                                    <img src= "../multimedia/${curso.imagen}" alt="${curso.nombre}" class= "curso-img"> 
                                    <div class="curso-content">
                                        <h3>${curso.nombre} </h3>
                                        <p> Precio: $ ${curso.precio} </p>
                                        <p> Duración: ${curso.duracion} </p>
                                        <button id= "botonCurso${curso.id}" class="container-btn"> agregar </button>
                                    </div>`;
    document.getElementsByClassName("container-cursos")[0].appendChild(containerCursosGrid);
    let btnAgregar= document.getElementById(`botonCurso${curso.id}`);
    btnAgregar.addEventListener("click", ()=> agregarAlCarrito(curso))

    })
    
    )

botonCarrito.addEventListener ("click", ()=> {cargarProductosAlCarrito(productosEnCarrito)})

