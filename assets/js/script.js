let gastosTotales = 0;
let id = 0;
let arrayGastos = [];
let presupuesto = 0;
const enviarGastos = document.getElementById("enviar_gastos");


const getId = () => {
    id++;
    return id;
};


function enviarPresupuesto() {
    let presupuesto = document.getElementById("presupuestoInput").value;

    document.getElementById("presupuesto").innerHTML = "$ " + presupuesto;
    document.getElementById("saldo").innerHTML =  "$ "+ (presupuesto - gastosTotales)
};


const gastosObj = (monto, nombre) => {
    const GastoObjNew = {
        id: getId(),
        nombre: nombre,
        monto: parseInt(monto)
    }
    return JSON.parse(JSON.stringify(GastoObjNew));
};

function printiarGasto(Gasto){
    const tablagastos = document.getElementById("rellenoTabla");
    tablagastos.innerHTML += `<tr id="objeto${Gasto.id}">
        <td>${Gasto.id}</td>
        <td>${Gasto.nombre}</td>
        <td>${Gasto.monto}</td> 
        <td>
            <a href="#" onclick="alerta(${Gasto.id})" > <i class="bi bi-trash3"></i></a>
        </td>
        </tr> `;
        console.log('gasto.id :>> ', Gasto.id);
        console.log('gasto.nombre :>> ', Gasto.nombre);
        console.log('gasto.monto :>> ', Gasto.monto);
};


enviarGastos.addEventListener("click", gastosInfo = () => {
    let gastoNombre = document.getElementById("nombreInput").value;
    let gastoMonto = document.getElementById("gastosInput").value;
    let presupuesto = document.getElementById("presupuestoInput").value;


    let gasto = gastosObj(gastoMonto, gastoNombre);
    console.log('gasto :>> ', gasto);

    gastosTotales += gasto.monto;
    console.log('totalGastos:', gastosTotales);

    arrayGastos.push(gasto);
    console.log('arrayGastos:', arrayGastos);

    document.getElementById("gastosTotales").innerHTML = "$ " + gastosTotales;
    document.getElementById("saldo").innerHTML =  "$ "+ (presupuesto - gastosTotales);
    console.log('presupuesto :>> ', presupuesto);
    printiarGasto(gasto);
}
);


const borrarGasto = (id) => {
    let presupuestoDato = document.getElementById("presupuesto"); //capturamos el dato
    let presupuestoValor = presupuestoDato.textContent.replace('$', ''); // de el dato obtenemos la info y obtenemos el contenido con .textContent y posteriormente modificamos su contenido con replace quitando el $ por espacio
    let presupuestoTotal = parseInt(presupuestoValor); //tranformamos el valor en entero
    console.log('arrayGastos:', arrayGastos);
    console.log('id:', id);


    arrayGastos = arrayGastos.filter((gasto) => {
        
        if (gasto.id == id) {
            let objetoDelete = document.getElementById("objeto" + gasto.id);
            objetoDelete.remove();
            return false;
        }
        return true;
    });

    gastosTotales = arrayGastos.reduce((total, valor) => total + valor.monto, 0);
    document.getElementById("gastosTotales").innerHTML = "$ " + gastosTotales;
    document.getElementById("saldo").innerHTML =  "$ "+ (presupuestoTotal - gastosTotales);
    console.log('arrayGastos:', arrayGastos);
    console.log('presupuestoTotal: ', presupuestoTotal);


};

const alerta = (id) => {
    Swal.fire({
        title: 'Estás seguro de eliminar el gasto N° ' + id,
        text: "El Gasto se eliminará de forma permanente, este cambio no se puede revertir!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!'
        }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
            'Eliminado!',
            'El gasto N° ' + id + ' fue eliminado de manera exitosa',
            'success'
            );
            borrarGasto(id);
        }
    })
};



