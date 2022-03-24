module.exports = {
    name: 'tour',
    description: 'provides information on tournaments, such as location prizes and start time',
    execute(message, args) {
        var tour = require('../db/tourney.js');//tourey
        var tourney = message.content.toString().toLowerCase();
			tourney = tourney.substring(6);
			for (var i=0;i<tour.length;i++){
				if(tourney == tour[i]._league.toLowerCase()){
					var text = "League: **" +tour[i]._league+ "**\n\n";
					text += "Location: **" +tour[i]._loc+ "**\n\n";
					text += "Level: **" +tour[i]._lvl+ "**\n\n";
					text += "Prize: **" +tour[i]._prize+ "**\n\n";
          text += "Starts: **"+tour[i]._info+ "**\n\n";
					message.channel.send({embed:{color: 3447003, description:text}});
					//break;
				}
				else if (i === tourney.length -1)
							message.channel.send({embed:{ color: 3447003, description:"The tourneys are Starters, Intermediate or Inter, Advance or Adv, Expert and Masters, if you feel this is an error check the spelling and try again"}}); 
			}
		}
    }
