const SlackBot = require('slackbots')
const axios = require('axios')

//
//'xoxp-518779524167-518779524471-518856382167-29eb431b3867b5dfc8c1c7d6ab99ac59'
const bot = new SlackBot({
	token: process.env.API_TOKEN || 'xoxb-518779524167-517623770179-DpVTgGpZDFoKe2HtrCQ1PMWy',
	name: 'nodebot'
})

bot.on('start', () => {
	const params = { icon_emoji: ':cat:' }

	bot.postMessageToChannel('general', 'How can I help you?', params)
})

bot.on('error', (err) => {
	console.log(err)
})

bot.on('message', (data) => {
	if(data.type !== 'message') { return }
	
	handleMessage(data.text)

})

function handleMessage(text) {
	console.log(text)
	const params = { icon_emoji: ':cat:' }


	if (text.toLowerCase().includes('weather')) {
		bot.postMessageToChannel('general', 'It is hot today!', params)

	} else if (text.toLowerCase().includes('hi')) {
		bot.postMessageToChannel('general', 'How are you?', params)

	} 

}