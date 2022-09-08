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
    likeGet('0YSAdjw9FalqCv0vGDYS');
    const targetId = (e.target.id).split('likeId').slice(1);
    const targetHeart = document.querySelector(`#like-count${targetId}`).innerHTML.split(' ');
    document.querySelector(`#like-count${targetId}`).innerHTML = `${(Number(targetHeart[0])) + 1} Likes`;
  }
});

pokemons('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0').then((response) => {
  itemNumbers.innerHTML = `Pokemons(${response})`;
});

document.body.addEventListener('submit', (e) => {
  if (e.target && e.target.className === 'form') {
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
  }
})
