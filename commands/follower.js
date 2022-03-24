module.exports = {
    name: 'follower',
    description: 'lists the pokemon that can follow you in game',
    execute(message, args) {
        var fs = require("fs");
        var file = fs.readFileSync("./follower.txt", {"encoding": "utf-8"});
        message.channel.send({embed: {color: 3444703, description:(file)}});
    }
}