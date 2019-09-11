const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
  if (mesaj.length < 1) return message.reply('Yazmam İçin Birşey Yazmalısın!! ');
  
    message.delete();
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username + ` Duyuru Yaptı`)
    .setColor("#18BF7E")
    .setDescription(`${mesaj}`)
    .setThumbnail('http://www.zara.bel.tr/images/sayfalar/duyurular.png')
    return message.channel.sendEmbed(embed);
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['duyuryap', 'duyur'],
  permLevel: 3
};

exports.help = {
  komut: 'duyuru',
  description: 'Güzel Bir Duyuru Görünümü Sağlar.',
  usage: 'duyuru [Duyuruda Yazıcak Şey]'
};