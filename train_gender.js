const brain = require('brain.js')
const fs = require('fs')
const papa = require('papaparse')

fs.readFile('./data/name_gender.csv', (err, result) => {
    if (err) console.error(err)

    const { data } = papa.parse(result.toString(), { header: true })
    const netData = data.filter((el, index) => el.name && el.gender && index % 20 === 0).map(el => {
        return {
            input: el.name,
            output: el.gender,
        }
    })

    const net = new brain.recurrent.LSTM()

    net.train(netData, {
        iterations: 500,
        log: true,
        logPeriod: 1,
    })

    const netConfig = net.toJSON()

    fs.writeFileSync('./gender_config.json', JSON.stringify(netConfig))
})
