/**
 * @jest-environment jsdom
 */
import pokemons from '../__mock__/pokemons.js';

describe('Test number of items on Home Page', () => {
  test('Count Home Page items with limit 30', () => {
    pokemons('https://pokeapi.co/api/v2/pokemon?limit=30&offset=0').then((response) => {
      expect(response).toBe(30);
    });
  });
  test('Count Home Page items with limit 20', () => {
    pokemons('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0').then((response) => {
      expect(response).toBe(20);
    });
  });
  test('False Count Home Page items with limit 20 and expect 40', () => {
    pokemons('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0').then((response) => {
      expect(response).toBe(40);
    });
  });
});