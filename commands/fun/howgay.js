const Discord = require("discord.js");
const {
  MessageEmbed
} = require("discord.js");
const {
  Color
} = require("../../config.json");

module.exports = {
  name: "howgay",
  category: 'ð»Fun',
  aliases: [],
  description: "Show How Gay Member Is!",
  usage: "<Mention Member>",
  run: async (client, message, args) => {
    //Start
    message.delete();
    let Member =
    message.mentions.members.first() ||
    message.guild.members.cache.get(args[0]) ||
    message.member;

    let Result = Math.floor(Math.random() * 101);

    let embed = new MessageEmbed()
    .setColor(Color)
    .setTitle(`Gay v2 Machine`)
    .setDescription(`${Member.user.username} Is ${Result}% Gay ð³ï¸âð`)
    .setFooter(`Requested by ${message.author.username}`)
    .setTimestamp();

    message.channel.send(embed);

    //End
  }
};