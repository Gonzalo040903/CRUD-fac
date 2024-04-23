const nombre = document.getElementById("inputNombre1");
const descripcion = document.getElementById("inputDescripcion1");
const precio = document.getElementById("inputPrecio1");
const guardarBoton = document.getElementById("guardarBoton");
const contenedorProd = document.getElementById("contenedorProd");
const eliminarDiv = document.getElementById("eliminarTable");

const arregloProductos = [];
let i = 0;

guardarBoton.addEventListener("click",

    function () {

        let nombreValor = nombre.value;
        let descripcionValor = descripcion.value;
        let precioValor = precio.value;


        class productoNew {
            constructor(nombre, descripcion, precio) {
                this.nombre = nombre;
                this.descripcion = descripcion;
                this.precio = precio;
            }
        }

        let productoCreado = new productoNew(nombreValor, descripcionValor, precioValor)
        arregloProductos.push(productoCreado);
        console.log(arregloProductos);
        mostrarProd(nombreValor, descripcionValor, precioValor);
        eliminarProd(nombreValor, descripcionValor, precioValor);

    });

function mostrarProd(nombreValor, descripcionValor, precioValor) {
    const div = document.createElement("div");
    div.innerHTML = `<div class="col-3 border border-3 border-danger p-2 m-2 contenedorProd">
        <h3>-${nombreValor}</h3>
        <P>-${descripcionValor}</P>
        <h5>-$${precioValor}</h5>
    </div>`
    contenedorProd.appendChild(div);
}

function eliminarProd(nombreValor, descripcionValor, precioValor) {
    i++
    const tr = document.createElement("tr");
    tr.innerHTML = `<th scope="row">${i}</th>
                <td>${nombreValor}</td>
                <td>${descripcionValor}</td>
                <td>${precioValor}</td>
                <td><button class="btn btn-outline-danger" id="botonEliminarTabla">Elminiar</button></td>`
    eliminarDiv.appendChild(tr);
}
