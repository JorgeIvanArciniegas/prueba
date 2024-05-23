function calcular() {
    const importe = document.getElementById("importe");
    const dJubilado = document.getElementById("dJubilado");
    const dIdaVuelta = document.getElementById("dIdaVuelta");
    const dVIP = document.getElementById("dVIP");
    if (isNaN(Number(importe.value)) || isNaN(parseFloat(importe.value)) || (Number(importe.value <= 0))) {
        //importe.value = "El importe debe ser mayor a cero y no debe estar vacio"
        window.alert("El importe debe ser mayor a cero y no debe estar vacio");
        importe.focus();
        importe.select();
        return;
    }
    let descuento = 0;
    let detalleDescuento = 0;
    if (document.getElementById("jubilado").checked) {
        descuento = importe.value * 10 / 100;
        detalleDescuento = descuento;
        dJubilado.value = descuento + "€";
    }
    if (document.getElementById("idaVuelta").checked) {
        descuento = descuento + importe.value * 5 / 100;
        dIdaVuelta.value = descuento - detalleDescuento + " €";
    }
    let descuentoVip = 0
    if (document.getElementById("vip").checked) {
        descuentoVip = importe.value * 7 / 100;
        descuento += importe.value * 7 / 100;
        dVIP.value = descuentoVip + " €";
    }
    document.getElementById("descuentos").value = descuento + " €";
    document.getElementById("total").value = importe.value - descuento + " €";
}
function borrar() {
    const importe = document.getElementById("importe");
    const descuentos = document.getElementById("descuentos");
    const total = document.getElementById("total");
    const dJubilado = document.getElementById("dJubilado");
    const dIdaVuelta = document.getElementById("dIdaVuelta");
    const dVIP = document.getElementById("dVIP");
    importe.value = 0;
    descuentos.value = 0;
    total.value = 0
    dJubilado.value = 0;
    dIdaVuelta.value = 0;
    dVIP.value = 0;
}
document.getElementById("calcular").addEventListener("click", calcular);
document.getElementById("borrar").addEventListener("click", borrar);
