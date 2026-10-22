(function () {
  var raiz = document.documentElement;
  var boton = document.getElementById("modo");
  function aplicar(t) {
    if (t === "oscuro") { raiz.setAttribute("data-tema", "oscuro"); }
    else { raiz.removeAttribute("data-tema"); }
    if (boton) {
      boton.textContent = t === "oscuro" ? "☀ Modo claro" : "☾ Modo oscuro";
      boton.setAttribute("aria-pressed", t === "oscuro");
    }
  }
  var guardado = null;
  try { guardado = localStorage.getItem("bpm-tema"); } catch (e) {}
  aplicar(guardado === "oscuro" ? "oscuro" : "claro");
  if (boton) boton.addEventListener("click", function () {
    var nuevo = raiz.getAttribute("data-tema") === "oscuro" ? "claro" : "oscuro";
    aplicar(nuevo);
    try { localStorage.setItem("bpm-tema", nuevo); } catch (e) {}
  });
})();
