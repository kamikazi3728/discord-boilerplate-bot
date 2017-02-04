const Discord = require('discord.js');
const client = new Discord.Client();
client.setMaxListeners(41)
const config = require('./config.json'); // require configuration file

for (var p=0; p<config['plugins'].length; p++){//require all plugin scripts with client and configuration arguments
	require('./plugins/' + config['plugins'][p].file)(client,config['plugins'][p].arguments.split(','))
}

client.login(config.settings.token);