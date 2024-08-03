const { Client, GatewayIntentBits, Events, Collection } = require("discord.js");
const { token } = require('./config.json');
const { readdirSync } = require("fs");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
const commandList = readdirSync('./commands');

for(let file of commandList){
    let cmd = require('./commands/'+file);
    client.commands.set(cmd.data.name, cmd);
}

client.once(Events.ClientReady, client => {
    console.log(`Online ${client.user.tag}!`);
});

client.on(Events.InteractionCreate, async interaction => {
    if(!interaction.isChatInputCommand()) return;

    let command = interaction.client.commands.get(interaction.commandName);
    await command.execute(interaction);
    console.log('BERES!!')
});

client.login(token);