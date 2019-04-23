const Discord = require('discord.js');

module.exports.run = (client, message, args) => {

    if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) return message.channel.send('Vous n\'avez pas la permission !');
    
    var args = message.content.split(' ').slice(1).join(' ');

    var embed = new Discord.RichEmbed()
    .setTitle("__Message entrant de l'Osmonium :__", client.user.avatarURL)
    .addField(`Message venant de ${message.author.username}`, args)
    .setColor("#ff5500")
    .setThumbnail("https://images-ext-1.discordapp.net/external/hbUmbnFoHtLrvlYD70e29VSYvhtZKj0aR6asR6uptXk/https/cdn.discordapp.com/attachments/529378437656215601/533428601589202965/RadioGifCWRP.gif")

    message.channel.send(embed);
};

module.exports.help = {
    name: 'radio'
};
