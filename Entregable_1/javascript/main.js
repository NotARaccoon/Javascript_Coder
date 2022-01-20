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

}
