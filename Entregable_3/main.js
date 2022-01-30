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
let maxParty = 6
let pokeNum = 1;

do{
    let pokemonNombre = prompt("Ingresa el nombre de tu pokemon numero "+ pokeNum);
    let pokemonTipo = prompt("Ingresa su tipo");
    let nivel = 1;
    let hp = Math.floor(Math.random()* (24 - 19)+19);
    const pokemon = new Party(pokemonNombre,pokemonTipo,nivel,hp);
    party.push(pokemon);
    pokeNum++;
} while (party.length != maxParty);

console.log(party);

/*function deleteP(){
    let battlePoke = prompt("Selecciona a quien quieres eliminar");
    let id;
    battlePoke = party.pokemonNombre;
    for(let i = 0; i>party.length;i++){
        if(party.length.id == battlePoke.length.id){
            delete party[id]
        }
    }
    delete party[pokemonNombre];
    console.log(party);
}*/

function increaseHP(pokemonBattleling){
    while(nivel <= nivelActual){
        hp = party.hp
        hp += Math.floor(Math.random()*(3 - 1)+1);
        nivel++;
    }
} 

function battle(){

    let battlePoke = prompt("Selecciona al pokemon que quieras usar");

    let correct = true;
    while(correct == false){
        if(battlePoke == party.pokemonNombre){

            let enemy;
            let nivelActual

            alert("Que la batalla comienze");
            alert("Viendo resultados...");

            battleWIN = Math.floor(Math.random()* (1 - 0)+0)

            if (battleWIN == 1){

                increaseHP(battlePoke);
                correct = true;
            } else{
                alert("Perdiste la batalla");
            }
        }
    }
}




  
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
