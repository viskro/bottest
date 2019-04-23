const Discord = require('discord.js');


module.exports.run = (client, message) => {

    //if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) return message.channel.send('Vous n\'avez pas la permission !'); 

    client.user.setActivity("surveiller le Vénator.", {
        type: "PLAYING"
    });
}

module.exports.help = {
    name: 'base'
};