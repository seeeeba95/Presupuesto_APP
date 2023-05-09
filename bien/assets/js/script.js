let gastosTotales = 0;
let id = 0;
let arrayGastos = [];
let presupuesto2 = 0;
const enviarGastos = document.getElementById = ("enviar_gastos");


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
    printiarGasto(gasto);
}
);


const borrarGasto = (id) => {
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
    document.getElementById("saldo").innerHTML =  "$ "+ (presupuesto2 - gastosTotales);
    console.log('2.- arrayGastos:', arrayGastos);

};


const saldos = () => {
    document.getElementById("saldo").innerHTML =  "$ "+ (presupuesto2 - gastosTotales)
}





/* profe
let totalGastos = 0;
let id = 0;
let arrayGastos = [];
let enviarGastos = document.getElementById("enviar_gastos")

const getId = () => {
    id++;
    return id;
}

const getGastoObj = (nombre, cantidad) => {
    const NewGasto = {
        id: getId(),
        nombre: nombre,
        cantidad: parseInt(cantidad)
    }
    return JSON.parse(JSON.stringify(NewGasto));
}

enviarGastos.addEventListener("click", addGastoTabla = (Gasto) => {
    const tbody = document.getElementById('rellenoTabla');
    tbody.innerHTML += `<tr id="elemento${Gasto.id}">
        <td>${Gasto.nombre}</td>
        <td>${Gasto.cantidad}</td> 
        <td>
            <a href="#" onclick="borrarGasto(${Gasto.id})" >Borrar</a>
        </td>
    </tr> `;
});

enviarGastos.addEventListener("click", inputGasto = () => {
    let gastoNombre = document.getElementById("nombreInput").value;
    let gastoCantidad = document.getElementById("gastosInput").value;

    let Gasto = getGastoObj(gastoNombre, gastoCantidad);
    console.log('Gasto:', Gasto);

    totalGastos += Gasto.cantidad;
    console.log('totalGastos:', totalGastos);

    arrayGastos.push(Gasto);
    console.log('arrayGastos:', arrayGastos);

    document.getElementById('despliegaTotal').innerText = totalGastos;

    addGastoTabla(Gasto);
});

const borrarGasto = (id) => {
    console.log('arrayGastos:', arrayGastos);
    console.log('id:', id);

    arrayGastos = arrayGastos.filter((gasto) => {
        if (gasto.id == id) {
            let filaABorrar = document.getElementById("elemento" + gasto.id);
            filaABorrar.remove();
            return false;
        }
        return true;
    });

    totalGastos = arrayGastos.reduce((total, valor) => total + valor.cantidad, 0);
    document.getElementById('gastosTotales').innerText = totalGastos;
    console.log('2.- arrayGastos:', arrayGastos);
}


    const tablagastos = document.getElementById("rellenoTabla");
    tablagastos.innerHTML += '<tr id="objeto' + Gasto.id + '">' 
    tablagastos.innerHTML += '<td> ' + Gasto.id + '</td>';
    tablagastos.innerHTML += '<td> ' + Gasto.nombre + '</td>';
    tablagastos.innerHTML += '<td> ' + Gasto.monto + '</td>';
    tablagastos.innerHTML += '<td> <a href="#" onclick="borrarGasto(' +  Gasto.id + ')" > <i class="bi bi-trash3"></i></a> </td>'; 
    tablagastos.innerHTML += '</tr>';
        console.log('gasto.id :>> ', Gasto.id);
        console.log('gasto.nombre :>> ', Gasto.nombre);
        console.log('gasto.monto :>> ', Gasto.monto);
});


    const tablagastos = document.getElementById("rellenoTabla");
    tablagastos.innerHTML += `<tr id="objetoGasto.id}">
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
*/


