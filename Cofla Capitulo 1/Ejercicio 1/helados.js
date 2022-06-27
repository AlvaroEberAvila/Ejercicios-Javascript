let roberto = parseInt(prompt("Roberto ingresa el monton: "));
let pedro = parseInt(prompt("Pedro ingresa el monton: "));
let cofla = parseInt(prompt("Cofla ingresa el monton: "));

if (roberto <= 1.6) {
  document.write(
    `Roberto podes comprar el helado de: <br> Crema: $1USD <br> Agua: $0.6USD`
  );
}
if (pedro <= 1.7) {
  document.write(
    `<br><br>Pedro podes comprar el helado de: <br> Crema: $1USD <br> Agua: $0.6USD <br> heladix: $1.6USD <br> heladovich: $1.7USD`
  );
}
if (cofla <= 3) {
  document.write(
    `<br><br>Cofla podes comprar el helado de: <br> Crema: $1USD <br> Agua: $0.6USD <br> heladix: $1.6USD <br> heladovich: $1.7USD <br> helardo: $1.8USD <br> confites: $2.9USD <br> pote de 1/4KG: $2.9USD`
  );
}
