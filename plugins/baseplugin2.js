module.exports = function(client,args) {

  client.on('ready', ()=>{
	  console.log(args[0]+ client.user.username + args[1]);
  });
}