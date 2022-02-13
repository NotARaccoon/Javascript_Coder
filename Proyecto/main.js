const ingresoEntrenador = document.querySelector(".btn-entrenador");
const nombreEntrenador = document.getElementById("nombreEntrenador");
const partySetup = document.querySelector(".party-setup");
const contenedorEntrenador = document.getElementById("ingreso-entrenador");
const errorEntrenador = document.getElementById("error-entrenador");
const checkbox = document.getElementById("checkbox");
const displayNombreEntrenador = document.getElementById("name-trainer");
const nombrePokemon = document.getElementById("nombrePokemon");
const elementoPokemon = document.getElementById("elementoPokemon");
const btnAgregarParty = document.getElementById("agregarPokemon");
const containerAgregar = document.getElementById("container-agregar");

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

function addPokemon(){
    let pokemonNombre = nombrePokemon.value;
    let pokemonTipo = elementoPokemon.value;
    let pokemonimg;

    if(element.includes(pokemonTipo)){
        let nivel = 1;
        let hp = Math.floor(Math.random()* (24 - 19)+19);
        switch (pokemonTipo){
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
        console.log(pokemonNombre);
        console.log(party.pokemonTipo);
        console.log(party.length);
    } else{
        alert("ESte elemento no existe");
        return;
    }
}

 /*
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
    
} while (party.length != maxParty);*/

//console.log(party.pokemonNombre);

//displayParty();

function saveTrainer(eValue){
    let tname = nombreEntrenador.value;

    if(tname == ""){
        errorEntrenador.innerText="Debe seleccionar un nombre"
        return;
    } else{
        if(eValue === "sessionStorage"){
            sessionStorage.setItem('Entrenador',JSON.stringify(tname));
        }

        if(eValue === "localStorage"){
            localStorage.setItem('Entrenador',JSON.stringify(tname));
        }
    }
    return tname;
}

function displayTrainer(){
    displayNombreEntrenador.innerText = nombreEntrenador.value;
    contenedorEntrenador.remove();
}

ingresoEntrenador.addEventListener('click',()=>{
    if(checkbox.checked){
        saveTrainer('localStorage');
    } else{
        saveTrainer('sessionStorage');
    }

    displayTrainer();
})

btnAgregarParty.addEventListener('click',()=>{
    addPokemon();
})

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

//      LISTENERS






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
