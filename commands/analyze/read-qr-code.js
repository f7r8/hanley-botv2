const { Command } = require('discord.js-commando');
const snekfetch = require('snekfetch');
const { shorten } = require('../../util/Util');

module.exports = class ReadQRCodeCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'read-qr-code',
			aliases: ['scan-qr-code', 'scan-qr'],
			group: 'analyze',
			memberName: 'read-qr-code',
			description: 'Reads a QR Code.',
			args: [
				{
					key: 'image',
					prompt: 'What QR Code would you like to read?',
					type: 'image'
				}
			]
		});
	}

	async run(msg, { image }) {
		try {
			const { body } = await snekfetch
				.get('https://api.qrserver.com/v1/read-qr-code/')
				.query({ fileurl: image });
			const data = body[0].symbol[0];
			if (!data.data) return msg.reply(`Could not read QR Code: ${data.error}.`);
			return msg.reply(shorten(data.data, 2000 - (msg.author.toString().length + 2)));
		} catch (err) {
			return msg.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
		}
	}
};
