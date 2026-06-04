palabra=prompt("Ingrese una palabra:  ");
largoPal=palabra.length-1;
palabraNueva="";
while(largoPal>=0){
    palabraNueva+=palabra[largoPal];
    largoPal--;
}

    console.log(palabraNueva);
