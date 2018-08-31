const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

  if (message.content == 'test') {
    // Responder con mencion
    message.reply('pong');

    //Mensaje normal
    message.channel.sendMessage("pong");
  }

  //Mostrar por pantalla los mensajes que se envian al bot por el chat privado
  console.log(message.content);

});

bot.login('NDc0MTYxMjMxOTYwMzQyNTMx.DkNk9Q.-QSDo-JX2GOdH64_UBkmr6GYqVk');
