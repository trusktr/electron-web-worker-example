const path = require('path')

console.log('make a worker: ', path.resolve(__dirname, 'worker.js'))

const worker = new Worker(path.resolve(__dirname, 'worker.js'))
