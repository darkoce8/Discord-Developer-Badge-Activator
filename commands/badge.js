const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('badge')
		.setDescription('Activate a slash command for the badge'),
	async execute(interaction) {

		const MessageEmbed = new EmbedBuilder()
		.setColor('#2f3136')
		.setDescription(`:white_check_mark: Activated slash command!
						Please make this discord server a community server
						
						Once done, join this discord server
						https://discord.gg/discord-developers
						
						Head over to 
						https://discord.com/channels/613425648685547541/1040031099860045854
						
						Click the follow button and select this discord and choose any channel.
						
						Once completed, check 
						https://discord.com/developers/active-developer
						
						Note: May take up to 24 hours to receive your badge.
						
						Bot Created By
						https://github.com/darkoce8/
						https://github.com/darkoce8/discord-developer-badge/`)

		await interaction.reply({ embeds: [MessageEmbed] });
	},
};