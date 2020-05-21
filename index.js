const Discord = require('discord.js');
const bot = new Discord.Client();
const request = require('request');

bot.on('ready', function() {
    console.log(`Logged in as Sreyas!`);
});

bot.on('message', msg => {
    if (msg.content === 'ping') {
       //msg.reply('pong');
       console.log('User typed ping and the response is given as pong! It is working');
       msg.channel.send('Hello Pinged');
       }
    else if(msg.content.substring(0, 1) == '!') {
            var args = msg.content.substring(1).split(' ');
            var cmd = args[0];
            var data = args[1];
            var data_encoded = encodeURIComponent(data);
            let player_url = `https://r6tab.com/api/search.php?platform=uplay&search=${data_encoded}`
            
        switch(cmd) {
            case 'casual:stats':
                    request(player_url, function (err, response, body) {
                        if(err){
                            msg.channel.send('Error Retype');
                        } else {
                          let player = JSON.parse(body);
                          if(player.results == undefined){
                            msg.channel.send('It is Undefined');
                          } else {
                            var playerText = `Player ID: ${player.results[0].p_id}`;
                            msg.channel.send(playerText);
                          }
                        }
                      });
            break;
            case 'ranked:stats':
                request(player_url, function (err, response, body) {
                  if(err){
                      msg.channel.send('Error Retype');
                  } else {
                    let player = JSON.parse(body);
                    if(player.results == undefined){
                      msg.channel.send('It is Undefined');
                    } else {
                      var playerid = `Ranked MMR: ${player.results[0].p_id}`;
                      msg.channel.send(playerid);
                      var data_encoded_ranked = encodeURIComponent(playerid);
                      let player_url_ranked = `https://r6tab.com/api/player.php?p_id=${data_encoded_ranked}`

                      request(player_url_ranked, function (err, response, body_ranked) {
                        if(err){
                            msg.channel.send('Error Retype inner request');
                        } else {
                          let player_ranked = JSON.parse(body_ranked);
                          if(player.results == undefined){
                            msg.channel.send('It is Undefined inside inner request');
                          } else {
                            var playerText = `Ranked Wins: ${player_ranked.matches[0].db_p_total_rankedwins}`;
                            msg.channel.send(playerText);
                          }
                        }
                      });
                    }
                  }
                });
            break;
         }
     }
});

bot.login(process.env.BOT_TOKEN,3000);
