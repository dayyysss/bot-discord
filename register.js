const { REST, Routes } = require("discord.js");
const { readdirSync } = require("fs");
const { token, clientId, guildId } = require('./config.json');

const commands = [];
const commandList = readdirSync('./commands');

for(let file of commandList){
    commands.push(require('./commands/'+file).data.toJSON());
}

const rest = new REST().setToken(token);

(async () => {
    await rest.put(Routes.applicationGuildCommands(clientId, guildId), {body:commands});
    console.log(`Commands baru telah ditambahkan! ${commands.length}`);
})();