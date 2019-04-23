const Discord = require('discord.js');


module.exports.run = (client, message) => {

    let args = message.content.split(" ").slice(1);
    let setGame = args.join(" ");

    if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) return message.channel.send('Vous n\'avez pas la permission !'); 

    client.user.setActivity(setGame, {
        type: "STREAMING",
        url: "https://www.twitch.tv/chancesphere574"
    });
}

module.exports.help = {
    name: 'setgame'
};