const brain = require('brain.js')

const config = require('./gender_config.json')

const net = new brain.recurrent.LSTM()

net.fromJSON(config)



const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Let\'s predict some names!')

function ask() {
    
    rl.question('Please enter a name: \n', (answer) => {
        
        const result = net.run(answer)
        console.log(result)
        
        ask();
    });
}

ask()
