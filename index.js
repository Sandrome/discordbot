const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', function() {
    console.log(`Logged in as Sreyas!`);
});

bot.on('message', msg => {
    if (msg.content === 'ping') {
       msg.reply('pong');
       }
       /*if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        var data = args[1];

        switch(cmd) {
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'+data
                });
            break;
         }
     }*/
});

bot.on('message', msg => {
    if(msg.content.substring(0, 1) === '!'){
        var args = msg.substring(1).split(' ');
        var cmd = args[0];
        var data = args[1];

        switch(cmd) {
            case 'level':
                msg.reply('level');
            break;
        }
    }
});

bot.login(process.env.BOT_TOKEN);