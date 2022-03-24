module.exports = {
    name: 'map',
    description: 'links to maps for pl',
    execute(message, args) {
        var fs = require("fs");
        var file = fs.readFileSync("./plmap.txt", {"encoding": "utf-8"});
        message.channel.send({embed: {color: 3444703, description:(file)}});
    }
}