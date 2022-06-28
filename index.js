const { Client, Collection, Message, MessageEmbed } = require("discord.js");
const client = new Client({
    intents: 32767,
    partials: ['CHANNEL']
});
module.exports = client;


// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

// Initializing the project
require("./handler")(client);

// Embed file Imports
const {midData} = require("./embeds.js")
// Added Commands with customs (no prefix)
client.on("messageCreate", async (msg) => {

  if(msg.content.startsWith("[mid]")){
    let pokeID = msg.content.slice(5,-6) // Slices out [mid] & [/mid]
    msg.channel.send({ embeds: [midData(pokeID)] });
  }
  
});
client.login('token_goes_here'); 

