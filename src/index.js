import './style.css';
import addComment1 from './module/addComment.js';
import pokemons from './pokemons.js';
import likesPost, { likeGet } from './likes.js';

const itemNumbers = document.getElementById('udateItemNumbers');
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
pokemons('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0').then(response => {
  itemNumbers.innerHTML = `Pokemons(${response})`;
});

// StudentB work
const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newid = document.querySelector('.comments').getAttribute('data-id');
  const names = document.querySelector('.name').value;
  const insights = document.querySelector('.insights').value;
  const commmentObj = {
    item_id: newid,
    username: names,
    comment: insights,
  };
  addComment1(commmentObj, newid);
});
