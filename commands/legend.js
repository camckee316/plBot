module.exports = {
    name: 'legend',
    description: 'provides a list of legendary pokemon',
    execute(message, args) {
        var fs = require("fs");
        var file = fs.readFileSync("./legend.txt", {"encoding": "utf-8"});
        message.channel.send({embed: {color: 3444703, description:(file)}});
    }
}