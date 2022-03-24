module.exports = {
    name: 'nature',
    description: 'shows an image of pokemon natures',
    execute(message, args) {
        var nature = "https://imgur.com/M6bmGq9.jpg";
        message.channel.send(nature);
    }
}