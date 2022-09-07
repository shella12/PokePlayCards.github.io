import './style.css';
import addComment1 from './module/addComment.js';

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