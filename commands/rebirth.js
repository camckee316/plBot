module.exports = {
    name: 'rebirth',
    description:'give the pokemon rebirthing place for legendary pokemon', 
    execute(message, args) {
        var rebirth = require('../db/rebirth.js');//birth
        var birth = message.content.toString().toLowerCase();
        birth = birth.substring(9);
        for(var i=0; i<rebirth.length; i++) {
            if (birth == rebirth[i]._pokeName.toLowerCase()) {
                var text = "Legendary: **" +rebirth[i]._pokeName+ "**\n\n";
                text += "Rebirth Location: **" +rebirth[i]._loc+ "**\n"
                message.channel.send({embed:{color: 0xe14b3, description:text}});
                break;
            }
             else if (i === rebirth.length -1)
                 message.channel.send({embed:{ color: 0xe14b3, description:"The legendary pokemon you are looking for is not listed, if you feel this is an error check your spelling and try again,"}});
        }
    }
}