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
            let player_url = `https://r6tab.com/api/search.php?platform=uplay&search=${data_encoded}`

        switch(cmd) {
            case 'stats:casual':
                    request(player_url, function (err, response, body) {
                        if(err){
                            msg.channel.send('Error Retype');
                        } else {
                          let player = JSON.parse(body);
                          if(player.results == undefined){
                            msg.channel.send('It is Undefined');
                          } else {
                            var playerText = `Player ID: "${player.results[0].p_id}"`;
                            msg.channel.send(playerText);
                            //res.json(player);
                          }
                        }
                      });
            case 'stats:mmr':
                request(player_url, function (err, response, body) {
                  if(err){
                      msg.channel.send('Error Retype');
                  } else {
                    let player = JSON.parse(body);
                    if(player.results == undefined){
                      msg.channel.send('It is Undefined');
                    } else {
                      var playerText = `Player ID: "${player.results[0].p_currentmmr}"`;
                      msg.channel.send(playerText);
                      //res.json(player);
                    }
                  }
                });
            break;
         }
     }
});

//Defined Functions
function stats_casual(player_url_f){
  
}

bot.login(process.env.BOT_TOKEN,3000);