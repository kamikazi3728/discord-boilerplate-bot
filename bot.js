const Discord = require('discord.js');
const client = new Discord.Client();
var cfgfile = require('./config.json'); // require configuration file
var config = JSON.parse(cfgfile); //parse configuration file
var pluginList[];
for (var i=0; i<config['plugins'].length; i++){//import plugin list
	pluginlist.push([config['plugins'][i].name,config['plugins'][i].file,config['plugins'][i].arguments]);
}
//for extra parsing info: http://stackoverflow.com/questions/8449659/parsing-json-array-nodejs

// Connect
client.on('ready', () => {
	//start - set on ready functions for all plugins
	//end - set on ready functions for all plugins
});

client.login(config.settings.token);