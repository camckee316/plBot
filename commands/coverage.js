module.exports = {
    name:"coverage",
    description:"provides coverage of a type or type combinations",
    execute(message, args) {
        var cover = require('../db/cover.js');//type
        var type = message.content.toString().toLowerCase();
        type = type.substring(10);
        for(var i=0;i<cover.length;i++){
            if (type == cover[i]._type.toLowerCase()){
                var text = "**Coverage For:  **" + "\n" + cover[i]._type + "\n\n";
                text += "**Super Effective:   **" + "\n" + cover[i]._super + "\n\n";
                text += "**Neutral:   **" + "\n" + cover[i]._neutral + "\n\n";
                text += "**Resists:   **" + "\n" + cover[i]._resists + "\n\n";
                text += "**Immunities:   **" + "\n" + cover[i]._imm + "\n\n"
                message.channel.send({embed: {color: 0x00ff15, description:text}});
        break;
            }
            else if (i === cover.length -1)
            message.channel.send({embed: {color: 0x00ff15, description:"The coverage type(s) you are looking for may be spelt wrong, check your spelling and try again."}});
        }
    }
}