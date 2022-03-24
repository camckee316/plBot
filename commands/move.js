module.exports = {
    name: 'move',
    description: 'provides information about the move',
    execute(message, args) {
        var movelist = require('../db/movelist.js');//action
        var action = message.content.toString().toLowerCase();
				action =action.substring(6);
				for (var i=0;i<movelist.length;i++) {
					if ( action == movelist[i]._move.toLowerCase()) {
						var text = "Move Selected:  **" + movelist[i]._move + "**\n\n";
						text += "Description of move:  **" + movelist[i]._desc + "**\n\n";
						text += "Category: **" + movelist[i]._type + "**";
						message.channel.send({embed:{color: 3447003, description:text}});
						break;
									
					}
					else if (i === movelist.length -1)
						message.channel.send({embed:{ color: 3447003, description:"The Move you are looking for is not listed, if you feel this is an error check the spelling and try again"}});
				}
        
		}
    }
