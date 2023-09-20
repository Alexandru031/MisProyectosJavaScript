/* 
En el siguiente ejercicio vamos a practicar con el bucle do while para que el código se ejecute una y otra vez hasta que el usuario decida parar.

Pide una nota (número). Muestra la calificación según la nota:
 */
function califica() {
  let nota = parseInt(document.getElementById("nota").value);
  /*  "document.getElementById("nota").value" - Sirve para obtener valor de cualquier tipo de dato
      "parseInt()" - Convertir el valor en un Int */
  let texto;
  if (nota >= 0 && nota < 3) {
    texto = "Muy deficiente";
  } else if (nota >= 3 && nota < 5) {
    texto = "Insuficiente";
  } else if (nota >= 5 && nota < 6) {
    texto = "Suficiente";
  } else if (nota >= 6 && nota < 7) {
    texto = "Bien";
  } else if (nota >= 7 && nota < 9) {
    texto = "Notable";
  } else if (nota >= 9 && nota <= 10){
    texto = "Sobresaliente";
  }

  document.getElementById("result").value = texto /*  */
}
