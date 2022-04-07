
// Run dotenv
require('dotenv').config();

const {Intents, Client} = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    console.log("msg", msg);
    if (msg.content === 'ping') {
        msg.reply('<@931580130114011136> <@&959549727756677133> <@&960878105046691852> <@&961335781912354819> <@&961520126354653205>  pong');
    }
});

client.login(process.env.DISCORD_TOKEN);
