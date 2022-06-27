class app {
  constructor(descargas, puntuacion, peso) {
    this.cantidaddescargas = descargas;
    this.puntuacion = puntuacion;
    this.peso = peso;
    this.instalar = false;
    this.abrir = false;
  }
  instalar() {
    if (this.instalar == false) {
      alert("Instalando Aplicacion");
      this.instalar = true;
    } else {
      alert("Desistanlando Aplicacion");
      this.instalar = false;
    }
  }
  abrir() {
    if (this.abrir == false) {
      alert("Abriendo Aplicacion");
      this.abrir = true;
    } else {
      alert("Cerrando Aplicacion");
      this.abrir = false;
    }
  }
  info() {
    return `
        Cantidad de Descargas: ${this.cantidaddescargas}<br>
        Puntuacion: ${this.puntuacion}<br>
        Peso: ${this.peso}<br>
        `;
  }
}

const nova = new app("800M", 4.0, "2GB");
const preguntados = new app("300M", 5.0, "500MB");
const freefire = new app("1000M", 4.3, "396MB");
const clashroyale = new app("100M", 4.4, "145MB");
const pou = new app("500M", 4.4, "21MB");
const candycrush = new app("1000M", 4.7, "81MB");
const dragoncity = new app("100M", 4.7, "127MB");

document.write(`
${nova.info()}<br>
${preguntados.info()}<br>
${freefire.info()}<br>
${clashroyale.info()}<br>
${pou.info()}<br>
${candycrush.info()}<br>
${dragoncity.info()}<br>
`);
