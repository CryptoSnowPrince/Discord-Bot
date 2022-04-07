
// Run dotenv
require('dotenv').config();

const {Intents, Client, Discord} = require('discord.js');
// const client = new Discord.Client();
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// client.on('interactionCreate', async interaction => {
//     console.log("passpass");
//     if (!interaction.isCommand()) return;

//     const { commandName } = interaction;

//     if (commandName === 'ping') {
//         await interaction.reply('Pong!');
//         console.log("pass");
//     } else if (commandName === 'server') {
//         // await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
//     } else if (commandName === 'user') {
//         await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
//     }
// });

// client.on('message', function (user, userID, channelID, message, evt) {
//     // Our bot needs to know if it will execute a command
//     // It will listen for messages that will start with `!`
//     if (message.substring(0, 1) == '!') {
//         var args = message.substring(1).split(' ');
//         var cmd = args[0];
//         args = args.splice(1);
//         switch (cmd) {
//             // !ping
//             case 'ping':
//                 bot.sendMessage({
//                     to: channelID,
//                     message: 'Pong!'
//                 });
//                 break;
//             // Just add any case commands if you want to..
//         }
//     }
// });

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('pong');
    }
});

client.login(process.env.DISCORD_TOKEN);