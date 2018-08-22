const brain = require('brain.js')

const config = require('./gender_config.json')

const net = new brain.recurrent.LSTM()

net.fromJSON(config)

const result = net.run('Mike')

console.log(result)
