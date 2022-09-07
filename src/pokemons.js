import unlike from './unlike.png';
import detail from './pokemonDetail';

const cards=document.body.querySelector('.cards');
cards.addEventListener('click',(e)=>{
    if(e.target && e.target.className== 'pokemon-img'){
        const url= `https://pokeapi.co/api/v2/pokemon/${e.target.id}`;
          detail(url);
     }
 });
const pokemons=async ()=>{
fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0').then(response => response.json())
.then(data => data.results)
.then(obj => Object.entries(obj))
.then(arr =>{
    arr.forEach(element => {
        const id=Number(element[0]);
        let pokemonName=element[1].name;
        pokemonName= pokemonName[0].toUpperCase() + pokemonName.slice(1);
        fetch(element[1].url).then(response =>response.json())
        .then(data => data.sprites.other["official-artwork"].front_default)
        .then(src => {
            const card=`<div class="card">
            <img class="pokemon-img" id=${id+1} src="${src}" alt="Pokemon1">
            <div class="card-title">
            <h2>${pokemonName}</h2>
            <img src=${unlike} alt="heart icon for like">
            </div> 
            <p class="like-count">0 Likes</p>
            <div class="buttons">
                <button type="button" class="comment">Comments</button>
                <button type="button" class="reservations">Reservations</button>
            </div>
            
        </div>`;
        cards.innerHTML += card;
        }) 
       
    })
    
})
.catch(err =>{
    console.log("Couldn't fetch pokemons",err)
})

}

export default pokemons;