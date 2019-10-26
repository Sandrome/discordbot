const Discord = require('discord.js');
const bot = new Discord.Client();
const request = require('request');

bot.on('ready', function() {
    console.log(`Logged in as Sreyas!`);
});

bot.on('message', msg => {
    if (msg.content === 'ping') {
       //msg.reply('pong');
       msg.channel.send('Hello Pinged');
       }
    else if(msg.content.substring(0, 1) == '!') {
            var args = msg.content.substring(1).split(' ');
            var cmd = args[0];
            var data = args[1];
            var data_encoded = encodeURIComponent(data);
            //msg.channel.send(cmd);

        switch(cmd) {
            case 'level':
                    request(url, function (err, response, body) {
                      let url = `https://r6tab.com/api/search.php?platform=uplay&search=${data_encoded}`
                        if(err){
                            msg.channel.send('Error Retype');
                        } else {
                          let player = JSON.parse(body)
                          if(player.results == undefined){
                            msg.channel.send('It is Undefined');
                          } else {
                            let playerText = `It's ${player.results[0].p_name}`;
                            msg.channel.send(playerText);
                            //res.json(player);
                          }
                        }
                      });
                msg.channel.send(data);
            break;
         }
     }
});

bot.login(process.env.BOT_TOKEN,3000);