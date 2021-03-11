require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.TOKEN;

client.once('ready', () => {
	console.log('Ready!');
});

client.login(token);