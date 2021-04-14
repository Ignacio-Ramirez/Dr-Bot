//                                   //
// WELCOME TO THE DR.BOT DEVELOPMENT //
//                                   //

require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.TOKEN;

let prefix = '_';

client.once('ready', () => {
	console.log('Ready!');
});

client.login(token);

client.on('message', message => {
	console.log(message.content);


    
    if (message.content === '_hi') {
        message.channel.send('hello.');
    
    }if (message.content === '_help') {
        message.channel.send(
            '>>> \`\`\`yaml\n-Commands of Dr.Bot\`\`\`\n**Prefix** [ _ ] \n\n**Fun Commands** <:Denmo:757629613785612359>\n - hi\n - ||sex||\n - funaki\n\n **Server Commands** :notepad_spiral:\n - members\n\n**Utilities Commands** 📀 \n - my-info\n - my-avatar\n - roll\n - bot-server (The server of my developer) \n\n**Medical Asistance**<:Medical:819923098585399356>\n - Medic! (With out prefix) \n - medical-inventory or medical_inv\n\n**Secret Commands** :eyes:\n I wont tell you. '  );   
    }if (message.content === '_members') {
		message.channel.send('**Server name:** ' + message.guild.name + '\n**Total members:** ' + message.guild.memberCount);
   
    }if (message.content === `_my-info`) {
        message.channel.send(`**Username:** ${message.author.tag}\n**ID:** ${message.author.id}`);
    
    }if (message.content === '_my-avatar') {
        message.reply(message.author.displayAvatarURL());
    }if (message.content.toLowerCase().includes("_roll")) {
        var response = [Math.floor(Math.random() * ((100 - 1) + 1) + 1)];
    
       message.channel.send(response).then().catch(console.error);
    
    }if (message.content === '_sex') {
        message.channel.send('My program won\'t let me run that command <:Reglas:819901637983731713>.');   
    
    }if (message.content === '_funaki') {
        message.channel.send('https://tenor.com/view/funaki-funado-funa-funa3-gif-18802371');
    
    }if (message.content === 'help') {
        message.channel.send('May I help you, I\'m Doctor <:Bot:819901638340378654> ***Provides medical and psychological help***');

    }if (message.content === 'Medic!') {
        message.channel.send('what!');

    }if (message.content === '_use defibrillator') {
        message.channel.send ('CLEAR...')

        message.channel.send ('https://i1.wp.com/media.giphy.com/media/l2JeeaIkSFE0e6Wc0/giphy.gif?w=945&ssl=1')
    
    }if (message.content === '_I wont tell you.') {
        message.channel.send ('Nice <a:pepehype:811573595305672704>')
    
    }if (message.content === '_medical-inventory')  {
        message.channel.send('>>> \`\`\`diff\n-Medical Inventory\`\`\`\n  -Defibrillator\n\n ***To use*** \`\`_use <item name>\`\`')

    }if (message.content === '_medical-inv')  {
        message.channel.send('>>> \`\`\`diff\n-Medical Inventory\`\`\`\n  -Defibrillator\n\n ***To use*** \`\`_use <item name>\`\`')

    }if (message.content === '_bot-server')  {
        message.channel.send('So you want to see where my developer hides?')

        message.channel.send('https://discord.gg/UcaCNZq')
   

   
}});
    
    

   // Test push 
 // F5, node.js
