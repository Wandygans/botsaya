const axios = require('axios')
const cheerio = require('cheerio')

const pickrandom = async(ext) => {
  return ext[Math.floor(Math.random() * ext.length)]
}

function tiktoksearch(query) {
	return new Promise((resolve, reject) => {
		axios.get('https://brainans.com/search?query='+query).then(res => {
			const $ = cheerio.load(res.data)
			const result = []
			const main = $('#search-container > div')
			main.each( function() {
				const user_url = 'https://brainans.com'+$(this).find('div.content__text > a').attr('href')
				const user = $(this).find('div.content__text > a').text()
				const username = $(this).find('div.content__text > p').text()
				result.push({ user, username, user_url })
				const hasil = {
					result: result
				}
				resolve(hasil)
			})
		}).catch(reject)
	})
}


module.exports = { tiktoksearch }
