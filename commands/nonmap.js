module.exports = {
    name: 'nonmap',
    description: 'gives a list of non-mapped pokemon ',
    execute(message, args) {
        var fs = require("fs");
        var file = fs.readFileSync("./nonmap.txt", {"encoding": "utf-8"});
        message.channel.send({embed: {color: 3444703, description:(file)}});
    }
}