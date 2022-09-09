import cancelBtnImage from './cancel.png';
import displayData from './module/displayComments.js';
const cards = document.body.querySelector('.cards');
const popup = document.createElement('div');
popup.className = 'popup';

cards.addEventListener('click', (e) => {
  if (e.target && e.target.id === 'cancelBtn') {
    popup.style.display = 'none';
    document.body.style.overflowY = 'scroll';
  }
});
const detail = (url,dataid) => {
  fetch(url).then((response) => response.json())
    .then((data) => {
      let pokeName = data.name;
      pokeName = pokeName[0].toUpperCase() + pokeName.slice(1);
      let typeOfPoke = ''; let i = 1;
      const n = data.types.length;
      data.types.forEach((element) => {
        if (n === i) typeOfPoke += element.type.name;
        else typeOfPoke += `${element.type.name}, `;
        i += 1;
      });

      const popupCode = ` 
    <img id="cancelBtn" src=${cancelBtnImage} alt="cancel popup image">
    <img id="pokemonImage" src="${data.sprites.other['official-artwork'].front_default}" alt="Pokemon image">
    <h1>${pokeName}</h1>
    <div class="power">
        <p>HP: ${data.base_experience}</p>
        <p>Types: ${typeOfPoke}</p>
    </div>
    <div class="dimension">
        <p>Weight: ${data.weight}</p>
        <p>Height: ${data.height}</p>
    </div>
    <div class="comments" data-id=${dataid}>
    <h1 class="comment-h1">Comments (<span class="comments-count"></span>)</h1>
    <table>
      <tbody class="comment-body">
      </tbody>
    </table>
    <div class="popup"></div>
    <form class="form">
      <label for="name"></label>
      <input type="text" class="name" placeholder="your name">
      <label for="insights"></label>
      <input type="text" class="insights" placeholder="your insights">
      <button type="submit" class="formButton">Comment</button>
    </form>
  </div>
`;
      displayData(dataid);
      popup.innerHTML = popupCode;
      popup.style.display = 'flex';
      cards.appendChild(popup);
      document.body.style.overflowY = 'hidden';
    })
    .catch((err) => {
      throw ("Couldn't fetch Pokemons details ", err);
    });
};
export default detail;