const _ = require('lodash')

const sleep = async time => new Promise(r => setTimeout(r, time))

~(async function main() {
	while (true) {
		console.log('lodash map exists:', typeof _.map)
		await sleep(1000)
	}
})()
