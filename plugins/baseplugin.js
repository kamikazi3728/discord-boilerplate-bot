module.exports = function(client,args) {

	if(args[0]!='STOP'){
		client.on('message', (msg)=>{
			if (msg.content.split(" ")[0] == args[0]) {
				msg.channel.send(msg.content.split(args[0]+" ")[1]);
			}
		});
	}
}