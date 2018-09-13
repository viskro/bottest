const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Connexion avec succes !`);
  });

  var prefix = "*";

bot.login("pAXLM_hpbH80a1Ami8de1GN05u2QDpSz");

bot.on('message', message => {

    if(message.content === 'Bonjour'){
        message.channel.send("Salut :D")
        {
        console.log('Le bot a salue quelqu un');    
        }
    }});

    bot.on('message', message => {

        if(message.content === 'ping'){
            message.channel.send("pong")
            {
            console.log('ping pong envoye');
    }}});
    client.on('message' , message => {
        if (!message.guild) return;
        if (message.content.startsWith('!kick')) {
            const user = message.mentions.user.first();
            if (user) {
                const member = message.guild.member(user);
                if (member) {
                    member.kick('Optional reason that will display in the audit logs').then(() => {
                        message.reply(`${user.tag}`);
                    }).catch(err => {
                        message.reply('I was unable to kick the member');
                        console.error(err);
                    
            });
        } else {
            message.reply('Ce joueur n\'est pas sur le serveur !');
        }
    } else {
        message.reply('Tu n\'as pas mentionné la personne qu\'il faut kick !');
    }
}
    });
    client.on('message' , message => {
    if (!message.guild) return;
    if (message.content.starsWith('!ban')) {
        const user = message.mentions.user.first();
        if (user) {
            const member = message.guild.member(user);
            if (member) {
                member.ban({
                    reason: 'Il est méchant' ,
                }).then(() => {
                    message.reply(`${user.tag} a bien été ban ! `);
                }).catch(err => {
                    message.reply('I was unable to ban a member');
                    console.error(err);
                });
            } else {
                message.reply('Ce joueur n\'est pas dans le serveur !');
            }
        } else {
            message.reply('Tu n\as pas mentionné la personne qu\'il faut ban!');
        }
    }
});
