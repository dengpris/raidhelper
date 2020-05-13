const Discord = require('discord.js');
const bot = new Discord.Client();

// Login with Token
const token = 'NzA5OTY5OTI5NjMzMjY3Nzky.XrtpEA.HYZQi-Emb1m28JdgyPA8NNvVq3M';

bot.on('ready', () => {
	console.log('Bot is online.');
})
bot.on('message', msg=>{
	if (msg.content === "HELLO"){
		msg.reply("HELLO FRIEND!");
	}
})

bot.login(token);


