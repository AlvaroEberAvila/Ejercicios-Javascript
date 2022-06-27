let nopaga = false;
let gratis = (horario) => {
  let edad = parseInt(prompt("Ingresa tu edad: "));
  if (edad >= 18) {
    if (horario >= 2 && nopaga == false) {
      alert("Sos el primero en ingresar a las 2am, entras Gratis");
      nopaga = true;
    } else {
      alert("Puedes pasar a la fiesta pero hay que pagar");
    }
  } else {
    alert("Sos menor pa no podes pasar, a llorar al campo");
  }
};

gratis(10);
gratis(11);
gratis(12);
gratis(2);
gratis(3);
