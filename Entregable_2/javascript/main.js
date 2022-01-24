/* Brainstorm
const number = prompt('Ingresar numero');

if(number === parseInt){
    document.addEventListener('DOMContentLoaded',() => {
        fetchData(number);
    })
    
    const fetchData = async (id) => {
        try{
            const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`)
            const data = await res.json()
            console.log(data);
            drawCard(data)
            
        } catch (error) {
            console.log(error);
        }
    }
    
    const drawCard = () => {
        console.log(pokemon);
        const card = document.getElementById('#card').content
    }
} else {
    alert("That's not a number. Try again");
    setTimeout(2);
    location.reload();

}*/

//Desafio 1:

let selectP = prompt("Selecciona el nombre de tu jugador");
let player = selectP;
let STRG,DEF,SPD;

var maximun = 20;

alert("La reglas son simples: Tienes 3 habilidades; tu ataque le gana a la velocidad, velocidad le gana a defensa y defensa le gana a ataque.");
alert("Tienes 20 puntos para subir las habilidades de tu personaje. Escoge sabiamente")

if(maximun > 0){
    while(maximun > 0){
        let currentPoints = prompt("Que habilidad deseas subir 1. Fuerza 2.Defensa 3.Velocidad; solo te quedan "+ maximun + " puntos");
        switch(currentPoints){
            case "1":
                let STRGpoints = prompt("Cuantos puntos deseas subir");
                STRG = STRGpoints;
                maximun = maximun - STRGpoints;
                break;
            case "2":
                let DEFpoints = prompt("Cuantos puntos deseas subir");
                DEF = DEFpoints;
                maximun = maximun - DEFpoints;
                break;

            case "3":
                let SPDpoints = prompt("Cuantos puntos deseas subir");
                SPD = SPDpoints;
                maximun = maximun - SPDpoints;
                break;
        }
    }
}


let play = function(param){
    
    if(maximun == 0){
        alert("La batalla a comenzado, te encontraste un ogro arrazando la ciudad y solo "+ selectP +" podra salvarlo")

        var enemyA, enemyD, enemySP;

        enemyA = Math.floor(Math.random()*20);
        enemyD = Math.floor(Math.random()*20);
        enemySP = Math.floor(Math.random()*20);

        

        if(STRG > enemySP){
            alert("Ganaste");
        } else if(enemyA > SPD){
            alert("Perdiste");
        } else if(SPD > enemyD){
            alert("Ganaste");
        } else if(enemySP > DEF){
            alert("Perdiste");
        } else if(DEF > enemyA){
            alert("Ganaste");
        } else if(enemyD > STRG){
            alert("Perdiste");
        } else if(STRG == enemySP && SPD == enemyD && DEF == enemyA){
            alert("Esto se decidira por suerte");
            let enemyRoll = Math.floor(Math.random()*100);
            let yourRoll = prompt("Presiona ok para sacar un numero");
            yourRoll = Math.floor(Math.random()*100);

            if(enemyRoll>yourRoll){
                alert("La ciudad a sido destruida");
                window.close;
            } else if(yourRoll>enemyRoll){
                alert("Nos has salvado estamos agradecidos")
                window.close;
            }
        }

        alert("Resultados: "+ selectP + " Ataque = "+ STRG + "\n Defensa = "+ DEF+ " \n Velocidad = "+SPD+
                "\n Ogro: Ataque: " + enemyA + "\n Defensa: " + enemyD + " \n Velocidad: "+ enemySP);
    } else {
        alert("Alguien se a pasado el numero de puntos eh!");
        location.reload;
    }


    console.log(enemyS)
    console.log(enemyD);
    console.log(enemySP);
}

play();