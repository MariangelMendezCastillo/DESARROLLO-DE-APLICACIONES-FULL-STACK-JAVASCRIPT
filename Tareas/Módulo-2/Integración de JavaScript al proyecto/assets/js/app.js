document.addEventListener("DOMContentLoaded", () => {
  const btnTop = document.getElementById("btnTop");

  if (btnTop) {
    // Mostrar/ocultar el botón según el scroll
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        btnTop.style.display = "block";
      } else {
        btnTop.style.display = "none";
      }
    });

    // Acción al hacer clic
    btnTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});