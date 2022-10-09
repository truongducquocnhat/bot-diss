const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;

if (message.channel.id != room) {
	return;
  }

// Example command
if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🧛 **LUX BOT** 🧛')
	.setDescription("**Cách dùng** \n`Cách dùng đọc đi : Chat < .methods > để xem chi tiết lệnh` \n `VD: .<tên methods> + url<wen cần ddos> + <time vd 60 nếu methods có y/c>`\n `🤖LUX BOT mãi đỉnh nhoa🤖`")
	.setFooter('© Developer: Phuc#2005', client.user.avatarURL)
	message.channel.send(embed1);
	return;
	}

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['huongdan'],
  permLevel: 0
}

exports.help = {
  name: 'huongdan',
  description: 'Phuc',
  usage: 'huongdan'
}
