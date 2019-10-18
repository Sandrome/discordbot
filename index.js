const Discord = require('discord.js');
const bot = new Discord.Client();
var token = process.env.BOT_TOKEN;
bot.login('NjM0MzAzNjMwNDUwNzUzNTU1.XamRVA.z9GvlN-ap6Dwn-j_FEY5faVftLM');

bot.on('ready', () => {
    console.log(`Logged in as Sreyas!`);
});

bot.on('message', message => {
    if (message.content === 'ping') {
       message.reply('pong');
       }
});