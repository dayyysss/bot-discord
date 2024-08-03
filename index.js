const { REST } = require('discord.js');
const { Routes } = require('discord-api-types/v9');

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const clientId = '1269322589801807892'; 
const token = 'MTI2OTMyMjU4OTgwMTgwNzg5Mg.GguiYA.qBvV3WUQCPngggDQQOJl6JLM9HHS39zQ70NMHc'; 

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(clientId), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();