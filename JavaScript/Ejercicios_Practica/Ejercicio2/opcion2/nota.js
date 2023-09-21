/* 
En el siguiente ejercicio vamos a practicar con el bucle do while para que el código se ejecute una y otra vez hasta que el usuario decida parar.

Pide una nota (número). Muestra la calificación según la nota:
 */

let otraNota = true;
do {
  let nota = parseInt(prompt("Que nota tienes?"));

  let noEsNota = !Number.isNaN(nota);

  function califica() {
    if (noEsNota) {
      if (nota >= 0 && nota < 3) {
        return "Muy deficiente";
      } else if (nota >= 3 && nota < 5) {
        return "Insuficiente";
      } else if (nota >= 5 && nota < 6) {
        return "Suficiente";
      } else if (nota >= 6 && nota < 7) {
        return "Bien";
      } else if (nota >= 7 && nota < 9) {
        return "Notable";
      } else if (nota >= 9 && nota <= 10) {
        return "Sobresaliente";
      } 
    } else {
      return 'No es numero'
    }
  }
    document.write(noEsNota ? nota + " -> " + califica() + `<br>` : `No es numero<br>`)
    otraNota = confirm("Quieres añadir más notas?");
} while (otraNota);
