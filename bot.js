const Discord = require('discord.js');
const client = new Discord.Client();
var cfgfile = require('./config.json'); // require configuration file
var config = JSON.parse(cfgfile); //parse configuration file
//for extra parsing info: http://stackoverflow.com/questions/8449659/parsing-json-array-nodejs

// Connect and perform routine maintenance.
client.on('ready', () => {
	console.log('[' + new Date().toISOString() + '] Connected!');
	
	// Set the presence status.
	client.user.setStatus('online');
});

client.login(config.token);