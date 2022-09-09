/**
 * @jest-environment jsdom
 */
import fetch from 'node-fetch';

const displayData = async (id) => {
  const itemId = id;
  const pokemonApi = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/0YSAdjw9FalqCv0vGDYS/comments?item_id=${itemId}`;
  await fetch(pokemonApi);
  return allComments.length;
};
module.exports = displayData;
