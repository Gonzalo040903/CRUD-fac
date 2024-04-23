const nombre = document.getElementById("inputNombre1");
const descripcion = document.getElementById("inputDescripcion1");
const precio = document.getElementById("inputPrecio1");
const guardarBoton = document.getElementById("guardarBoton");
const contenedorProd = document.getElementById("contenedorProd");

const arregloProductos = [];

guardarBoton.addEventListener("click",
    function () {
        let nombreValor = nombre.value;
        let descripcionValor = descripcion.value;
        let precioValor = precio.value;
        const productoNew = { nombreValor, descripcionValor, precioValor }
        arregloProductos.push(productoNew);
        console.log(arregloProductos);
        mostrarProd();
        // console.log(`El nombre es ${nombreValor}, su descripcion es: ${descripcionValor}, su precio es ${precioValor}`);
        // console.log(producto);
    });

function mostrarProd() {
    arregloProductos.forEach(productoNew => {
        const div = document.createElement("div");
        div.innerHTML = `<div class="col-3 border border-3 border-danger p-2 m-2 contenedorProd">
        <h3>-${arregloProductos.nombreValor}</h3>
        <P>-${arregloProductos.descripcionValor}</P>
        <h5>-$${arregloProductos.precioValor}</h5>
    </div>`
    contenedorProd.appendChild(div);
    });
}
