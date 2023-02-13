class Calculadora {
    constructor(capital, interes, periodo) {
        this.capital = capital;
        this.interes = interes;
        this.periodo = periodo;
    }
}


const formulario = document.getElementById("formulario");

arrayCalcular = []

formulario.addEventListener("submit", (e) => {

    //Evito el comportamiento por default del formulario: 
    e.preventDefault();

    const capitalInicial = document.getElementById("capitalInicial");
    const tasaInteres = document.getElementById("tasaInteres");
    const periodo = document.getElementById("periodo");

    const calcular = new Calculadora(capitalInicial.value, tasaInteres.value, periodo.value);

    arrayCalcular.push(calcular)


    let andaPallaBobo = function() {    //Le asignamos a las variables los valores ingresados por el usuario
        let k = parseInt(calcular.capital);     //mediante prompt que fueron pasados desde el Array al Objeto
        let i = parseInt(calcular.interes);
        let n = parseInt(calcular.periodo);
        return k * Math.pow(1 + i / 100, n);


    }

    let final = andaPallaBobo();
    final = final.toFixed(2);
    
    const divResultado = document.getElementById('resultado');

    if (calcular.capital !== '' && calcular.interes !== '' && calcular.periodo !== '') {
        divResultado.innerHTML = `<p>Bueno, si me haces caso y no gastas en tonterías como Samu, con $${calcular.capital}
        Samuelines de inversión incial, en ${calcular.periodo} años, a una tasa de interés del ${calcular.interes}%, vas
        a tener: $${final} Samuelines. Es decir, vas a seguir siendo pobre, pero no tanto. Gracias por participar.</p>`;
    } else {
        console.log('No pasa nada');
    }

    formulario.reset();
})

const restablecer = document.getElementById('restablecer');

restablecer.addEventListener("click", () => {
    const divResultado = document.getElementById('resultado');
    divResultado.innerHTML = '';
})
