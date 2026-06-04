 function verificar() {
        const nombre = document.getElementById("nombre").value;
        const edad = parseInt(document.getElementById("edad").value);
        let mayorEdad = false;
        if (edad >= 18) {
          mayorEdad = true;
        } else {
          mayorEdad = false;
        }
        if (mayorEdad) {
          document.getElementById("perfil").innerHTML = `
    <div >
        <div class="card shadow p-3">
                <p>Nombre: ${nombre}</p>
                <p>Edad: ${edad}</p>
                <p class="text-success">Es mayor de edad.</p>
                </div>
                </div>`;
        } else {
          document.getElementById("perfil").innerHTML = `
    <div>
        <div class="card shadow p-3">
                <p>Nombre: ${nombre}</p>
                <p>Edad: ${edad}</p>
                <p class="text-danger">No es mayor de edad.</p>
                </div>
                </div>`;
        }
    }