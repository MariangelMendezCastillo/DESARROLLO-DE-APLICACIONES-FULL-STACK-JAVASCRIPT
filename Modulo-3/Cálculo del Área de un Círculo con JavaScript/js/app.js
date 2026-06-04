var diametro=parseFloat(prompt("Ingresa el diámetro de la circunferenca: "));
radio= diametro/2;
area= Math.PI * Math.pow(radio,2);

// Mensaje por la consola
console.log(area);

// Mensaje de alerta

window.alert("El valor del área para una circunferencia de diámetro " + diametro + " es igual a " + area.toFixed(2));

// Muestra el resultado en la página

resultado=document.getElementById("resultado");
resultado.innerHTML="El valor del área para una circunferencia de diámetro "+ diametro + " es igual a " + area.toFixed(2);

