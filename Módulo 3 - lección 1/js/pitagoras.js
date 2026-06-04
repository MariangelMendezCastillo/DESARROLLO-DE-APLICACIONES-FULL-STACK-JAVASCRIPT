cateto1=parseFloat(prompt("Ingrese valor de cateto 1: "));
cateto2=parseFloat(prompt("Ingrese valor de cateto 2: "));
hipotenusaalcuadrado=Math.pow(cateto1,2) + Math.pow(cateto2,2);
hipotenusa=Math.sqrt(hipotenusaalcuadrado);
document.write(hipotenusa);