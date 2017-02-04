module.exports = function(client,args) {

  client.on('ready', ()=>{
	console.log('[' + new Date().toISOString() + '] Connected!');
	
	// Set the presence status.
	client.user.setStatus('online');
	
	// Get a list of channels.
	var channelsOrdered = client.channels.array().slice(0);
	
	// Evaluate only voice channels.
	channelsOrdered = channelsOrdered.filter(function(channel) {
		return channel.type == 'voice' && typeof channel.position !== 'undefined';
	});
	
	// Sort channels by their current position.
	channelsOrdered = channelsOrdered.sort(function(channelA, channelB) {
		return channelA.position - channelB.position;
	});
	
	// Re-sort channels to support auto-grouping and maximum voice quality.
	var currentPosition = 100;
	channelsOrdered.forEach(function(channel) {
		currentChannel = client.channels.get(channel.id);
		currentChannel.edit({bitrate: 96000, position: currentPosition})
			.then(editedChannel => {
				console.log('[' + new Date().toISOString() + '] Set ' + editedChannel.type + ' channel "' + editedChannel.name + '" (' + editedChannel.id + ') position to ' + editedChannel.position + ' with ' + editedChannel.bitrate / 1000 + 'kbps bitrate')
			})
			.catch(console.error);
		currentPosition += 100;
	});
  });
}