module.exports = {
    name: 'ability', 
    description: 'provides information about pokemon abilities',
    execute(message, args) {
        var ability = require('../db/ability.js')//skill
        var skill = message.content.toString().toLowerCase();
			skill = skill.substring(9);
			for (var i=0;i<ability.length;i++) {
				if (skill == ability[i]._ability.toLowerCase()) {
					var text = "Ability: **" + ability[i]._ability + "**\n\n";
					text += "Description: **" + ability[i]._desc + "**\n\n";
					text += "Pokemon with ability: **" + ability[i]._poke + "**\n\n";
					text += "Pokemon with ability as hidden: **" + ability[i]._hidden + "**";
					message.channel.send({embed:{color: 3447003, description:text}});
					break;
				}
				else if (i === ability.length -1)
					message.channel.send({embed:{ color: 3447003, description:"The Ability you are looking for is not listed, if you feel this is an error check the spelling and try again"}});
			}
    }
}