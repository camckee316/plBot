module.exports = {
    name: 'event',
    description: 'gives information on upcoming events',
    execute(message, args) {
        var fs = require("fs");
        var file = fs.readFileSync("./event.txt", {"encoding": "utf-8"});
        message.channel.send({embed: {color: 3444703, description:(file)}});
    }
}