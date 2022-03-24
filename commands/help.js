module.exports = {
    name: 'help',
    description: 'gives a list of commands for GT',
    execute(message, args) {
        var fs = require("fs");
        var file = fs.readFileSync("./help.txt", {"encoding": "utf-8"});
        message.channel.send({embed: {color: 3444703, description:(file)}});
    }
}