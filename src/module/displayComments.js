const displayData = async (id) => {
  const itemId = id;
  const commentBody = document.querySelector('.comment-body');
  const pokemonApi = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/0YSAdjw9FalqCv0vGDYS/comments?item_id=${itemId}`;
  const response = await fetch(pokemonApi);
  if (response.ok) {
    const allComments = await response.json();
    document.querySelector('.comments-count').innerHTML = allComments.length;
    let stringText = '';
    allComments.forEach((el) => {
      stringText += `<td>${el.creation_date} ${el.username}: ${el.comment}</td>`;
    });
    commentBody.innerHTML = stringText;
    document.querySelector('.name').value = '';
    document.querySelector('.insights').value = '';
  }
};
export default displayData;