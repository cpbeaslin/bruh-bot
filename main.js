const Discord = require('discord.js');

const client = new Discord.Client();

let date_ob = new Date();

// current date
// adjust 0 before single digit date
let date = ("0" + date_ob.getDate()).slice(-2);

// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

// current year
let year = date_ob.getFullYear();

// current hours
let hours = date_ob.getHours();

// current minutes
let minutes = date_ob.getMinutes();

// current seconds
let seconds = date_ob.getSeconds();

require('dotenv').config()

client.once('ready', () => {
    console.log('Bot is online!');
    client.user.setActivity("you can't stop me")
});




// Create an event listener for messages


  client.on('message', message => {

    if ((message.content.includes('bruh')) && (message.author.id !== '764964260316053595'))     {
      message.channel.send('bruh')
      console.log(`this has been a bruh moment at ${hours + ":" + minutes + ":" + seconds}`);
    }
  });



client.login(process.env.TOKEN)

