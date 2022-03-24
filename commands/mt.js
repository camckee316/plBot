module.exports = {
    name: 'mt',
    description: 'provides information on move tutors and location of them',
    execute(message, args) {
        var moveTutor = require('../db/moveTutor.js');//tutor
        var tutor = message.content.toString().toLowerCase();
			tutor = tutor.substring(4);
			for(var i=0;i<moveTutor.length;i++){
				if(tutor == moveTutor[i]._mtType.toLowerCase()){
					var text = "Type: " +"**" + moveTutor[i]._mtType + "**\n\n";
					text += "Location of MoveTutor: " +"**"+moveTutor[i]._mtLoc + "**\n\n";
					text += "Requirements: " +"**"+moveTutor[i]._mtReq + "**\n\n";
					text += "Moves Taught: " +"**"+moveTutor[i]._mtMove + "**\n\n";
					text += "Extra information: " +"**"+moveTutor[i]._mtNotes + "**\n\n";
					message.channel.send({embed:{color: 0xb30e9f, description:text}});
					break;
				}
				else if(i === moveTutor.length -1)
					message.channel.send({embed:{ color: 0xb30e9f, description:"The move tutor your looking is either not permanatly on the map, check your spelling and try again"}});
			}
    }
}