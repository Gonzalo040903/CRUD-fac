const nombre = document.getElementById("inputNombre1");
const descripcion = document.getElementById("inputDescripcion1");
const precio = document.getElementById("inputPrecio1");
const guardarBoton = document.getElementById("guardarBoton");
const contenedorProd = document.getElementById("contenedorProd");
const eliminarDiv = document.getElementById("eliminarTable");
const botonEliminarTabla = document.getElementById("botonEliminarTabla");


const arregloProductos = [];
let i = 1;

guardarBoton.addEventListener("click",

    function () {
        const id = i;
        i++
        let nombreValor = nombre.value;
        let descripcionValor = descripcion.value;
        let precioValor = precio.value;


        class productoNew {
            constructor(id, nombre, descripcion, precio) {
                this.id = id;
                this.nombre = nombre;
                this.descripcion = descripcion;
                this.precio = precio;
            }
        }

        let productoCreado = new productoNew(id, nombreValor, descripcionValor, precioValor);
        arregloProductos.push(productoCreado);
        console.log(arregloProductos);
        mostrarProd(id, nombreValor, descripcionValor, precioValor);
        eliminarProd(id, nombreValor, descripcionValor, precioValor);

    });

function mostrarProd(id, nombreValor, descripcionValor, precioValor) {
    const div = document.createElement("div");
    div.innerHTML = `<div class="col-3 border border-3 border-danger p-2 m-2 contenedorProd">
        <h3>-#${id}</h3>
        <h3>-${nombreValor}</h3>
        <P>-${descripcionValor}</P>
        <h5>-$${precioValor}</h5>
    </div>`
    contenedorProd.appendChild(div);
}

function eliminarProd(id, nombreValor, descripcionValor, precioValor) {

    const tr = document.createElement("tr");
    tr.innerHTML = `<th scope="row">${id}</th>
                <td>${nombreValor}</td>
                <td>${descripcionValor}</td>
                <td>${precioValor}</td>
                <td><button class="btn btn-outline-danger" id="botonEliminarTabla" dataset="${id}" onclick="funcionEliminar(${id})">Elminiar</button></td>`
    eliminarDiv.appendChild(tr);
}

const funcionEliminar = (id) => {
    arregloProductos.pop();
    console.log(arregloProductos);
}