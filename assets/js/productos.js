const categoriasBtns = document.getElementById("categoriasBtns");
const productos = document.querySelectorAll(".product-card");

categoriasBtns.addEventListener("click", function(e) {
  if (e.target.closest("button")) {
    categoriasBtns.querySelectorAll("button").forEach(btn => {
      btn.classList.remove("btn-primary", "active");
      btn.classList.add("btn-outline-primary");
    });

    const btnSeleccionado = e.target.closest("button");
    btnSeleccionado.classList.remove("btn-outline-primary");
    btnSeleccionado.classList.add("btn-primary", "active");

    const categoria = btnSeleccionado.textContent.trim().toLowerCase();

    productos.forEach(producto => {
      if (categoria === "todo") {
        producto.parentElement.style.display = "block";
      } else {
        if (producto.dataset.categoria === categoria) {
          producto.parentElement.style.display = "block";
        } else {
          producto.parentElement.style.display = "none";
        }
      }
    });
  }
});


