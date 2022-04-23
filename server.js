// initializing dotenv
require('dotenv').config();

// create a new discord client and assign it to client const
const { Client, Intents } = require('discord.js');

// the client reps the discord bot and the obj specifies the gateway intent of the bot
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

// When the client(bot) is connected and ready, log to console
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// login bot using the token
client.login(process.env.CLIENT_TOKEN);

// writing a simple bot command
const prefix = "!";

client.on('messageCreate', message => {
    if(message.author.bot) return;
    const commandBody = message.content.split(' ');
    const command = commandBody.shift().toLowerCase();

    if (command === 'ping') {
        message.reply('Pong!');
    }

});