const {Client, Messsage, MessageEmbed } = require("discord.js");
//const {timeData} = require("../../embeds.js")

module.exports = { 
    name: "gold",
    description: "Gives information about shiny pokemon",

    run: async (client, message, args) => { 

        message.channel.send("Increase Speed by 10%! Can only be purchased with tokens. Tokens can be obtained by donation or FD (Friend Donation)");
    },
};