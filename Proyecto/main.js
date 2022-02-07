let nombreJugador = prompt("Ingresa tu nombre de entrenador");

const partySetup = document.querySelector(".party-setup");

class Party {
    constructor(pokemonNombre,pokemonTipo,nivel,hp,pokemonimg){
        this.pokemonNombre = pokemonNombre;
        this.pokemonTipo = pokemonTipo;
        this.nivel = parseInt(nivel);
        this.hp = parseInt(hp);
        this.pokemonimg =  pokemonimg;
    }
}


let party = [];
let element = ["AGUA","FUEGO","HIELO"]
let maxParty = 6;
let pokeNum = 1;

do{
    let pokemonNombre = prompt("Ingresa el nombre de tu pokemon numero "+ pokeNum);
    let pokemonTipo = prompt("Ingresa su elemento");
    let pokemonTipoUP = pokemonTipo.toUpperCase();
    let pokemonimg;
    if(element.includes(pokemonTipoUP)){
        let nivel = 1;
        let hp = Math.floor(Math.random()* (24 - 19)+19);
        switch (pokemonTipoUP){
            case "HIELO":
                pokemonimg = '../Proyecto/img/favpng_symbol-ice-emblem-logo.png';
                break;
            
            case "FUEGO":
                pokemonimg= '../Proyecto/img/fire-element-png-Transparent-Images.png';
                break;

            case "AGUA":
                pokemonimg= '../Proyecto/img/217-2172033_water-png-water-element-transparent.png';
                break;
        }
        const pokemon = new Party(pokemonNombre,pokemonTipo,nivel,hp,pokemonimg);
        
        party.push(pokemon);
        pokeNum++;
    } else{
        alert("Este elemento no existe");
        continue;
    }
    
} while (party.length != maxParty);

console.log(party.pokemonNombre);

displayParty();

function displayParty(){

    party.forEach(function (dparty){

        console.log(dparty);
        
        const divParty = document.createElement('div');
        divParty.classList.add('card');

        const imgParty = document.createElement('img');
        imgParty.classList.add('party-img')
        imgParty.src = dparty.pokemonimg;

        const nombrePoke = document.createElement('h2');
        nombrePoke.classList.add('nombre-pokemon')
        nombrePoke.textContent = dparty.pokemonNombre;

        const nivelPoke = document.createElement('h2');
        nivelPoke.classList.add('nivel-pokemon')
        nivelPoke.textContent = dparty.pokemonLevel;

        const elementoPoke = document.createElement('h3');
        elementoPoke.classList.add('elemnto-poke');
        elementoPoke.textContent = dparty.pokemonTipo

        divParty.appendChild(imgParty);
        divParty.appendChild(nombrePoke);
        divParty.appendChild(nivelPoke);
        divParty.appendChild(elementoPoke);

        partySetup.appendChild(divParty);

    })
}

function battle(){

    let battlePoke = prompt("Selecciona al pokemon que quieras usar");
    foundPoke = party.find((pk)=> pk.pokemonNombre == battlePoke);
    console.log(foundPoke);

    let enemylevel = Math.floor(Math.random()*(5-1)+1);
    let pokemonLevel = foundPoke.nivel
    
    let chancetoWin = Math.floor(Math.random()*(1-0)+1);

    console.log(pokemonLevel);

    if(enemylevel > pokemonLevel || chancetoWin == 0){
        console.log("Perdiste");
    } else{
        console.log("Ganaste");
    }
}

function deleteP(){
    let deletePok = prompt("Selecciona a quien quieres eliminar");
    foundPoke = party.find((pk)=> pk.pokemonNombre == deletePok);
    delete party[pokemonNombre];
    console.log(party);
}

let loop = false;
let decision = prompt("Que deseas hacer \n1.Realizar una batalla. \n2.Eliminar pokemon")
do {
    switch(decision){
        case "1":
            battle();
            loop = true;
            break;

        case "2":
            deleteP();
            loop = true;
            break;

        default:
            let reseto = prompt("Deseas realizar otra accion ?");
            reseto = reseto.toUpperCase;

            switch(reseto){
                case "SI":
                    loop=false;
                    break;

                case "NO":
                    loop=true;
                    break;
            }
            
    }
} while (loop = false);

console.log(decision);

function increaseHP(pokemonBattleling){
    pokemonBattleling = party.find((pk)=> pk.nivel == pokemonBattleling);
    while(pokemonBattleling <= nivelActual){
        hp = party.find((pk)=> pk.hp == hp)
        hp += Math.floor(Math.random()*(3 - 1)+1);
        nivel++;
    }
} 

/*let battleElec;
battleElec = prompt("Deseas realizar una batalla?\n 1.Si \n 2.No")
if(battleElec == 1){
    battle();
} else {
    console.log("ok");
}*/


/* 
while(party.length < 6){
    function createPokemon(){
        let nombre = prompt("Elige el pokemon que desees");
        tipo = prompt("Que tipo de es");
        nivel = 1;
        const party = new Party(nombre,tipo,nivel);
        return party;
    }

    function addPokemontoParty(Pokemon){
        party.push(Pokemon);
    }
}*/
