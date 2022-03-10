require("http").createServer((_, res) => res.end("Alive!")).listen(8080);
const fs = require('fs');
const Discord = require('discord.js');
const {prefix} = require('./config.json');
//require('dotenv').config(); //not need for home server 

const client = new Discord.Client();
client.commands = new Discord.Collection();


const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    //set a new item in the collection 
    //with the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Ready');
});

client.on('message', message => {
    if (message.content.startsWith('[mid]')) {
        var userInput = message.content.toString('[mid]');
        var text = userInput.slice(5,-6);
        var embed = text;
            message.channel.send({embed:{ color: 0x14b30e,description:"https://www.pokemongods.com/game/monster/" +text + "\n\n**You must be logged into game to view**", image:embed}})
      }
    else if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;
    
    const command = client.commands.get(commandName);

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command');
   
    }
});

//client.login(process.env.BOT_TOKEN);
//client.login(token);
const mySecret = process.env['Token'];
//console.log(mySecret);
client.login(mySecret);