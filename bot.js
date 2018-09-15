const Discord = require('discord.js');
const client = new Discord.Client();

client.on('guildMemberAdd' , m => {
var role = m.guild.roles.find('name' , '- users.');
m.addRole(role);
})

client.login(process.env.BOT_TOKEN);
