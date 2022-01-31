let nombreJugador = prompt("Ingresa tu nombre de entrenador");

class Party {
    constructor(pokemonNombre,pokemonTipo,nivel,hp){
        this.pokemonNombre = pokemonNombre;
        this.pokemonTipo = pokemonTipo;
        this.nivel = parseInt(nivel);
        this.hp = parseInt(hp);
    }
}


let party = [];
let element = ["AGUA","FUEGO","HIELO"]
let maxParty = 6
let pokeNum = 1;

do{
    let pokemonNombre = prompt("Ingresa el nombre de tu pokemon numero "+ pokeNum);
    let pokemonTipo = prompt("Ingresa su tipo");
    let upPokemonTipo = pokemonTipo.toUpperCase();
    foundType = element.find((em)=>em.element == upPokemonTipo);
    console.log(foundType);
    if(upPokemonTipo == foundType){
        alert("Este elemento no existe");
        continue;
    } else{
        let nivel = 1;
        let hp = Math.floor(Math.random()* (24 - 19)+19);
        const pokemon = new Party(pokemonNombre,pokemonTipo,nivel,hp);
        party.push(pokemon);
        pokeNum++;
    }
    
} while (party.length != maxParty);

console.log(party);

function battle(){

    let battlePoke = prompt("Selecciona al pokemon que quieras usar");
    foundPoke = party.find((pk)=> pk.pokemonNombre == battlePoke);
    console.log(foundPoke);

    let enemylevel = Math.floor(Math.random()*(5-1)+1);
    let pokemonLevel = foundPoke.nivel
    
    let chancetowin = 0.5;

    console.log(pokemonLevel);

    if(enemylevel > pokemonLevel){
        console.log("Perdiste");
    } else{
        console.log("Ganaste");
    }
}

function deleteP(){
    let deletePok = prompt("Selecciona a quien quieres eliminar");
    foundPoke = party.find((pk)=> pk.pokemonNombre == battlePoke);
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
    pokemonBattleling = party.nivel;
    while(pokemonBattleling <= nivelActual){
        hp = party.hp
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
