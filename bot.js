const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(NDU0OTQxMzAyNjMxNTYzMjc0.Df1nEQ.b1R7B0daZ29ySOnj-9J_wCoChd4);
