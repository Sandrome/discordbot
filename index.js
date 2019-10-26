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
            msg.channel.send(cmd + "demo");
            let player_url = `https://r6tab.com/api/search.php?platform=uplay&search=${data_encoded}`

        switch(cmd) {
            case 'stats:casual':
                    msg.channel.send(stats_casual(player_url));
                //msg.channel.send(data);
            break;
         }
     }
});

//Defined Functions
function stats_casual(player_url_f){
  request(player_url_f, function (err, response, body) {
    if(err){
        return 'Error Retype';
    } else {
      let player = JSON.parse(body);
      if(player.results == undefined){
        return 'It is Undefined';
      } else {
        let playerText = `Player ID: "${player.results[0].p_id}"`;
        return playerText;
        //res.json(player);
      }
    }
  });
}

bot.login(process.env.BOT_TOKEN,3000);