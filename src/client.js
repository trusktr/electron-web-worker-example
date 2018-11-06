const path = require('path')

console.log('make a worker: ', path.resolve(__dirname, 'worker.js'))

// this works:
// const worker = new Worker(path.resolve(__dirname, 'worker.js'))

// this doesn't work:
const fs = require('fs')
const source = fs.readFileSync(path.resolve(__dirname, 'worker.js'), 'utf8')
const sourceUrl = URL.createObjectURL(
	new Blob([source], { type: 'text/javascript' }),
)
const worker = new Worker(sourceUrl)
