import displayData from './displayComments.js';

const addComment1 = async (commmentObj, newid) => {
  const getApiComment = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/0YSAdjw9FalqCv0vGDYS/comments/';
  await fetch(getApiComment, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commmentObj),
  });
  displayData(newid);
};

export default addComment1;