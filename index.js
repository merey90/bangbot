const Bot = require('node-telegram-bot-api');
const request = require('request');

const TOKEN = '434256346:AAGTZySuRVjkHvTsprPtZ6R6CjN9qy5hE68';
const COMMANDS = ['Hello','Who are you?', 'Hi'];

const bot = new Bot(TOKEN, {polling: true});

//bot.on('message', (event) => console.log(event.text.toString());

bot.on('message', (msg) => {
    switch (msg.text.toString()) {
        case COMMANDS[0]:
            bot.sendMessage(msg.chat.id, 'World!');
        break;
        case COMMANDS[1]:
            bot.sendMessage(msg.chat.id, 'Bang game bot');
        break;
        case COMMANDS[2]:
            bot.sendMessage(msg.chat.id, 'Yoloo!');
        break;
        default:
            bot.sendMessage(msg.chat.id, 'Hi, wellcome to the game!', {
                reply_markup: {
                    keyboard: [COMMANDS, ['Bulk option']]
                }
            });
        break;
    }
        // return request(url, (err, resp, body) => {
        //     bot.sendMessage(msg.chat.id, prepareData(body));
        // });
    
});