module.exports = {
  name: "test",
  description:"testing for online", 
  execute(message, args) {
        var fs = require("fs");
        var file = fs.readFileSync("./test.txt", {"encoding": "utf-8"});
        message.channel.send({embed: {color: 3444703, description:(file)}});
    }
}