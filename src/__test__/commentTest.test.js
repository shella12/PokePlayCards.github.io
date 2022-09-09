import displayData from './../__mock__/comment1.js';
describe('test for comment counter', () => {
  test('comment counter', () => {
    displayData(3).then(response => { 
      expect(response).toBe(6);
    }).catch(error => {
      throw error;
    })
  })
  test('comment counter', () => {
    displayData(1).then(response => { 
      expect(response).toBe(11);
    }).catch(error => {
      throw error;
    })
  })
  test('comment counter for false testing', () => {
    displayData(12).then(response => { 
      expect(response).toBe(3);
    }).catch(error => {
      throw error;
    })
  })
})
