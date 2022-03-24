module.exports = {
    name: 'p',
    description: 'get pokemon information and displays it',
    execute(message, args) {
            var pokemon = require('../db/pokemon.js');//pkmn
            var pkmn = message.content.toString().toLowerCase();
            pkmn = pkmn.substring(3);
            for(var i=0;i<pokemon.length;i++){
                    if(pkmn == pokemon[i]._engName.toLowerCase()){
                        var text = "**No. " +  pokemon[i]._nb +   "**\n\n";
                        text += "**"+ pokemon[i]._engName+  "**\n\n";//change \n\n to \t\t
                        text += "**Rarity:**  " + pokemon[i]._rare + "\n\n";
                        text += "**Evolution Chart:** "+pokemon[i]._evo+" \n\n";
                        text += "**Location:** "+pokemon[i]._loc+" \n\n";
                        text += "**Ev Yield:** "+pokemon[i]._ev+" \n\n";
                        text += "**Ability:** "+pokemon[i]._ability+"\n\n";
                        text += "**__Base Stats__**\n";
                        text += "**HP:** "+pokemon[i]._baseStats._hp+"\t\t";
                        text += "**Atk:** "+pokemon[i]._baseStats._atk+"\t\t";
                        text += "**Def:** "+pokemon[i]._baseStats._def+"\t\t";
                        text += "**S. Atk:** "+pokemon[i]._baseStats._sAtk+"\t\t";
                        text += "**S. Def:** "+pokemon[i]._baseStats._sDef+"\t\t";
                        text += "**Spd:** "+pokemon[i]._baseStats._spd+"\t\t";
                        text += "**Total:** "+pokemon[i]._baseStats._total+"\n\n";
                        text += "**Growth Rate:** "+pokemon[i]._gr + " \n\n";
                        text += "**Type:** "+pokemon[i]._ty + "\n"  
                        message.channel.send({embed:{color: 0x00ff15, description:text}});
              break;          
                    }
                    else if (i === pokemon.length -1)
                            message.channel.send({embed:{ color: 0x00ff15, description:"The Pokemon you are looking for is not listed, if you feel this is an error check your spelling and try again."}});
                }
        }
    }
