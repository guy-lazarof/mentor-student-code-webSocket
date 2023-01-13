
const fs = require('fs')
const codes = require('../data/code.json')

module.exports = {
  query,
  get,
  // save,
}

function query() {
  return Promise.resolve(codes)
}

function get(codeId) {
  const code = codes.find(code => code._id === codeId)
  if (!code) return Promise.reject('cannot find code')
  else return Promise.resolve(code)
}

//when the students right

// function save(code) {
//     const codeToUpdate = codes.find(currCode => currCode._id === code._id)
//     if (!codeToUpdate) return Promise.reject('cannot find code')
//     codeToUpdate.isDone = true
//   return _writeCodesToFile().then(() => code)
// }

// function _writeCodesToFile() {
//   return new Promise((res, rej) => {
//     const data = JSON.stringify(codes, null, 2)
//     fs.writeFile('data/code.json', data, (err) => {
//       if (err) return rej(err)
//       res()
//     })
//   })
// }

