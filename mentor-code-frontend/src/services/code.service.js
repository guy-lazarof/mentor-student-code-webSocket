import { storageService } from './async-storage.service.js';
import { utilService } from './util.service.js';

const STORAGE_KEY = 'codeDB'

export const codeService = {
  query,
  get,

}


_createCodes()

function query() {
  return storageService.query(STORAGE_KEY)
}


function get(codeId) {
  return storageService.get(STORAGE_KEY, codeId)
}

function _createCodes() {
  let codes = utilService.loadFromStorage(STORAGE_KEY)
  if (!codes) {
    codes = [
      {
        _id: '101',
        title: 'For loop',
        description: 'Loops are handy, if you want to run the same code over and over again, each time with a different value.',
        example:
          `for (let i = 0; i < Array.length; i++) {
                  sum += Array[i]}`,
        challenge: 'Log to console the numbers 0-9',
        code: '',
      },
      {
        _id: '102',
        title: 'filter method ',
        description: 'The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.',
        example:
          `const salad = ['🍅', '🥦', '🍄', '🥦', '🥦', '🌽', '🥦', '🥕', '🥑'];
          const result = salad.filter(vegetable => vegetable !== '🥦');
          //result = ['🍅', '🍄', '🌽', '🥕', '🥑']`,
        challenge: `Filter the name "Muki" from the array: [Shuki, Muki, Puki, Shuki, Puki, Puki, Muki, Shuki].`,
        code: '',
      },
      {
        _id: '103',
        title: 'Some method',
        description: 'The some() method tests whether at least one element in the array passes the test implemented by the provided function',
        example:
          `const ages = [3, 10, 18, 20];
          ages.some(checkAdult);
          
          function checkAdult(age) {
            return age > 18; 
            //(return true)`,
        challenge: `Check if there is a bigger number than 30: [1, 5, 23, 20, 40, 15, 6] `,
        code: '',
      },
      {
        _id: '104',
        title: 'Every method',
        description: 'The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.',
        example:
          `const ages = [32, 33, 16, 40];
          ages.every(checkAge)
          
          function checkAge(age) {
            return age > 18;
            //(return false)`,
        challenge: `Check if there is all the numbers bigger than 2: [5, 23, 20, 40, 1, 15, 6] `,
        code: '',
      },
      {
        _id: '105',
        title: 'Push method',
        description: 'The push() method adds one or more elements to the end of an array and returns the new length of the array.',
        example:
          `const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
          salad.push('🥜');
            //(return ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑", "🥜"])`,
        challenge: `Add the number 50 to the end of the array: [5, 32, 30, 13, 1, 15, 4] `,
        code: '',
      },
      {
        _id: '106',
        title: 'Pop method',
        description: 'The pop() method removes the last element from an array and returns that element. This method changes the length of the array.',
        example:
          `const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
          salad.pop();
            //(return ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕'])`,
        challenge: `Remove the last number at the end of the array: [7, 32, 20, 41, 18, 25, 83] `,
        code: '',
      }
    ]
    utilService.saveToStorage(STORAGE_KEY, codes)
  }
}