/* funcion mala

const borrarGasto = (id) => {
    let presupuestoDato = document.getElementById("presupuesto"); //capturamos el dato
    let presupuestoValor = presupuestoDato.textContent.replace('$', ''); // de el dato obtenemos la info y obtenemos el contenido con .textContent y posteriormente modificamos su contenido con replace quitando el $ por espacio
    let presupuestoTotal = parseInt(presupuestoValor); //tranformamos el valor en entero
    console.log('arrayGastos:', arrayGastos);
    console.log('id:', id);


    arrayGastos = arrayGastos.filter((gasto) => {
        
        if (gasto.id == id) {
            let objetoDelete = document.getElementById("objeto" + gasto.id);
            objetoDelete.remove();
            return false;
        }
        return true;
    });

    gastosTotales = arrayGastos.reduce((total, valor) => total + valor.monto, 0);
    document.getElementById("gastosTotales").innerHTML = "$ " + gastosTotales;
    document.getElementById("saldo").innerHTML =  "$ "+ (presupuestoTotal - gastosTotales);
    console.log('arrayGastos:', arrayGastos);
    console.log('presupuestoTotal: ', presupuestoTotal);


};


    arrayGastos = arrayGastos.filter((gasto) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (gasto.id == id) {
                let objetoDelete = document.getElementById("objeto" + gasto.id);
                objetoDelete.remove();
                return false;
            }
            
            else {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }else {
                    return true;
                }
            }
        });
    });
*/



/* codigo antes de cambiar cosas funcionando

let gastosTotales = 0;
let id = 0;
let arrayGastos = [];
let presupuesto = 0;
const enviarGastos = document.getElementById("enviar_gastos");


const getId = () => {
    id++;
    return id;
};


function enviarPresupuesto() {
    let presupuesto = document.getElementById("presupuestoInput").value;

    document.getElementById("presupuesto").innerHTML = "$ " + presupuesto;
    document.getElementById("saldo").innerHTML =  "$ "+ (presupuesto - gastosTotales)
};


const gastosObj = (monto, nombre) => {
    const GastoObjNew = {
        id: getId(),
        nombre: nombre,
        monto: parseInt(monto)
    }
    return JSON.parse(JSON.stringify(GastoObjNew));
};

function printiarGasto(Gasto){
    const tablagastos = document.getElementById("rellenoTabla");
    tablagastos.innerHTML += `<tr id="objeto${Gasto.id}">
        <td>${Gasto.id}</td>
        <td>${Gasto.nombre}</td>
        <td>${Gasto.monto}</td> 
        <td>
            <a href="#" onclick="borrarGasto(${Gasto.id})" > <i class="bi bi-trash3"></i></a>
        </td>
        </tr> `;
        console.log('gasto.id :>> ', Gasto.id);
        console.log('gasto.nombre :>> ', Gasto.nombre);
        console.log('gasto.monto :>> ', Gasto.monto);
};


enviarGastos.addEventListener("click", gastosInfo = () => {
    let gastoNombre = document.getElementById("nombreInput").value;
    let gastoMonto = document.getElementById("gastosInput").value;
    let presupuesto = document.getElementById("presupuestoInput").value;


    let gasto = gastosObj(gastoMonto, gastoNombre);
    console.log('gasto :>> ', gasto);

    gastosTotales += gasto.monto;
    console.log('totalGastos:', gastosTotales);

    arrayGastos.push(gasto);
    console.log('arrayGastos:', arrayGastos);

    document.getElementById("gastosTotales").innerHTML = "$ " + gastosTotales;
    document.getElementById("saldo").innerHTML =  "$ "+ (presupuesto - gastosTotales);
    console.log('presupuesto :>> ', presupuesto);
    printiarGasto(gasto);
}
);


const borrarGasto = (id) => {
    let presupuestoDato = document.getElementById("presupuesto"); //capturamos el dato
    let presupuestoValor = presupuestoDato.textContent.replace('$', ''); // de el dato obtenemos la info y obtenemos el contenido con .textContent y posteriormente modificamos su contenido con replace quitando el $ por espacio
    let presupuestoTotal = parseInt(presupuestoValor); //tranformamos el valor en entero
    console.log('arrayGastos:', arrayGastos);
    console.log('id:', id);


    arrayGastos = arrayGastos.filter((gasto) => {
        
        if (gasto.id == id) {
            let objetoDelete = document.getElementById("objeto" + gasto.id);
            objetoDelete.remove();
            return false;
        }
        return true;
    });

    gastosTotales = arrayGastos.reduce((total, valor) => total + valor.monto, 0);
    document.getElementById("gastosTotales").innerHTML = "$ " + gastosTotales;
    document.getElementById("saldo").innerHTML =  "$ "+ (presupuestoTotal - gastosTotales);
    console.log('arrayGastos:', arrayGastos);
    console.log('presupuestoTotal: ', presupuestoTotal);


};

*/