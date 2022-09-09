/**
 * @jest-environment jsdom
 */
import fetch from 'node-fetch';
const displayData = async (id) => {
  const itemId = id;
  const pokemonApi = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/0YSAdjw9FalqCv0vGDYS/comments?item_id=${itemId}`;
  const response = await fetch(pokemonApi);
  if (response.ok) {
    const allComments = await response.json();
    
    let stringText = "";
    allComments.forEach((el) => {
      stringText += `<td>${el.creation_date} ${el.username}: ${el.comment}</td>`;
    });
    
  }
  return allComments.length;
};
module.exports = displayData;
