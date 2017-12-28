const Telegraf = require('telegraf')

const COMMANDS = ['Hello','Who are you?', 'Hi'];

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.use(Telegraf.log())

bot.start((ctx) => {
  console.log('started:', ctx.from.id)
  return ctx.reply('Welcome!',
    Markup
    .keyboard([
        ['🔍 Search', '😎 Popular'], // Row1 with 2 buttons
        ['☸ Setting', '📞 Feedback'], // Row2 with 2 buttons
        ['📢 Ads', '⭐️ Rate us', '👥 Share'] // Row3 with 3 buttons
    ])
    .oneTime()
    .resize()
    .extra())
})


bot.hears('🔍 Search', ctx => ctx.reply('Yay!'))
bot.hears('📢 Ads', ctx => ctx.reply('Free hugs. Call now!'))

bot.command('help', (ctx) => ctx.reply('Try send a sticker!'))
bot.hears('hi', (ctx) => ctx.reply('Hey there!'))
bot.hears(/buy/i, (ctx) => ctx.reply('Buy-buy!'))
bot.on('sticker', (ctx) => ctx.reply('👍'))

bot.startPolling()