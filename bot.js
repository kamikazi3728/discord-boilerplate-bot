const Discord = require('discord.js');
const client = new Discord.Client();

// Connect and perform routine maintenance.
client.on('ready', () => {
	console.log('[' + new Date().toISOString() + '] Connected!');
	
	// Set the presence status.
	client.user.setStatus('online');
});

client.login('');
