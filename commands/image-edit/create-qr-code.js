const { Command } = require('discord.js-commando');
const snekfetch = require('snekfetch');

module.exports = class CreateQRCodeCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'create-qr-code',
			aliases: ['create-qr'],
			group: 'image-edit',
			memberName: 'create-qr-code',
			description: 'Converts text to a QR Code.',
			args: [
				{
					key: 'text',
					prompt: 'What text would you like to convert to a QR Code?',
					type: 'string'
				}
			]
		});
	}

	async run(msg, { text }) {
		try {
			const { body } = await snekfetch
				.get('https://api.qrserver.com/v1/create-qr-code/')
				.query({ data: text });
			return msg.say({ files: [{ attachment: body, name: 'qr-code.png' }] });
		} catch (err) {
			return msg.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
		}
	}
};
