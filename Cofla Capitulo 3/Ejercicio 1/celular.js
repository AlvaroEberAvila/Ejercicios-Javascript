class celular {
    constructor(color, peso, pantalla, camara, memoria) {
        this.color = color;
        this.peso = peso;
        this.pantalla = pantalla;
        this.camara = camara;
        this.memoria = memoria;
        this.encender = false;

    }
    prender() {
        if (this.encender == false) {
            alert("Encendiendo celular");
            this.celular = true;
        } else {
            alert("Celular apagado");
            this.celular = false;
        }

    }
    reiniciar() {
        if (this.encender == true) {
            alert("Reiniciando celular");
        } else {
            alert("El celular esta apagado");
        }
    }
    fotos() {
        alert(`Sacar foto en una resolusion de: ${this.camara}`);
    }
    grabar() {
        alert(`Hacer un video en una resolusion de: ${this.camara}`);
    }
    info() {
        return `
        Color: ${this.color}<br>
        Peso: ${this.peso}<br>
        Pantalla: ${this.pantalla}<br>
        Camara: ${this.camara}<br>
        Memoria: ${this.memoria}<br>
        `;
    }
}

class altagamma extends celular {
    constructor(color, peso, pantalla, camara, memoria, grabar, facial, camara2) {
        super(color, peso, pantalla, camara, memoria);
        this.grabar = grabar;
        this.facial = facial;
        this.camara2 = camara2;
    }
    camarasuperlenta() {
        alert("Activar camara lenta");
    }
    reconocimientofacial() {
        alert("Acerque su cara para el reconocimiento");
    }
    camaraextra() {
        alert("Usando camara extra");
    }
    info() {
        return `
        Color: ${this.color}<br>
        Peso: ${this.peso}<br>
        Pantalla: ${this.pantalla}<br>
        Camara: ${this.camara}<br>
        Memoria: ${this.memoria}<br>
        Grabar Lento: ${this.grabar}<br>
        Reconocimiento Facial: ${this.facial}<br>
        Camara Extra: ${this.camara2}<br>
        `;
    }
}

const nokia = new celular("Negro", "150g", "3'", "hd", "5GB");
const samsung = new celular("Gris", "140g", "2'", "4k", "6GB");
const huawei = new celular("Blanco", "145g", "3'", "hd", "5GB");
const motorola = new altagamma("Rojo", "150g" ,"4'", "full hd", "8GB", "camara lenta", "facial", "full hd 4k");
const oneplus = new altagamma("Azul", "155g", "4.5'", "full hd 4k", "10GB", "camara lenta", "facial", "full hd 4k");

document.write(`
${nokia.info()}<br>
${samsung.info()}<br>
${huawei.info()}<br>
${motorola.info()}<br>
${oneplus.info()}<br>
`);
