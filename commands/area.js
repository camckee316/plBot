module.exports = {
    name:'area', 
    description: 'looks for and area in the game and give you a list of pokemon found on that map',
    execute(message, args) {
        var area = require('../db/area.js');//pokeFind
        var pokeFind = message.content.toString().toLowerCase();
			pokeFind = pokeFind.substring(6);
			for(var i=0;i<area.length;i++){
				if(pokeFind == area[i]._name.toLowerCase()){
					var text = "**" + area[i]._name + "**\n\n";
					text +="**" +area[i]._pokeFound + "**\n\n";
					text +=  "Rarity: **" +area[i]._rare + "**";
					message.channel.send({embed:{color: 0x6a5b8a, description:text}});
					break;
				}
				else if (i === area.length -1)
					message.channel.send({embed:{ color: 0x6a5b8a, description:"The area you are looking for either contains no pokemon, or does not exist. Check your spelling and try again"}});
			}
		}
    }
