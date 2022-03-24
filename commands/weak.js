module.exports = {
    name: 'weak',
    description: 'get the pokemon weakness resistances and immunities',
    execute(message, args) {
        var weakness = require('../db/weakness.js');//wkns
        var wkns = message.content.toString().toLowerCase();
        wkns = wkns.substring(6);
        for(var i=0; i<weakness.length; i++) {
            if(wkns == weakness[i]._pokeName.toLowerCase()) {
                var text = "Your selection:\n\n";
						text += "Pokemon: **"+weakness[i]._pokeName+"**\n\n";
						text += "Weakness: **"+weakness[i]._weak+"**\n\n";
						text += "Resistance: **"+weakness[i]._resis+"**\n\n";
						text += "Immunities: **"+weakness[i]._imm+"**\n";
						message.channel.send({embed:{color: 3447003, description:text}});
						break;
					}
					else if (i === weakness.length -1)
						message.channel.send({embed:{ color: 3447003, description:"The Pokemon you are looking for is not listed, if you feel this is an error check your spelling and try again."}});
				}

            }
        }