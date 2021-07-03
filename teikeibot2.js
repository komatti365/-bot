const Discord = require('discord.js')
const client = new Discord.Client()
client.login(process.env.token);

client.on('ready', () => {
    client.user.setActivity('!!helpでヘルプ', { type: 'STREAMING' })
})

client.on('ready', () => {
    console.log(`${client.user.username} でログインしています。`)
})

client.on('ready', () => {
        client.channels.cache.filter(ch => ch.name === 'kiritan-global').forEach(ch => ch.send('botが起動しました'))
    })
;

client.on('message', message => {
    if (message.content.startsWith('!!help')) {
        if (message.author.bot) return;
        const embed = new Discord.MessageEmbed()
            .setTitle("きりたんbotのグロチャ一覧ですよ")
            .setAuthor("きりたんbotでつかえるグロチャ")
            .setColor(0x00AE86)
            .addField('kiritan-global', 'メイングロチャ')
            .addField('jinro-game-audience', 'サブグロチャ(旧人狼ゲーム観戦用チャット)')
            .addField('kiritan-direct-info', 'お知らせ通知チャンネル')
            .addField('kiritan-ad-global', '宣伝okなグロチャです。ご自由にご利用ください')
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
            if (message.channel.name === 'kiritan-global') {
                if (message.author.bot) return;
                if (message.attachments.size <= 0) {
                    message.delete()
                }
                client.channels.cache.forEach(channel => {
                    if (message.attachments.size <= 0) {
                        const embed = new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL()).setDescription(message.cleanContent).setColor(0x2C2F33).setFooter(message.guild.name, message.guild.iconURL()).setTimestamp()
                        if (channel.name === 'kiritan-global') return channel.send(embed)
                    };
                    if (!message.attachments.forEach(attachment => {
                        const embed = new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL()).setImage(attachment.url).setDescription(attachment.url).setColor(3066993).setFooter(message.guild.name, message.guild.iconURL()).setTimestamp()
                        if (channel.name === 'kiritan-global') return channel.send(embed)
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
            if (message.channel.id == "714413580757237831") {
                if (message.author.bot) return;
                if (jinrostatus == '0') return;
                if (message.attachments.size <= 0) client.channels.cache.forEach(channel => {
                    if (message.attachments.size <= 0) {
                        const embed = new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL()).setDescription(message.cleanContent).setColor(0x2C2F33).setFooter(message.guild.name, message.guild.iconURL()).setTimestamp()
                        if (channel.name == 'jinro-game-audience') return channel.send(embed)
                    }
                    if (!message.attachments.forEach(attachment => {
                        const embed = new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL()).setImage(attachment.url).setDescription(attachment.url).setColor(3066993).setFooter(message.guild.name, message.guild.iconURL()).setTimestamp()
                        if (channel.name == 'jinro-game-audience') return channel.send(embed)
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
            if (message.channel.id === "733894823765082153") {
                if (message.attachments.size <= 0) client.channels.cache.forEach(channel => {
                    if (message.attachments.size <= 0) {
                        const embed = new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL()).setDescription(message.cleanContent).setColor(0x2C2F33).setFooter(message.guild.name, message.guild.iconURL()).setTimestamp()
                        if (channel.name === 'jinro-game-audience') return channel.send(embed)
                    }
                    if (!message.attachments.forEach(attachment => {
                        const embed = new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL()).setImage(attachment.url).setDescription(attachment.url).setColor(3066993).setFooter(message.guild.name, message.guild.iconURL()).setTimestamp()
                        if (channel.name === 'jinro-game-audience') return channel.send(embed)
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
            if (message.channel.id == "723493462640427099") {
                if (message.author.bot) return;
                if (message.content.startsWith('!tenotify'))
                    if (message.attachments.size <= 0) client.channels.cache.forEach(channel => {
                        if (message.attachments.size <= 0) {
                            const args = message.content.slice(9).trim().split(/ +/g);
                            const embed = new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL()).setDescription(args).setColor(0x2C2F33).setFooter(message.guild.name, message.guild.iconURL()).setTimestamp()
                            if (channel.name == 'kiritan-info') return channel.send(embed)
                        }
                        if (!message.attachments.forEach(attachment => {
                            const embed = new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL()).setImage(attachment.url).setDescription(attachment.url).setColor(3066993).setFooter(message.guild.name, message.guild.iconURL()).setTimestamp()
                            if (channel.name == 'kiritan-info') return channel.send(embed)
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
            if (message.channel.name === 'jinro-game-audience') {
                if (message.author.bot) return;
                if (message.attachments.size <= 0) {
                    message.delete()
                }
                client.channels.cache.forEach(channel => {
                    if (message.attachments.size <= 0) {
                        const embed = new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL()).setDescription(message.cleanContent).setColor(0x2C2F33).setFooter(message.guild.name, message.guild.iconURL()).setTimestamp()
                        if (channel.name === 'jinro-game-audience') return channel.send(embed)
                    }
                    if (!message.attachments.forEach(attachment => {
                        const embed = new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL()).setImage(attachment.url).setDescription(attachment.url).setColor(3066993).setFooter(message.guild.name, message.guild.iconURL()).setTimestamp()
                        if (channel.name === 'jinro-game-audience') return channel.send(embed)
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
            if (message.channel.id === "730259375691792395") {
                client.channels.cache.forEach(channel => {
                    if (message.attachments.size <= 0) {
                        const embed = new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL()).setDescription(message.cleanContent).setColor(0x2C2F33).setFooter(message.channel.name, message.guild.iconURL()).setTimestamp()
                        if (channel.name === 'kiritan-global') return channel.send(embed)
                    }
                    if (!message.attachments.forEach(attachment => {
                        const embed = new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL()).setImage(attachment.url).setDescription(attachment.url).setColor(3066993).setFooter(message.guild.name, message.guild.iconURL()).setTimestamp()
                        if (channel.name === 'kiritan-global') return channel.send(embed)
                    }));
                    return;
                });
            }
        })

client.on('message', message => {
    if (message.channel.id === '730259375691792395')
    if (message.embeds[0].title == "地震情報") {
        client.channels.cache.forEach(channel => {
            if (channel.type == "text" && channel.name == "kiritan-global") {
                channel.send(message.embeds)
            }
        })
    }
})

client.on('message', message => {
            if (message.content === "$prefix activeserver") {
                const botcount = client.guilds.cache.size
                message.channel.send(botcount)
            }
            if (message.channel.id === '730259466301472778') {
                client.channels.cache.forEach(channel => {
                    if (message.attachments.size <= 0) {
                        const embed = new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL()).setDescription(message.cleanContent).setColor(0x2C2F33).setFooter(message.channel.name, message.guild.iconURL()).setTimestamp()
                        if (channel.name === 'kiritan-global') return channel.send(embed)
                    }
                    if (!message.attachments.forEach(attachment => {
                        const embed = new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL()).setImage(attachment.url).setDescription(attachment.url).setColor(3066993).setFooter(message.channel.name, message.guild.iconURL()).setTimestamp()
                        if (channel.name === 'kiritan-global') return channel.send(embed)
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
            if (message.channel.name === 'kiritan-ad-global') {
                if (message.author.bot) return;
                if (message.attachments.size <= 0) {
                    message.delete()
                }
                client.channels.cache.forEach(channel => {
                    if (message.attachments.size <= 0) {
                        const embed = new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL()).setDescription(message.cleanContent).setColor(0x2C2F33).setFooter(message.guild.name, message.guild.iconURL()).setTimestamp()
                        if (channel.name === 'kiritan-ad-global') return channel.send(embed)
                    }
                    if (!message.attachments.forEach(attachment => {
                        const embed = new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL()).setImage(attachment.url).setDescription(attachment.url).setColor(3066993).setFooter(message.guild.name, message.guild.iconURL()).setTimestamp()
                        if (channel.name === 'kiritan-ad-global') return channel.send(embed)
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
    if (message.channel.id === '740215511245258815') {
        if (message.author.bot) return;
            client.channels.cache.forEach(channel => {
            if (message.attachments.size <= 0) {
                const embed = new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL()).setDescription(message.cleanContent).setColor(0x2C2F33).setFooter(message.guild.name, message.guild.iconURL()).setTimestamp()
                if (channel.name === 'kiritan-direct-info') return channel.send(embed)
            }
            if (!message.attachments.forEach(attachment => {
                const embed = new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL()).setImage(attachment.url).setDescription(attachment.url).setColor(3066993).setFooter(message.guild.name, message.guild.iconURL()).setTimestamp()
                if (channel.name === 'kiritan-direct-info') return channel.send(embed)
            }));
            return;
        });
    }
})
