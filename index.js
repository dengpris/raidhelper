const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const ms = require('ms');
const xlsxFile = require('read-excel-file/node');

// Login with Token
const token = fs.readFileSync('C:/Users/prisc/Documents/token.txt').toString();
const PREFIX = '!';

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
			message.channel.send('pong!')
			break;
		case 'website':
			message.channel.send('https://www.youtube.com/channel/UCBkKEr-U-VWYbw27oZcIO_A/featured')
			break;
			// Use: !clear + #, # determines how many messages to delete
			// Note specifying a number simply deletes the most recent message
		case 'clear':
			if (args[1]) message.channel.bulkDelete(args[1])
			else message.channel.bulkDelete(2)
			break;
		case 'crab':
			message.reply('I will mute you')
			let author = message.member
			if (!muterole) return message.reply("Mute role not found");
			time = '5s';
			
			author.roles.remove(mainrole.id);
			author.roles.add(muterole.id);

			setTimeout(function(){
				author.roles.add(mainrole.id);
				author.roles.remove(muterole.id);
				message.channel.send(`${author} has been unmuted!`)
			}, ms(time));
			break;
		case 'mute':
			let person = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]))
			if (!person) return message.reply("User not found");
			if (!muterole) return message.reply("Mute role not found");

			time = args[2];
			if (!time) return message.reply("you didn't specify a time!");

			person.roles.remove(mainrole.id);
			person.roles.add(muterole);
			message.channel.send(`${person} has been muted for ${ms(ms(time))}`);

			setTimeout(function(){
				person.roles.add(mainrole.id);
				person.roles.remove(muterole.id);
				message.channel.send(`${person} has been unmuted!`)
			}, ms(time));
			break;
		case 'help':
			message.channel.send("```BigBrainsBot supports the following commands: \n\n- !ping \n- !website \n- !clear # \n- !serebii den # \n- !serebii convert # ```")
			break;
		case 'user':
			if (args[1]){
				let member = message.mentions.users.first()
				if (!member) return message.reply("member could not be found.");

				const user = new Discord.MessageEmbed()
				.setTitle('User Information')
				.setThumbnail(member.displayAvatarURL())
				.addField('Player Name', member.username)
				.addField('Tag', member.tag)
				.setColor(0x48C9B0);
				message.channel.send(user);

			} else {
				const user = new Discord.MessageEmbed() // Create embed
				.setTitle('User Information')
				.setThumbnail(message.author.displayAvatarURL())
				.addField('Player Name', message.author.username)
				.addField('Tag', message.author.tag)
				.setColor(0x48C9B0);
				message.channel.send(user);
		}

			break;
		case 'serebii':
			// Return den info on Serebii
			if (args[1] === 'den'){
				if (args[2] > 0 && args[2] <= 100){
					message.channel.send('https://www.serebii.net/swordshield/maxraidbattles/den' + args[2] + '.shtml')
				} else {
					message.channel.send('Den out of range.')
				}
			}
			// Convert den # to Pkhex den #
			else if (args[1] === 'convert'){
				if (args[2] > 0 && args[2] <= 100){
					// Common or rare den

					convert(args[2]);
				}
			}
			else {
				message.channel.send('Command not recognized. Perhaps you mean to try `!serebii convert #` or `!serebii den #` ?')
			}
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
