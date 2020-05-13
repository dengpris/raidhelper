const Discord = require('discord.js');
const bot = new Discord.Client();

// Login with Token
const token = 'NzA5OTY5OTI5NjMzMjY3Nzky.XrtpEA.HYZQi-Emb1m28JdgyPA8NNvVq3M';

const PREFIX = '!';
var purple = 'Den type: Rare';
var red = 'Den type: Common';

bot.on('ready', () => {
	console.log('Bot is online.');
})
bot.on('message', message=>{
	// 'let' declares variables locally, 'var' decalres globally
	// Here we are splitting string by white space
	let args = message.content.substring(PREFIX.length).split(" ");

	switch(args[0]){
		case 'ping':
			message.channel.send('pong!')
			break;
		case 'website':
			message.channel.send('https://www.youtube.com/channel/UCBkKEr-U-VWYbw27oZcIO_A/featured')
			break;
		case 'clear':
			if (args[1]) message.channel.bulkDelete(args[1])
			else message.channel.bulkDelete(2)
			break;
		case 'crab':
			message.reply('I will mute you');
			break;
		case 'serebii':
			// Return den info on Serebii
			if (args[1] === 'den'){
				if (args[2] > 0 && args[2] <= 93){
					message.channel.send('https://www.serebii.net/swordshield/maxraidbattles/den' + args[2] + '.shtml')
				} else {
					message.channel.send('Den out of range.')
				}
			}
			// Convert den # to Pkhex den #
			else if (args[1] === 'convert'){
				if (args[2] > 0 && args[2] <= 93){
					// Common or rare den
					if (args[2] > 43) message.channel.send('Den type: Rare');
					else message.channel.send('Den type: Common');

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
		switch(num){
		case '1':
			message.channel.send('★ __Den 8__: Rolling Fields 8 \n★ __Den 33__: South Lake Miloch 5 \n★ __Den 60__: Stony Wilderness 2')
			break;
		case '2':
			message.channel.send('★ __Den 15__: Watchtower Ruins 1 \n★ __Den 65__: Stony Wilderness 7')
			break;
		case '3':
			message.channel.send('★ __Den 63__: Stony Wilderness 3')
			break;
		case '4':
			message.channel.send('★ __Den 5__: Dappled Grove 5 \n★ __Den 14__: Dappled Grove 4 \n★ __Den 55__: Bridge Field 6')
			break;
		case '5':
			message.channel.send('★ __Den 32__: South Lake Miloch 4 \n★ __Den 56__: Bridge Field 7')
			break;
		case '6':
			message.channel.send('★ __Den 16__: Watchtower Ruins 2 \n★ __Den 63__: Stony Wilderness 5')
			break;
		case '7':
			message.channel.send('★ __Den 18__: East Lake Axewell 1 \n★ __Den 25__: West Lake Axewell 4')
			break;
		case '8':
			message.channel.send('★ __Den 29__: South Lake Miloch 1 \n★ __Den 52__: Bridge Field 3 \n★ __Den 99__: Lake of Outrage 3')
			break;
		case '9':
			message.channel.send('★ __Den 22__: West Lake Axewell 1 \n★ __Den 23__: West Lake Axewell 2 \n★ __Den 26__: West Lake Axewell 5')
			break;
		case '10':
			message.channel.send('★ __Den 39__: North Lake Miloch 1 \n★ __Den 45__: North Lake Miloch 6 \n★ __Den 76__: Dusty Bowl 6')
			break;
		case '11':
			message.channel.send('★ __Den 36__: Giant\'s Seat 3 \n★ __Den 38__: Giant\'s Seat 5 \n★ __Den 75__: Dusty Bowl 5')
			break;
		case '12':
			message.channel.send('★ __Den 35__: Giant\'s Seat 2 \n★ __Den 66__: Stony Wilderness 8 \n★ __Den 85__: Hammerlocke Hills 1')
			break;
		case '13':
			message.channel.send('★ __Den 51__: Bridge Field 2')
			break;
		case '14':
			message.channel.send('★ __Den 46__: Motostoke Riverbank 1 \n★ __Den 68__: Stony Wilderness 10 \n★ __Den 91__: Hammerlocke Hills 7')
			break;
		case '15':
			message.channel.send('★ __Den 34__: Giant\'s Seat 1 \n★ __Den 37__: Giant\'s Seat 4 \n★ __Den 73__: Dusty Bowl 3')
			break;
		case '16': 
			message.channel.send('★ __Den 15__: Watchtower Ruins 1 \n★ __Den 65__: Stony Wilderness 7')
			break;
		case '17':
			message.channel.send('★ __Den 71__: Dusty Bowl 1 \n★ __Den 72__: Dusty Bowl 2')
			break;
		case '18':
			message.channel.send('★ __Den 69__: Stony Wilderness 11 \n★ __Den 94__: Giant\'s Cap 3 \n★ __Den 98__: Lake of Outrage 2')
			break;
		case '19':
			message.channel.send('★ __Den 62__: Stony Wilderness 4 \n★ __Den 88__: Hammerlocke Hills 4')
			break;
		case '20':
			message.channel.send('★ __Den 78__: Dusty Bowl 8')
			break;
		case '21':
			message.channel.send('★ __Den 77__: Dusty Bowl 7')
			break;
		case '22':
			message.channel.send('★ __Den 67__: Stony Wilderness 9')
			break;
		case '23':
			message.channel.send('★ __Den 89__: Hammerlocke Hills 5 \n★ __Den 93__: Giant\'s Cap 2')
			break;
		case '24':
			message.channel.send('★ __Den 48__: Motostoke Riverbank 3 \n★ __Den 96__: Giant\'s Cap 5')
			break;
		case '25':
			message.channel.send('★ __Den 84__: Giant\'s Mirror 5 \n★ __Den 97__: Lake of Outrage 1')
			break;
		case '26':
			message.channel.send('★ __Den 10__: Dappled Grove 1 \n★ __Den 12__: Dappled Grove 3 \n★ __Den 14__: Dappled Grove 5')
			break;
		case '27':
			message.channel.send('★ __Den 58__: Bridge Field 9 \n★ __Den 64__: Stony Wilderness 6 \n★ __Den 83__: Giant\'s Mirror 4')
			break;
		case '28':
			message.channel.send('★ __Den 11__: Dappled Grove 2 \n★ __Den 79__: Giant\'s Mirror 1')
			break;
		case '29':
			message.channel.send('★ __Den 41_: North Lake Miloc 3 \n★ __Den 43__: North Lake Miloc 5 \n★ __Den 44__: East Lake Axewell 5')
			break;
		case '30':
			message.channel.send('★ __Den 47__: Motostoke Riverbank 2 \n★ __Den 87__: Hammerlocke Hills 3 \n★ __Den 92__: Giant\'s Cap 1')
			break;
		
		case '52':
			message.channel.send('★ __Den 1__: Rolling Fields 1 \n ★ __Den 53__: Bridge Field 4')
			break;
		}
	}

})

bot.login(token);


