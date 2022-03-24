module.exports = {
    name: 'escape',
    description: 'list of pokemon that can flee from battle',
    execute(message, args) {
        var fs = require("fs");
        var file = fs.readFileSync("./escape.txt", {"encoding": "utf-8"});
        message.channel.send({embed: {color: 3444703, description:(file)}});
    }
}