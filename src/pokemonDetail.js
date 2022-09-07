import cancelBtnImage from './cancel.png';

const cards=document.body.querySelector('.cards');
const popup=document.createElement('div');
popup.className='popup'

cards.addEventListener('click',(e)=>{
    if(e.target && e.target.id== 'cancelBtn'){
        popup.style.display='none';
        document.body.style.overflowY='scroll';
     }
 });
const detail = (url)=>{
fetch(url).then(response => response.json())
.then(data =>{
    let pokeName=data.name;
        pokeName= pokeName[0].toUpperCase() + pokeName.slice(1);
     let typeOfPoke='',i=1;
        const n=data.types.length;
        data.types.forEach(element => {
        if(n===i)
        typeOfPoke += element.type.name;
        else
        typeOfPoke += element.type.name + ', ';
        i++;
    });

    const popupCode=` 
    <img id="cancelBtn" src=${cancelBtnImage} alt="cancel popup image">
    <img id="pokemonImage" src="${data.sprites.other["official-artwork"].front_default}" alt="Pokemon image">
    <h1>${pokeName}</h1>
    <div class="power">
        <p>HP: ${data.base_experience}</p>
        <p>Types: ${typeOfPoke}</p>
    </div>
    <div class="dimension">
        <p>Weight: ${data.weight}</p>
        <p>Height: ${data.height}</p>
    </div>
    <h2>Comments(2)</h2>
`
    popup.innerHTML = popupCode;
    popup.style.display='flex';
    cards.appendChild(popup);
    document.body.style.overflowY='hidden';
})
.catch(err => {
    console.log("Couldn't fetch Pokemons details ",err)
})
}
export default detail;