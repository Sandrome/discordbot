const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log(`Logged in as Sreyas!`);
});

bot.on('message', function(msg) {
    if (msg.content === 'ping') {
       msg.reply('pong');
       }
       if (msg.substring(0, 1) == '!') {
        var args = msg.substring(1).split(' ');
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
     }
});

bot.login(process.env.BOT_TOKEN);