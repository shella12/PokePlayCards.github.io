/**
 * @jest-environment jsdom
 */
import fetch from 'node-fetch';

let numberOfItems;

const pokemons = async (url) => {
  await fetch(url).then((response) => response.json())
    .then((data) => data.results)
    .then((obj) => Object.entries(obj))
    .then((arr) => {
      numberOfItems = arr.length;
      arr.forEach((element) => {
        const id = Number(element[0]);
        let pokemonName = element[1].name;
        pokemonName = pokemonName[0].toUpperCase() + pokemonName.slice(1);
        fetch(element[1].url).then((response) => response.json())
          .then((data) => data.sprites.other['official-artwork'].front_default)
          .then((src) => {
            const card = `<div class="card">
            <img class="pokemon-img" id=${id + 1} src="${src}" alt="Pokemon1">
            <div class="card-title">
            <h2>${pokemonName}</h2>
            </div> 
            <p class="like-count" id="like-count${id + 1}">0 Likes</p>
            <div class="buttons">
                <button type="button" class="comment">Comments</button>
                <button type="button" class="reservations">Reservations</button>
            </div>
            
        </div>`;
            cards.innerHTML += card;
          });
      });
    })
    .catch((err) => {
      throw ("Couldn't fetch pokemons", err);
    });
  return numberOfItems;
};

export default pokemons;