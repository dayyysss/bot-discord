// commands/welcome.js
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('wellcoome')
        .setDescription('Welcome command'),

    async execute(interaction) {
        await interaction.reply('Welcome to the server!');
    },
};
