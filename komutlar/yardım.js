const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  
  if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('⚠ Uyarı ⚠', '`davet` adlı komutu özel mesajlarda kullanamazsın.')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setColor('RANDOM')
        .addField('NervSky - Komut', `__=KOMUT LİSTESİ=__`,)
        .addField('Kullanıcı', '• `avatar` | `yavaşmod` | `duyuru` | `çekilişyap` | `sunucu-bilgi` | `sunucuresmi` | `afk`',)
        .addField('Moderasyon', '• `ban` | `kick` | `sayaç` | `otorol` | `sustur` | `temizle` | `roller` | `rolinfo`',)
        .addField('Eğlence', ' • `bravery` | `brilliance` | `slot` | `winner` | `öp` | `kafasınasık` | `espri` | `emojiler`',)
        .addField('Bot', '• `davet` | `istatistik`  |  `sipariş`  | `yardım`',)
    return message.channel.sendEmbed(sunucubilgi);
    }
};


exports.conf = { // Özel ayarları belirtiyoruz.
	enabled: true, // Aktif mi değil mi? (true, false)
	guildOnly: true, // Sadece sunucuda mı kullanılsın? (true, false)
	aliases: ["yardim"], // Sadece komutu değilde bunlarıda yazarsa bu işlemi gerçekleştir diyoruz.
	permLevel: 0,
	kategori: 'Market' // Yardım komutunda gözükecek kategoriyi belirtiyoruz.
}

exports.help = { // Ana ayarları belirtiyoruz.
	komut: 'yardım', // Komutu belirtiyoruz.
	description: 'Bu bir örnek komuttur.', // Yardımda gözüken açıklamayı belirtiyoruz.
	usage: 'yardım' // Yardımda gözükecek kullanımı belirtiyoruz.
}