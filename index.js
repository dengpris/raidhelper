const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const ms = require('ms');
const xlsxFile = require('read-excel-file/node');

// Login with Token
const token = fs.readFileSync('C:/Users/Priscilla Deng/Documents/token.txt').toString();
const PREFIX = '!';

bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js')) // Only read JS files
for (const file of commandFiles){
	const command = require(`./commands/${file}`);

	bot.commands.set(command.name, command);
}

bot.on('ready', () => {
	console.log('Bot is online.');
})
bot.on('message', message=>{
	// 'let' declares variables locally, 'var' decalres globally
	// Here we are splitting string by white space
	let args = message.content.substring(PREFIX.length).split(" ");
	
	let mainrole = message.guild.roles.cache.find(role => role.name === "new role");
	let muterole = message.guild.roles.cache.find(role => role.name === "mute");
	let time;

	switch(args[0]){
		case 'ping':
			bot.commands.get('ping').execute(message, args);
			break;
		case 'website':
			bot.commands.get('website').execute(message, args);
			break;
		case 'clear':
			bot.commands.get('clear').execute(message, args);
			break;
		case 'crab':
			bot.commands.get('crab').execute(message, args);
			break;
		case 'mute':
			bot.commands.get('mute').execute(message, args);
			break;
		case 'help':
			bot.commands.get('help').execute(message, args);
			break;
		case 'user':
			bot.commands.get('user').execute(message, args);
			break;
		case 'serebii':
			bot.commands.get('serebii').execute(message, args);
			break;
	}

	// Helpers
	function convert(num){
		// may change this to embed when i have time
		xlsxFile('./denconvert.xlsx').then((rows) => {
			let x = -1;
  			for (i in rows){
  				if (num == rows[i][2] || num == rows[i][3]){
  					x = i;
  					message.channel.send('```Den ' + num + ' is: ' + rows[i][0] + ' - ' + rows[i][1] + '```')
  				}
  			}
  			if (num < 43) message.channel.send ('```Den type: Common```')
  			else message.channel.send ('```Den type: Rare' + '\nNotable Pokemon: ' + rows[x][4] + '```')
		})
	}

})

bot.login(token);
