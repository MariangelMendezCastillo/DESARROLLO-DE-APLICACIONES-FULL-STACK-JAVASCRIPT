var diametro=Number(parseFloat(prompt("Ingresa el diámetro de la circunferenca (cm): ")));
radio= diametro/2;
area= Math.PI * Math.pow(radio,2);

// Mensaje por la consola
console.log("Area: " ,area.toFixed(2), "cm2");

// Mensaje de alerta

window.alert("El valor del área para una circunferencia de diámetro " + diametro + " cm es igual a " + area.toFixed(2)+ " cm2");

// Muestra el resultado en la página

resultado=document.getElementById("resultado");
resultado.innerHTML="El valor del área para una circunferencia de diámetro " + diametro + " cm es igual a " + area.toFixed(2)+ " cm2";

