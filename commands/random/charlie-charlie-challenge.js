const { Command } = require('discord.js-commando');
const { stripIndent } = require('common-tags');
const answers = ['yes', 'no'];

module.exports = class CharlieCharlieChallengeCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'charlie-charlie-challenge',
			aliases: ['charlie-charlie'],
			group: 'random',
			memberName: 'charlie-charlie-challenge',
			description: 'Asks your question to Charlie.',
			args: [
				{
					key: 'question',
					prompt: 'What do you want to ask Charlie?',
					type: 'string',
					max: 1900
				}
			]
		});
	}

	run(msg, { question }) {
		const answer = answers[Math.floor(Math.random() * answers.length)];
		return msg.say(stripIndent`
			${question}
			\`\`\`
			    ${answer === 'no' ? '\\' : ' '}  |  ${answer === 'yes' ? '/' : ' '}
			  NO ${answer === 'no' ? '\\' : ' '} | ${answer === 'yes' ? '/' : ' '}YES
			      ${answer === 'no' ? '\\' : ' '}|${answer === 'yes' ? '/' : ' '}
			————————————————
			      ${answer === 'yes' ? '/' : ' '}|${answer === 'no' ? '\\' : ' '}
			  YES${answer === 'yes' ? '/' : ' '} | ${answer === 'no' ? '\\' : ' '}NO
			    ${answer === 'yes' ? '/' : ' '}  |  ${answer === 'no' ? '\\' : ' '}
			\`\`\`
		`);
	}
};
