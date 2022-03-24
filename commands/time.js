module.exports = {
    name: 'time',
    description: 'time cycle for pl using server time',
    execute(message, args) {
        var fs = require("fs");
        var file = fs.readFileSync("./time.txt", {"encoding": "utf-8"});
        message.channel.send({embed: {color: 3444703, description:(file)}});
    }
}