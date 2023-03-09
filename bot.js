// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');

const client = new Discord.Client({
    intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES]
});

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    // console.log(message)
    if (message.content === 'ping') {
        message.reply('<@931580130114011136> <@&959549727756677133> <@&960878105046691852> <@&961335781912354819> <@&961520126354653205>  pong');
    } else if (message.content === '/start') {
        message.reply('start message received');
    } else if (message.content === '/help') {
        message.reply('help message received');
    }
});

client.login(process.env.DISCORD_TOKEN);
