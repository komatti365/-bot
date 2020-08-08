const Discord = require('discord.js')
const client = new Discord.Client()
const token = 'Your Token'
const prefix = '!sa'
//const openchid =  '714413580757237831'
//const logchid = '713916694271229994'
//const botid = '693089231135965235'
//var jinrostatus = '0'
client.login(token);

client.on('ready', () => {
    client.user.setActivity('!sahelpでヘルプ', { type: 'STREAMING' })
})

client.on('ready', () => {
    console.log(`${client.user.username} でログインしています。`)
})

client.on('ready', () => {
    client.channels.cache.filter(ch => ch.name === 'saikyo-global').forEach(ch => ch.send('botが起動しました'))
});

client.on('message', message => {
    if (message.content.startsWith('!sahelp')) {
        if (message.author.bot) return;
        const embed = new Discord.MessageEmbed()
            .setTitle("最強botのグロチャ一覧ですよ")
            .setAuthor("最強botでつかえるグロチャ")
            .setColor(0x00AE86)
            .addField('saikyo-global', 'メイングロチャ')
            .addField('jinro-game-audience-saikyobot', 'サブグロチャ(旧人狼ゲーム観戦用チャット)')
            .addField('saikyo-global-2', '新サブグロチャ')
            .addField('saikyo-info', 'お知らせチャンネル')
            .setThumbnail("https://yagami.xyz/content/uploads/2018/11/discord-512-1.png")
            .setTimestamp()
        message.channel.send(embed)
    }
});

client.on('message', message => {
    if (message.content.startsWith('!!shutdown')) {
        if (!message.author.id == 576433638300844052) return;
        process.exit();
    }
});

client.on('message', message => {
  if (message.content === "$prefix activeserver") {
    const botcount = client.guilds.cache.size
    message.channel.send(botcount)
  }
  if (message.channel.name === 'saikyo-global') {
    if (message.author.bot) return;
    if (message.attachments.size <= 0) {
      message.delete()
    }
    client.channels.cache.forEach(channel => {
      if (message.attachments.size <= 0) {
        const embed = new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL()).setDescription(message.cleanContent).setColor(0x2C2F33).setFooter(message.guild.name, message.guild.iconURL()).setTimestamp()
        if (channel.name === 'saikyo-global') return channel.send(embed)
      }
      if (!message.attachments.forEach(attachment => {
          const embed = new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL()).setImage(attachment.url).setDescription(attachment.url).setColor(3066993).setFooter(message.guild.name, message.guild.iconURL()).setTimestamp()
          if (channel.name === 'saikyo-global') return　 channel.send(embed)
        }));
      return;
    });
  }
})
client.on('message', message => {
  if (message.content === "$prefix activeserver") {
    const botcount = client.guilds.cache.size
    message.channel.send(botcount)
  }
  if (message.channel.id === '714413580757237831') {
    if (message.author.bot) return;
    if (jinrostatus == '0') return;
    if (message.attachments.size <= 0) client.channels.cache.forEach(channel => {
      if (message.attachments.size <= 0) {
        const embed = new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL()).setDescription(message.cleanContent).setColor(0x2C2F33).setFooter(message.guild.name, message.guild.iconURL()).setTimestamp()
        if (channel.name === 'jinro-game-audience-saikyobot') return channel.send(embed)
      }
      if (!message.attachments.forEach(attachment => {
          const embed = new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL()).setImage(attachment.url).setDescription(attachment.url).setColor(3066993).setFooter(message.guild.name, message.guild.iconURL()).setTimestamp()
          if (channel.name === 'jinro-game-audience-saikyobot') return　 channel.send(embed)
        }));
      return;
    });
  }
})
client.on('message', message => {
  if (message.content === "$prefix activeserver") {
    const botcount = client.guilds.cache.size
    message.channel.send(botcount)
  }
  if (message.channel.id === '733894823765082153') {
    if (message.attachments.size <= 0) client.channels.cache.forEach(channel => {
      if (message.attachments.size <= 0) {
        const embed = new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL()).setDescription(message.cleanContent).setColor(0x2C2F33).setFooter(message.guild.name, message.guild.iconURL()).setTimestamp()
        if (channel.name === 'jinro-game-audience-saikyobot') return channel.send(embed)
      }
      if (!message.attachments.forEach(attachment => {
          const embed = new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL()).setImage(attachment.url).setDescription(attachment.url).setColor(3066993).setFooter(message.guild.name, message.guild.iconURL()).setTimestamp()
          if (channel.name === 'jinro-game-audience-saikyobot') return　 channel.send(embed)
        }));
      return;
    });
  }
})


client.on('message', message => {
  if (message.content === "$prefix activeserver") {
    const botcount = client.guilds.cache.size
    message.channel.send(botcount)
  }
  if (message.channel.name === 'jinro-game-audience-saikyobot') {
    if (message.author.bot) return;
    if (message.attachments.size <= 0) {
      message.delete()
    }
    client.channels.cache.forEach(channel => {
      if (message.attachments.size <= 0) {
        const embed = new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL()).setDescription(message.cleanContent).setColor(0x2C2F33).setFooter(message.guild.name, message.guild.iconURL()).setTimestamp()
        if (channel.name === 'jinro-game-audience-saikyobot') return channel.send(embed)
      }
      if (!message.attachments.forEach(attachment => {
          const embed = new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL()).setImage(attachment.url).setDescription(attachment.url).setColor(3066993).setFooter(message.guild.name, message.guild.iconURL()).setTimestamp()
          if (channel.name === 'jinro-game-audience-saikyobot') return　 channel.send(embed)
        }));
      return;
    });
  }
})

client.on('message', message => {
  if (message.content === "$prefix activeserver") {
    const botcount = client.guilds.cache.size
    message.channel.send(botcount)
  }
  if (message.channel.name === 'saikyo-global-2') {
    if (message.author.bot) return;
    if (message.attachments.size <= 0) {
      message.delete()
    }
    client.channels.cache.forEach(channel => {
      if (message.attachments.size <= 0) {
        const embed = new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL()).setDescription(message.cleanContent).setColor(0x2C2F33).setFooter(message.guild.name, message.guild.iconURL()).setTimestamp()
        if (channel.name === 'saikyo-global-2') return channel.send(embed)
      }
      if (!message.attachments.forEach(attachment => {
          const embed = new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL()).setImage(attachment.url).setDescription(attachment.url).setColor(3066993).setFooter(message.guild.name, message.guild.iconURL()).setTimestamp()
          if (channel.name === 'saikyo-global-2') return　 channel.send(embed)
        }));
      return;
    });
  }
})

client.on('message', message => {
    if (message.content === "$prefix activeserver") {
        const botcount = client.guilds.cache.size
        message.channel.send(botcount)
    }
    if (message.channel.id === '740211265741521007') {
        if (message.author.bot) return;
            client.channels.cache.forEach(channel => {
            if (message.attachments.size <= 0) {
                const embed = new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL()).setDescription(message.cleanContent).setColor(0x2C2F33).setFooter(message.guild.name, message.guild.iconURL()).setTimestamp()
                if (channel.name === 'saikyo-info') return channel.send(embed)
            }
            if (!message.attachments.forEach(attachment => {
                const embed = new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL()).setImage(attachment.url).setDescription(attachment.url).setColor(3066993).setFooter(message.guild.name, message.guild.iconURL()).setTimestamp()
                if (channel.name === 'saikyo-info') return channel.send(embed)
            }));
            return;
        });
    }
})