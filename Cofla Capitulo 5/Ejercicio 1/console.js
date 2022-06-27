const materias = {
  musica: [90, 3, 4, "musica"],
  programacion: [91, 8, 3, "programacion"],
  ingles: [99, 9, 1, "ingles"],
  dibujo: [95, 5, 4, "dibujo"],
  videojuegos: [87, 6, 2, "videojuegos"],
  bbdd: [88, 8, 4, "bbdd"],
};

const aprobo = () => {
  for (materia in materias) {
    let asistencias = materias[materia][0];
    let promedio = materias[materia][1];
    let trabajos = materias[materia][2];

    console.log(materias[materia][3]);

    if (asistencias >= 90) {
      console.log("%c Asistencias Completas", "color:green");
    } else {
      console.log("%c Falta de Asistencias", "color:red");
    }
    if (promedio >= 7) {
      console.log("%c Promedio superior a 7", "color:green");
    } else {
      console.log("%c Promedio inferior a 7", "color:red");
    }
    if (trabajos >= 3) {
      console.log("%c Trabajos Completados", "color:green");
    } else {
      console.log("%c Faltan Trabajos", "color:red");
    }
  }
};

aprobo();
