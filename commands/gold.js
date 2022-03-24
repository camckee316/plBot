module.exports = {
    name: 'gold',
    description: 'description of gold pokemon',
    execute(message, args) {
        message.channel.send('Increase Speed by 10%! Can only be purchased with tokens.');
    },
};