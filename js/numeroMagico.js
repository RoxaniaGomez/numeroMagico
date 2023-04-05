
let numeroMagico = {
    // propiedades -> clave: valor;
    numeroMagicoo: 0,
    intentos: 0,

    //metodos

    iniciar: function () {
        this.numeroMagicoo = Math.floor(Math.random() * 50);
        this.intentos = 0;

        window.alert("El numero magico es un numero entre 1 y 50, luego de elegirlo te dare una pista para encontrarlo, si lo adivinas, Ganas el juego!!!");
        document.getElementById("iniciar").style.display = "none";

        document.getElementById("formAdivinar").style.display = "initial";

    },
    adivinar: function (num) {
        this.intentos = this.intentos + 1;
        if (num > this.numeroMagicoo) {
            window.alert("el numero magico es mas chico que el numero que ingresaste");
        } else if (num < this.numeroMagicoo) {
            window.alert("el numero magico es mas grande que el numero que ingresaste");
        } else {
            if (this.intentos == 1) {
                document.getElementById("volverAIniciar").style.display = "initial";
                document.getElementById("formAdivinar").style.display = "none";
                document.getElementById("cajaIniciar").style.display = "none"
                document.getElementById("mensajito").style.display = "initial";
                document.getElementById("mensajito").innerHTML = ("Eres realmente un adivino lo lograste en " + this.intentos + " intento");
                document.getElementById("adivino").style.display = "initial";
            } else {
                document.getElementById("volverAIniciar").style.display = "initial";
                document.getElementById("formAdivinar").style.display = "none";
                document.getElementById("cajaIniciar").style.display = "none";
                document.getElementById("mensajito").style.display = "initial";
                document.getElementById("mensajito").innerHTML = ("ganaste!! felicidades lo lograste en " + this.intentos + " intentos");

            }




        }
    },
    volverAIniciar: function () {
        document.getElementById("mensajito").style.display = "none";
        document.getElementById("volverAIniciar").style.display = "none";
        document.getElementById("adivino").style.display = "none";
        document.getElementById("cajaIniciar").style.display = "initial";
        document.getElementById("iniciar").style.display = "initial";

    }

}
const form2 = document.querySelector('#formAdivinar');
const numElegido = document.querySelector('#numero');


btnAdivinar.addEventListener('click', () => {
    const numElegido = parseInt(numero.value);
    numeroMagico.adivinar(numElegido);
});


