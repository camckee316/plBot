module.exports = {
    name: 'breed',
    description: 'provides a list of compatable pokemon to breed with',
    execute(message, args) {
        var breed = require('../db/breed.js');//mate
        var mate = message.content.toString().toLowerCase();
			mate = mate.substring(7);
			for (var i=0;i<breed.length;i++) {
				if (mate == breed[i]._pokeName.toLowerCase()) {
					var text = "Your Pokemon: **" + breed[i]._pokeName + "**\n\n";
					text += "Breeds with: **" + breed[i]._breed + "**";
          text += "  **" +breed[i]._also +"**"
					message.channel.send({embed:{color: 0x0eb31c, description:text}});
					break;
				}
				else if (i === breed.length -1)
					message.channel.send({embed:{ color: 0x0eb31c, description:"The Pokemon you are looking for is not listed, if you feel this is an error check the spelling and try again:"}})
    }
}}