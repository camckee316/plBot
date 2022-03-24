module.exports = {
    name: 'evtrain',
    description: 'provide a list of pokemon to faint in order to ev train your pokemon',
    execute(message, args) {
        var train = require('../db/train.js');//pokeTrain
        var pokeTrain = message.content.toString().toLowerCase();
        pokeTrain = pokeTrain.substring(9);
        for(var i=0; i<train.length; i++) {
            if(pokeTrain == train[i]._stat.toLowerCase()) {
                var text = "Training\n\n";
                text += "Ev: **" +train[i]._stat+ "**\n\n";
                text += "Pokemon: **" +train[i]._poke+ "**\n\n";
                message.channel.send({embed:{color: 0xfbff00, description:text}});
                break;
            }
            else if(i === train.length -1)
                 message.channel.send({embed:{ color: 0xfbff00, description:'The stat you are looking for is not listed, if you feel this is an error check your spelling and try again.'}});
            }
        }
    }
