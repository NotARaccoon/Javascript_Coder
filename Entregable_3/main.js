let nombreJugador = prompt("Ingresa tu nombre de entrenador");

class Party {
    constructor(pokemonNombre,pokemonTipo,nivel){
        this.pokemonNombre = pokemonNombre;
        this.pokemonTipo = pokemonTipo;
        this.nivel = parseInt(nivel);
    }
}

let party = [];
let maxParty = 6
let pokeNum = 1;

do{
    let pokemonNombre = prompt("Ingresa el nombre de tu pokemon numero "+ pokeNum);
    let pokemonTipo = prompt("Ingresa su tipo");
    let nivel = 1;
    const pokemon = new Party(pokemonNombre,pokemonTipo,nivel);
    party.push(pokemon);
    pokeNum++;
} while (party.length != maxParty);

console.log(party);


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
