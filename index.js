const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')

const COMMANDS = ['Hello','Who are you?', 'Hi'];

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.use(Telegraf.log())

bot.start((ctx) => {
  console.log('started:', ctx.from.id)
  return ctx.reply('Welcome!',
    Markup
    .keyboard([
        ['🔍 Search', '😎 Popular'], // Row1 with 2 buttons
        // ['☸ Setting', '📞 Feedback'], // Row2 with 2 buttons
        // ['📢 Ads', '⭐️ Rate us', '👥 Share'] // Row3 with 3 buttons
        ['Name', 'Role'],
        ['User Info', 'YOLOO']
    ])
    .oneTime()
    .resize()
    .extra())
})


bot.command('🔍 Search', ctx => ctx.reply('Yay!'))
bot.command('😎 Popular', ctx => ctx.reply('Free hugs. Call now!'))
bot.command('User Info', ctx => ctx.reply(ctx.from))
bot.command('Role', ctx => ctx.reply(ctx.from))

bot.command('help', (ctx) => ctx.reply('Try send a sticker!'))

bot.hears('hi', (ctx) => ctx.reply('Hey there!'))
bot.hears(/buy/i, (ctx) => ctx.reply('Buy-buy!'))

bot.on('sticker', (ctx) => ctx.reply('👍'))

bot.startPolling()