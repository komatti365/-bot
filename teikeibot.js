const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json');
let jinrostatus = '0';
const logger = require('./gchatlogger');
client.login(config.token);

client.on('message', message => {



    if (message.content.indexOf("ゲームを開始します") > -1) {
        if (message.author.id === '736505060879630396') {
            jinrostatus = '1'
            message.channel.send('チャット転送を開始します。')
            console.log(jinrostatus);
        }
    }
    if (message.content.indexOf("終了しました") > -1) {
        if (message.author.id === '736505060879630396') {
            jinrostatus = '0'
            message.channel.send('チャット転送を終了します。')
        };
        console.log(jinrostatus);


        if (message.content.indexOf("役職を配布します") > -1) {
            if (message.author.id === '693089231135965235') {
                jinrostatus = '1'
                message.channel.send('チャット転送を開始します。')
                console.log(jinrostatus);
            }



        if (message.content.indexOf("ゲームが終了しました") > -1) {
                if (message.author.id === '693089231135965235') {
                    jinrostatus = '0'
                    message.channel.send('チャット転送を終了します。')
                };
            console.log(jinrostatus);
            }
        }
    }
})

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
                    const tag = (message.author.tag)
                    const gmsg = (message.cleanContent)
                    const server = (message.guild.name)
                    logger.trace(server + tag + gmsg)
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
            if (message.content === "$prefix activeserver") {
                const botcount = client.guilds.cache.size
                message.channel.send(botcount)
            }
            if (message.channel.id === '730259418758905908') {
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