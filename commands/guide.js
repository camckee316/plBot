module.exports = {
    name: 'guide',
    description: 'provides some helpful links to guide you through pokemonlegends',
    execute(message, args) {
        var fs = require("fs");
        var file = fs.readFileSync("./guide.txt", {"encoding": "utf-8"});
        message.channel.send({embed: {color: 3444703, description:(file)}});
    }
}