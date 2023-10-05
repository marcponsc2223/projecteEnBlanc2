function validatePropina()   {
  var cantidad = document.getElementById("input1").value;
  var totalFactura = document.getElementById("input2").value;
  var opinion = document.getElementById("inputState").value;
  var pgPropina = 0;
  document.getElementById("nombreError").textContent = "";
  document.getElementById("nombreError").style.color = "";
  document.getElementById("formSatisfac").textContent = "";
  document.getElementById("formSatisfac").style.color = "";
  if (cantidad === "") {
    cantidad = 1;
  }
  if (totalFactura === "" || opinion === "Elije...") {
    document.getElementById("nombreError").textContent = "* Campo obligatorio";
    document.getElementById("nombreError").style.color = "red";
    document.getElementById("formSatisfac").textContent = "* Campo obligatorio";
    document.getElementById("formSatisfac").style.color = "red";
    return;
  }
  if (opinion === "Genial") {
    pgPropina = 10;
  } else if (opinion === "Aceptable") {
    pgPropina = 5;
  } else {
    pgPropina = 0;
  }
  var propina = (totalFactura * pgPropina) / 100;
  var propinaPorComensal = propina / cantidad;
  if (propinaPorComensal < 0.5) {
    alert("La propina por comensal mínima es de 0.50, se te aplicará el mínimo.");
    propinaPorComensal = 0.50;
  }
  const confirmacion = confirm(`Datos de la propina :
  Cantidad de comensales: ${cantidad}
	Total factura es: ${totalFactura} €
	Propina total es: ${propina} €
  Propina por comensal es de : ${propinaPorComensal} €
	¿Quieres continuar?`);

  if (confirmacion) {
    alert("Pago aceptado.");
    document.getElementById("myForm").reset()
  } else {
    alert("Pago rechazado");
  }
  }
