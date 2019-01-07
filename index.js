const SlackBot = require('slackbots')
const axios = require('axios')

const bot = new SlackBot({
	token: process.env.API_TOKEN,
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