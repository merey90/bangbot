const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')

const COMMANDS = ['Hello','Who are you?', 'Hi'];

const bot = new Telegraf(process.env.BOT_TOKEN)

// Http webhook, for nginx/heroku users.
bot.startWebhook('/secret-path', null, process.env.PORT || 5000)

bot.use(Telegraf.log())

bot.start((ctx) => {
  console.log('started:', ctx.from.id)
  return ctx.reply('Welcome!',
    Markup
    .keyboard([
        ['🔍 Search', '😎 Popular'], // Row1 with 2 buttons
        // ['☸ Setting', '📞 Feedback'], // Row2 with 2 buttons
        // ['📢 Ads', '⭐️ Rate us', '👥 Share'] // Row3 with 3 buttons
        ['Name', 'Username'],
        ['User Info', 'YOLOO']
    ])
    .oneTime(false)
    .resize()
    .extra())
})

    // 2017-12-28T12:28:10.630948+00:00 app[web.1]: {
    // 2017-12-28T12:28:10.630948+00:00 app[web.1]:   "update_id": 130851465,
    // 2017-12-28T12:28:10.630949+00:00 app[web.1]:   "message": {
    // 2017-12-28T12:28:10.630950+00:00 app[web.1]:     "message_id": 67,
    // 2017-12-28T12:28:10.630950+00:00 app[web.1]:     "from": {
    // 2017-12-28T12:28:10.630951+00:00 app[web.1]:       "id": 111611889,
    // 2017-12-28T12:28:10.630954+00:00 app[web.1]:       "is_bot": false,
    // 2017-12-28T12:28:10.630954+00:00 app[web.1]:       "first_name": "Merey",
    // 2017-12-28T12:28:10.630955+00:00 app[web.1]:       "last_name": "Zholdas",
    // 2017-12-28T12:28:10.630955+00:00 app[web.1]:       "username": "merey90",
    // 2017-12-28T12:28:10.630956+00:00 app[web.1]:       "language_code": "en-US"
    // 2017-12-28T12:28:10.630956+00:00 app[web.1]:     },
    // 2017-12-28T12:28:10.630957+00:00 app[web.1]:     "chat": {
    // 2017-12-28T12:28:10.630957+00:00 app[web.1]:       "id": 111611889,
    // 2017-12-28T12:28:10.630958+00:00 app[web.1]:       "first_name": "Merey",
    // 2017-12-28T12:28:10.630959+00:00 app[web.1]:       "last_name": "Zholdas",
    // 2017-12-28T12:28:10.630959+00:00 app[web.1]:       "username": "merey90",
    // 2017-12-28T12:28:10.630960+00:00 app[web.1]:       "type": "private"
    // 2017-12-28T12:28:10.630960+00:00 app[web.1]:     },
    // 2017-12-28T12:28:10.630961+00:00 app[web.1]:     "date": 1514464090,
    // 2017-12-28T12:28:10.630961+00:00 app[web.1]:     "text": "/help",
    // 2017-12-28T12:28:10.630962+00:00 app[web.1]:     "entities": [
    // 2017-12-28T12:28:10.630962+00:00 app[web.1]:       {
    // 2017-12-28T12:28:10.630963+00:00 app[web.1]:         "offset": 0,
    // 2017-12-28T12:28:10.630963+00:00 app[web.1]:         "length": 5,
    // 2017-12-28T12:28:10.630964+00:00 app[web.1]:         "type": "bot_command"
    // 2017-12-28T12:28:10.630965+00:00 app[web.1]:       }
    // 2017-12-28T12:28:10.630965+00:00 app[web.1]:     ]
    // 2017-12-28T12:28:10.630966+00:00 app[web.1]:   }
    // 2017-12-28T12:28:10.630966+00:00 app[web.1]: }

bot.hears('🔍 Search', ctx => ctx.reply('Yay!'))
bot.hears('😎 Popular', ctx => ctx.reply('Free hugs. Call now!'))
bot.hears('Name', ctx => ctx.reply(ctx.from.first_name))
bot.hears('User Info', ctx => ctx.reply(ctx.from))
bot.hears('Username', ctx => ctx.reply(ctx.from.username))
bot.hears('YOLOO', ctx => ctx.sendMessage("agui?"))

bot.command('help', (ctx) => ctx.reply('Try send a sticker!'))

bot.hears('hi', (ctx) => ctx.reply('Hey there!'))
bot.hears(/buy/i, (ctx) => ctx.reply('Buy-buy!'))

bot.on('sticker', (ctx) => ctx.reply('👍'))

bot.startPolling()