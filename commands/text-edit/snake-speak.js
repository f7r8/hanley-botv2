const { Command } = require('discord.js-commando');

module.exports = class SnakeSpeakCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'snake-speak',
			aliases: ['snek-speak'],
			group: 'text-edit',
			memberName: 'snake-speak',
			description: 'Convertsssss text to sssssnake ssssspeak.',
			args: [
				{
					key: 'text',
					prompt: 'What text would you like to convert to sssssnake ssssspeak?',
					type: 'string',
					validate: text => {
						if (text.replace(/s/gi, 'sssss').length < 2000) return true;
						return 'Invalid text, your text is too long.';
					}
				}
			]
		});
	}

	run(msg, { text }) {
		return msg.say(text.replace(/s/gi, 'sssss'));
	}
};
