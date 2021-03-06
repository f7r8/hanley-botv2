const { Command } = require('discord.js-commando');
const snekfetch = require('snekfetch');

module.exports = class AdviceSlipCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'advice-slip',
			aliases: ['advice'],
			group: 'random',
			memberName: 'advice-slip',
			description: 'Responds with a random bit of advice.'
		});
	}

	async run(msg) {
		try {
			const { raw } = await snekfetch.get('http://api.adviceslip.com/advice');
			return msg.say(JSON.parse(raw.toString()).slip.advice);
		} catch (err) {
			return msg.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
		}
	}
};
