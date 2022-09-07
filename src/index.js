import './style.css';
import pokemons from './pokemons.js';
import likesPost, { likeGet } from './likes.js';

const itemNumbers = document.getElementById('udateItemNumbers');
itemNumbers.innerHTML = 'Pokemons(20)';
likeGet('0YSAdjw9FalqCv0vGDYS')
  .then((data) => {
    data.forEach((element) => {
      const targetItem = element[1].item_id.split('likeId').slice(1);
      document.querySelector(`#like-count${targetItem[0]}`).innerHTML = `${element[1].likes} Likes`;
    });
  });
document.body.addEventListener('click', (e) => {
  if (e.target && e.target.className === 'likeBtn') {
    likesPost('0YSAdjw9FalqCv0vGDYS', e.target);
    likeGet('0YSAdjw9FalqCv0vGDYS')
      .then((data) => {
        data.forEach((element) => {
          const targetItem = element[1].item_id.split('likeId').slice(1);
          document.querySelector(`#like-count${targetItem[0]}`).innerHTML = `${element[1].likes} Likes`;
        });
      });
  }
});
pokemons();