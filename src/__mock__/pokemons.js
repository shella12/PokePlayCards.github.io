/**
 * @jest-environment jsdom
 */
let numberOfItems;
const fetch= require('node-fetch')
const pokemons = async (url) => {
    await fetch(url).then((response) => response.json())
      .then((data) => data.results)
      .then((obj) => Object.entries(obj))
      .then((arr) => {
        numberOfItems=arr.length;
        arr.forEach((element) => {
          const id = Number(element[0]);
          let pokemonName = element[1].name;
          pokemonName = pokemonName[0].toUpperCase() + pokemonName.slice(1);
         fetch(element[1].url).then((response) => response.json())
            .then((data) => data.sprites.other['official-artwork'].front_default)
            .then((src) => {
              
            });
        });
      })
      .catch((err) => {
        console.log("Couldn't fetch pokemons", err);
      });
      return numberOfItems;
  }
  
  export default pokemons;