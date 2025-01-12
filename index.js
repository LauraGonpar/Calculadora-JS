let precio = 400000;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

let numero = document.querySelector("#cantidad");
let botonSumar = document.querySelector("#btnSumar");
let botonRestar = document.querySelector("#btnRestar");
let totalSpan = document.querySelector(".valor-total");

botonSumar.addEventListener("click", () => {
  let totalApagar = Number(numero.textContent) + 1;
  numero.textContent = totalApagar;
  totalSpan.innerHTML = totalApagar * precio;
});
botonRestar.addEventListener("click", () => {
  let totalApagar = Number(numero.textContent) - 1;
  numero.textContent = totalApagar;
  totalSpan.innerHTML = totalApagar * precio;
});
