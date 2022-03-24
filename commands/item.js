module.exports = {
    name:'item',
    description:'give information about items in pokemonlegends', 
    execute(message, args) {
        var items = require('../db/items.js')//pokeItem
        var pokeItem = message.content.toString().toLowerCase();
        pokeItem = pokeItem.substring(6);
        for(var i=0; i<items.length; i++) {
            if(pokeItem == items[i]._unit.toLowerCase()) {
                var text = "Item: **" +items[i]._unit+ "**\n\n";
                text += "Description: **" +items[i]._desc+ "**\n\n";
					text += "Sellable: **" +items[i]._sell+ "**\n\n";
					text += "Buyable: **" +items[i]._buy+ "**\n\n";
					text += "Price and Location: **" +items[i]._loc+ "**\n\n";
					text += "Other Information: **" +items[i]._other+ "**";
					message.channel.send({embed:{color: 0x00ffff, description:text}});
					break;
				}
				else if (i === items.length -1)
					 message.channel.send({embed:{ color: 0x00ffff, description:'The item you are looking is not listed, if you feel this is an error check your spelling and try again.'}});
            }
        }
    }
