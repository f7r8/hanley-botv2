const { Command } = require('discord.js-commando');

module.exports = class ClapCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'clap',
			aliases: ['clapping'],
			group: 'text-edit',
			memberName: 'clap',
			description: 'Sends 👏 text 👏 like 👏 this.',
			args: [
				{
					key: 'text',
					prompt: 'What 👏 text 👏 would 👏 you 👏 like 👏 to 👏 convert?',
					type: 'string',
					validate: text => {
						if (text.replace(/ /g, ' 👏 ').length < 2000) return true;
						return 'Invalid text, your text is too long.';
					}
				}
			]
		});
	}

	run(msg, { text }) {
		return msg.say(text.replace(/ /g, ' 👏 '));
	}
};
