///////////////////////////////////////////////////
//                                               //
//  ██████╗░██████╗░░░░██████╗░░█████╗░████████╗ //
//  ██╔══██╗██╔══██╗░░░██╔══██╗██╔══██╗╚══██╔══╝ //
//  ██║░░██║██████╔╝░░░██████╦╝██║░░██║░░░██║░░░ //
//  ██║░░██║██╔══██╗░░░██╔══██╗██║░░██║░░░██║░░░ //
//  ██████╔╝██║░░██║██╗██████╦╝╚█████╔╝░░░██║░░░ //
//  ╚═════╝░╚═╝░░╚═╝╚═╝╚═════╝░░╚════╝░░░░╚═╝░░░ //
//                                               //
//       WELCOME TO THE DR.BOT DEVELOPMENT       //
///////////////////////////////////////////////////

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

    }if (message.content === '_hello') {
        message.channel.send('hello.');
    
    }if (message.content === '_help') {
        message.channel.send(
            '>>> \`\`\`yaml\n-Commands of Dr.Bot\`\`\`\n**Prefix** [ _ ] \n\n**Fun Commands** <:Denmo:757629613785612359>\n - hello\n - hi\n - ||sex||\n - funaki\n - russian-roulette (If you get 6 you loose)\n - rr (Also Russian roulette)\n - bot\n\n **Server Commands** :notepad_spiral:\n - members\n\n**Utilities Commands** 📀 \n - my-info\n - my-avatar\n - roll\n - bot-info \n\n**Medical Asistance**<:Medical:819923098585399356>\n - Medic! (With out prefix) \n - medical-inventory or medical_inv\n\n**Secret Commands** :eyes:\n I wont tell you. '  );   

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
    
    }if (message.content === '_medical-inv')  {
        message.channel.send('>>> \`\`\`diff\n-Medical Inventory\`\`\`\n-Defibrillator\n\n-Bandage\n\n **To use** \`\`_use <item name>\`\`')

    }if (message.content === '_medical-inventory')  {
        message.channel.send('>>> \`\`\`diff\n-Medical Inventory\`\`\`\n-Defibrillator\n\n-Bandage\n\n **To use** \`\`_use <item name>\`\`')

    }if (message.content === '_bot-info')  {
        message.channel.send('\`\`\`css\nName: "Dr-bot"\nVersion: 1.0.0\nDeveloper: "Ignacio Ramírez"\nGithub: "github.com/Ignacio-Ramirez/Dr-Bot"\nDiscord: "discord.gg/W4r32HSWsa"\`\`\`')

    }if (message.content === '_use bandage')

        message.channel.send('Let me help you with that. Where do you want me to use the bandages?')

        
    if (message.content.toLowerCase().includes("_rr")) {
            var response = [Math.floor(Math.random() * ((6 - 1) + 1) + 1)];
        
           message.channel.send(response).then().catch(console.error);
    
    }if (message.content.toLowerCase().includes("_russian-roulette")) {
        var response = [Math.floor(Math.random() * ((6 - 1) + 1) + 1)];
    
       message.channel.send(response).then().catch(console.error);
    
    }if (message.content === '_quiero-una-gotica-culona') {
    message.channel.send('Toma')

    message.channel.send('https://cdn.discordapp.com/attachments/823583026906398800/832229069666910208/joderquierounagoticaculona.mp4');

    }if (message.content === 'sus') {

        message.react('😳');
    
    }if (message.content === '_bot') 
    
        message.channel.send('<:Bot:819901638340378654>');

    });
    
    

   
 // F5, node.js
