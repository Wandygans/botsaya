let { fetchJosn, fetchText } = require('./lib/fetcher')
let { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close, formatp } = require('./lib/functions')
let { color, bgcolor } = require('./lib/color')
let { namaninja, blackpill } = require('./lib/generator')
let { animesaran } = require('./lib/animesaran')
let { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')
let afk = require("./lib/afk");
let { gempa,
covid,
upload,
tiktoksearch,
linkwa,
trendtwit,
igstalk,
webp2gifFile,
playstore,
wiki,
artinama,
merdeka,
pinterest,
quotesAnime } = require('./lib/scraper')
let { pShadow } = require('./lib/photooxy')
let
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	    } = require("@adiwajshing/baileys")
const fs = require("fs")
const simple = require('./lib/simple.js')
const axios = require('axios')
const speed = require("performance-now")
const util = require('util')
const ggs = require('google-it')
const delay = require('delay')
const googleImage = require('g-i-s')
const crypto = require('crypto')
const yts = require('yt-search')
const Math_js = require('mathjs')
const os = require('os')
const request = require('request')
const ms = require('parse-ms')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const { exec, spawn } = require('child_process')
const Exif = require('./lib/exif');
const exif = new Exif();

//━━━━━━━━━━━━━━━[ DATABASE ]━━━━━━━━━━━━━━━━━//

let tictactoe = JSON.parse(fs.readFileSync("./database/tictactoe.json"))
let scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
let user = JSON.parse(fs.readFileSync('./database/user.json'))
let _afk = JSON.parse(fs.readFileSync('./database/afk.json'));
let setting = JSON.parse(fs.readFileSync('./setting.json'))

//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━━━//

owner = setting.OwnerNumber
botname = setting.BotName
ownername = setting.OwnerName
NamaVisi = setting.namavisitor
limitt = setting.limitt
ley = "MIMINGANZ"
lolkey = "rmzbot"
apib = "benniismaelapikey"
dappauhuy = "Ochobot"
global.hit = {}
hit_today = []
ky_ttt = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
thumbnail = fs.readFileSync('./image/thumb.jpg')

//━━━━━━━━━━━━━━━[ MODUL EXPORTS ]━━━━━━━━━━━━━━━━━//

module.exports = dha = async (dha, mek, _welkom) => {
	    try {
		if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
	    if (!mek.message) return
        if (mek.key.fromMe) return
	    if (mek.key && !mek.key.remoteJid == 'status@broadcast') return
	    let content = JSON.stringify(mek.message)
	    m = simple.smsg(dha, mek)
        let { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
	    let from = mek.key.remoteJid
	    let type = Object.keys(mek.message)[0]
	    let time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        let cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        let prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&/\\©^z+,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&?/\\©^z+;]/gi) : '#'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		let command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		let args = body.trim().split(/ +/).slice(1)
		let arg = body.substring(body.indexOf(' ') + 1)
		let mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        let mentionByreply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        let mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByreply) : []
        let mentionUser = mention != undefined ? mention.filter(n => n) : []
		let isCmd = body.startsWith(prefix)
		let q = args.join(' ')
		hit_today.push(command)
		dha.chatRead(from, "read")
		let txt = mek.message.conversation
		let botNumber = dha.user.jid
		let ownerNumber = [`${owner}@s.whatsapp.net`, `6285157740529@s.whatsapp.net`]
		let isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let totalchat = await dha.chats.all()
		let groupMetadata = isGroup ? await dha.groupMetadata(from) : ''
		let groupName = isGroup ? groupMetadata.subject : ''
		let groupId = isGroup ? groupMetadata.jid : ''
		let groupMembers = isGroup ? groupMetadata.participants : ''
		let groupDesc = isGroup ? groupMetadata.desc : ''
		let groupOwner = isGroup ? groupMetadata.owner : ''
		let groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		let isBotGroupAdmins = groupAdmins.includes(botNumber) || false
        let itsMe = mek.key.fromMe ? true : false
		let isGroupAdmins = groupAdmins.includes(sender) || false
		let conts = mek.key.fromMe ? dha.user.jid : dha.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        let pushname = mek.key.fromMe ? dha.user.name : conts.notify || conts.vname || conts.name || '-'
        
		let isOwner = ownerNumber.includes(sender)
		let isMybot = isOwner || mek.key.fromMe
        let isUser = user.includes(sender)
        let isAfkOn = afk.checkAfkUser(sender, _afk)
        
       
		mess = {
			wait: '*Tunggu permintaan anda sedang di proses!*',
			success: 'Done Done bro',
			wrongFormat: 'Maaf format anda salah',
			error: {
				stick: 'Gagal Convert Gambar To Sticker...Coba Lagi !',
				api: 'Error cuy',
				Iv: 'Linknya Error Tod !'
			},
			only: {
				owner: 'Khusus owner',
				admin: 'Khusus Admin!',
				userB: `Maaf anda belum terdaftar dalam database, ketik /verify untuk mendaftar`,
				Badmin: 'Bot harus admin !',
				group: 'Khusus Group !'
			}
		}
		
		let isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
       let textImg = (teks) => {
                  return dha.sendMessage(from, teks, text, {quoted: mek})
                  }
      let sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
      let reply = (teks) => {
            dha.sendMessage(from, teks, text, {quoted:mek})
        }
        let sendMess = (hehe, teks) => {
            dha.sendMessage(hehe, teks, text)
        }
        let mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? dha.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : dha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        let createSerial = (size) => {
        return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
        
        let addCmd = (id, command) => {
        let obj = { id: id, chats: command }
        scommand.push(obj)
        fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
     }
    
     let sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       dha.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       dha.sendMessage(from, hasil, type, options).catch(e => {
	       dha.sendMessage(from, { url : link }, type, options).catch(e => {
	       reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	       console.log(e)
})
})
})
})
}
let sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                let fn = Date.now() / 10000;
                let filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    dha.sendMessage(to, media, type, { quoted: mek, thumbnail: Buffer.alloc(0), mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   

let sendWebp = async(to, url) => {
           var names = Date.now() / 10000;
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, './sticker' + names + '.png', async function () {
           console.log('selesai');
           let filess = './sticker' + names + '.png'
           let asw = './sticker' + names + '.webp'
           exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
           fs.unlinkSync(filess)
           if (err) return reply(`${err}`)
           exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
           if (error) return reply(`${error}`)
           dha.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:mek})
           fs.unlinkSync(asw)
});
});
});
}

        let getCommandhaosition = (id) => {
        let position = null
        Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
        position = i
        }
    })
       if (position !== null) {
       return position
    }
}
    
      let getCmd = (id) => {
      let position = null
      Object.keys(scommand).forEach((i) => {
      if (scommand[i].id === id) {
      position = i
        }
    })
      if (position !== null) {
      return scommand[position].chats
    }
}

function waktu(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDis = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDis = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDis = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDis = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDis + hDis + mDis + sDis;
}
	
//━━━━━━━━━━━━━━━[ CONNECTION 3 ]━━━━━━━━━━━━━━━━━//

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		let isMedia = (type === 'imageMessage' || type === 'videoMessage')
		let isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		let isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		let isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		let isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		
        if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
    	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

//━━━━━━━━━━━━━━━[ FOUNTION ]━━━━━━━━━━━━━━━━━//

var ase = new Date();
                var jamss = ase.getHours();
                switch(jamss){
                case 0: jamss = "Selamat malam"; break;
                case 1: jamss = "Selamat malam"; break;
                case 2: jamss = "Selamat malam"; break;
                case 3: jamss = "Selamat malam"; break;
                case 4: jamss = "Selamat pagi"; break;
                case 5: jamss = "Selamat pagi"; break;
                case 6: jamss = "Selamat pagi"; break;
                case 7: jamss = "Selamat pagi"; break;
                case 8: jamss = "Selamat pagi"; break;
                case 9: jamss = "Selamat pagi"; break;
                case 10: jamss = "Selamat pagi"; break;
                case 11: jamss = "Selamat siang"; break;
                case 12: jamss = "Selamat siang"; break;
                case 13: jamss = "Selamat siang"; break;
                case 14: jamss = "Selamat sore"; break;
                case 15: jamss = "Selamat sore"; break;
                case 16: jamss = "Selamat sore"; break;
                case 17: jamss = "Selamat sore"; break;
                case 18: jamss = "Selamat malam"; break;
                case 19: jamss = "Selamat malam"; break;
                case 20: jamss = "Selamat malam"; break;
                case 21: jamss = "Selamat malam"; break;
                case 22: jamss = "Selamat malam"; break;
                case 23: jamss = "Selamat malam"; break;
                }
                var ucapanWaktu  = "" + jamss;

runtime = (seconds) =>{
                function pad(s) {
                return (s < 10 ? '0' : '') + s;
                }
               var hours = Math.floor(seconds / (60 * 60));
               var minutes = Math.floor(seconds % (60 * 60) / 60);
               var seconds = Math.floor(seconds % 60);
               return `${pad(hours)} : ${pad(minutes)} :  ${pad(seconds)}`
               }
//tanggal
myMonths = ["1","2","3","4","5","6","7","8","9","10","11","12"];
myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
var tgl = new Date();
var day = tgl.getDate()
bulan = tgl.getMonth()
var thisDay = tgl.getDay(),
thisDay = myDays[thisDay];
var yy = tgl.getYear()
var year = (yy < 1000) ? yy + 1900 : yy;
const tanggal = `${thisDay} ${day}-${myMonths[bulan]}-${year}`    
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')

//afk
if (isGroup) {
		if (!mek.key.fromMe && mek.key.fromMe) return
		for (let x of mentionUser) {
		    if (afk.checkAfkUser(x, _afk)) {
			const getId = afk.getAfkId(x, _afk)
			const getReason = afk.getAfkReason(getId, _afk)
			const getTime = afk.getAfkTime(getId, _afk)
			const cptl = `*「 AFK MODE 」*\n
*Sssttt! Orangnya lagi AFK, jangan diganggu!*
➸ *Alasan*  : ${getReason}
➸ *Sejak* : ${getTime}`
      mentions(cptl, x, true)
    }}
		if (afk.checkAfkUser(sender, _afk) && !isCmd) {
		    const getTime = afk.getAfkTime(sender, _afk)
		    const getReason = afk.getAfkReason(sender, _afk)
		    const ittung = ms(await Date.now() - getTime)
		    const pep = `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
		    reply(pep)
		    _afk.splice(afk.getAfkPosition(sender, _afk), 1)
		    fs.writeFileSync('./database/afk.json', JSON.stringify(_afk))
		}
	    }
	
	const used = process.memoryUsage()
                 const cpus = os.cpus().map(cpu => {
                 cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			     return cpu
                 })
            const cpu = cpus.reduce((last, cpu, _, { length }) => {
            last.total += cpu.total
			last.speed += cpu.speed / length
			last.times.user += cpu.times.user
			last.times.nice += cpu.times.nice
			last.times.sys += cpu.times.sys
			last.times.idle += cpu.times.idle
			last.times.irq += cpu.times.irq
			return last
        }, {
            speed: 0,
			total: 0,
			times: {
			    user: 0,
			    nice: 0,
			    sys: 0,
			    idle: 0,
			    irq: 0
            }
        })
       
       if (mek.message && !mek.key.fromMe && mek.isBaileys && mek.quoted && mek.quoted.mtype === 'orderMessage' && !(mek.quoted.token && mek.quoted.orderId)) {
reply('Troli Detected\n\n' + require('util').format(mek.key))
await dha.modifyChat(mek.chat, 'delete', {
 includeStarred: false
})
}

idttt = []
	    ers1 = []
	    ers2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    ers1.push(t.er1)
	    ers2.push(t.er2)
	    gilir.push(t.gilir)
	    }
	    const isTTT = isGroup ? idttt.includes(from) : false
	    iser1 = isGroup ? ers1.includes(sender) : false
        iser2 = isGroup ? ers2.includes(sender) : false

if (isCmd) {
axios.get('https://api.countapi.xyz/hit/' + NamaVisi + '/visits').then(({data}) => hit.all = data.value)
}
//━━━━━━━━━━━━━━━[ MENU ]━━━━━━━━━━━━━━━━━//

switch (command) {
case 'menu':
if (!isUser) return reply(mess.only.userB)
reply(`_*Tunggu sebentar sedang menampilkan menu*_`)
let jumlahCommand = require('util').inspect(hit.all)
data = fs.readFileSync('./lib/quotes.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
timestamp = speed();
latensi = speed() - timestamp
teks =
`*${ucapanWaktu}* *${pushname}*✨

${randKey.quotes}

*《 BOT INFO 》*

👑 Creator : WandyGans
🤖 Bot Name : ${botname}
📍 Prefix : 「 Multi Prefix 」
🌝 Hit Today : ${hit_today.length}
🌎 Hit All : ${jumlahCommand}
👤 Total Pengguna : ${user.length} User
⏳ Runtime Bot : 
${waktu(process.uptime())}

*《 SERVER 》*
🗄️ Lib : BAILEYS
🗄️ Ram : ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

*《 TANGGAL 》*

📆 Tanggal : ${tanggal}
⏰ Jam : ${wib} WIB
⏰ Jam : ${wita} WITA
⏰ Jam : ${wit} WIT

*《 USER INFO 》*

*❒🐣 ‣ Name : ${pushname}*
*❒🐣 ‣ Status : ${isOwner ? 'Owner' : 'User'}*
*❒🐣 ‣ Nomor :*
*https://wa.me/${sender.split('@')[0]}*

*《 LIST MENU 》*

*❒🐣 ‣ ${prefix}botstatus*
*❒🐣 ‣ ${prefix}afk*
*❒🐣 ‣ ${prefix}report*
*❒🐣 ‣ ${prefix}jadibot*
*❒🐣 ‣ ${prefix}request*
*❒🐣 ‣ ${prefix}donasi*
*❒🐣 ‣ ${prefix}owner*
*❒🐣 ‣ ${prefix}join*

*❒🐣 ‣ ${prefix}tinyurl*
*❒🐣 ‣ ${prefix}cutly*
*❒🐣 ‣ ${prefix}volume*
*❒🐣 ‣ ${prefix}bitly*
*❒🐣 ‣ ${prefix}tomp3*
*❒🐣 ‣ ${prefix}shorturl*
*❒🐣 ‣ ${prefix}ytstalk*
*❒🐣 ‣ ${prefix}igstalk*
*❒🐣 ‣ ${prefix}font*
*❒🐣 ‣ ${prefix}namaninja*
*❒🐣 ‣ ${prefix}blackpill*
*❒🐣 ‣ ${prefix}font2*
*❒🐣 ‣ ${prefix}imgtourl*
*❒🐣 ‣ ${prefix}ssweb*
*❒🐣 ‣ ${prefix}bass*

*❒🐣 ‣ ${prefix}toimg*
*❒🐣 ‣ ${prefix}sticker*
*❒🐣 ‣ ${prefix}tovideo*
*❒🐣 ‣ ${prefix}attp*
*❒🐣 ‣ ${prefix}attp2*
*❒🐣 ‣ ${prefix}ttp*
*❒🐣 ‣ ${prefix}ttp2*
*❒🐣 ‣ ${prefix}ttp3*
*❒🐣 ‣ ${prefix}ttp4*

*❒🐣 ‣ ${prefix}infogempa*
*❒🐣 ‣ ${prefix}covid*
*❒🐣 ‣ ${prefix}okezone*
*❒🐣 ‣ ${prefix}sindo*
*❒🐣 ‣ ${prefix}bbcnews*
*❒🐣 ‣ ${prefix}infotsunami*
*❒🐣 ‣ ${prefix}detik*
*❒🐣 ‣ ${prefix}trendtwit*
*❒🐣 ‣ ${prefix}kompas*
*❒🐣 ‣ ${prefix}merdeka*
*❒🐣 ‣ ${prefix}cnn*
*❒🐣 ‣ ${prefix}liputan6*

*❒🐣 ‣ ${prefix}ytsearch*
*❒🐣 ‣ ${prefix}resepmakanan*
*❒🐣 ‣ ${prefix}google*
*❒🐣 ‣ ${prefix}gsmarena*
*❒🐣 ‣ ${prefix}semoji*
*❒🐣 ‣ ${prefix}pinterest*
*❒🐣 ‣ ${prefix}artimimpi*
*❒🐣 ‣ ${prefix}playstore*
*❒🐣 ‣ ${prefix}artinama*
*❒🐣 ‣ ${prefix}linkwa*
*❒🐣 ‣ ${prefix}wiki*
*❒🐣 ‣ ${prefix}googleimage*
*❒🐣 ‣ ${prefix}tiktoksearch*

*❒🐣 ‣ ${prefix}hidetag*
*❒🐣 ‣ ${prefix}setdesc*
*❒🐣 ‣ ${prefix}delete*
*❒🐣 ‣ ${prefix}tagall*
*❒🐣 ‣ ${prefix}getbio*
*❒🐣 ‣ ${prefix}linkgc*
*❒🐣 ‣ ${prefix}setname*
*❒🐣 ‣ ${prefix}promote*
*❒🐣 ‣ ${prefix}demote*

*❒🐣 ‣ ${prefix}animesaran*
*❒🐣 ‣ ${prefix}quotesanime*

*❒🐣 ‣ ${prefix}jadwalsholat*
*❒🐣 ‣ ${prefix}kisahnabi*
*❒🐣 ‣ ${prefix}quoteislami*

*❒🐣 ‣ ${prefix}watak*
*❒🐣 ‣ ${prefix}quotedilan*
*❒🐣 ‣ ${prefix}tts*
*❒🐣 ‣ ${prefix}cersex*
*❒🐣 ‣ ${prefix}quotes*
*❒🐣 ‣ ${prefix}readmore*
*❒🐣 ‣ ${prefix}bucin*
*❒🐣 ‣ ${prefix}randompantun*
*❒🐣 ‣ ${prefix}tictactoe*
*❒🐣 ‣ ${prefix}slot*
*❒🐣 ‣ ${prefix}faktaunik*
*❒🐣 ‣ ${prefix}truth*
*❒🐣 ‣ ${prefix}gura*
*❒🐣 ‣ ${prefix}dare*
*❒🐣 ‣ ${prefix}nickff*
*❒🐣 ‣ ${prefix}randomnama*
*❒🐣 ‣ ${prefix}animestick*
*❒🐣 ‣ ${prefix}doge*
*❒🐣 ‣ ${prefix}katabijak*
*❒🐣 ‣ ${prefix}patrick*
*❒🐣 ‣ ${prefix}halah*
*❒🐣 ‣ ${prefix}heleh*
*❒🐣 ‣ ${prefix}hilih*
*❒🐣 ‣ ${prefix}simi*
*❒🐣 ‣ ${prefix}kalkulator*
*❒🐣 ‣ ${prefix}rate*
*❒🐣 ‣ ${prefix}sangecek*
*❒🐣 ‣ ${prefix}lesbicek*
*❒🐣 ‣ ${prefix}hobby*
*❒🐣 ‣ ${prefix}terganteng*
*❒🐣 ‣ ${prefix}tercantik*
*❒🐣 ‣ ${prefix}bagaimanakah*
*❒🐣 ‣ ${prefix}persencantik*
*❒🐣 ‣ ${prefix}jadian*
*❒🐣 ‣ ${prefix}ceritahoror*
*❒🐣 ‣ ${prefix}persenganteng*
*❒🐣 ‣ ${prefix}persengay*

*❒🔴 ‣ ${prefix}exif*
*❒🔴 ‣ ${prefix}archive*
*❒🔴 ‣ ${prefix}broadcast*
*❒🔴 ‣ ${prefix}leave*
*❒🔴 ‣ ${prefix}clearall*
*❒🔴 ‣ ${prefix}nano*
*❒🔴 ‣ ${prefix}setbio*
*❒🔴 ‣ ${prefix}restart*
*❒🔴 ‣ ${prefix}setnamabot*
*❒🔴 ‣ ${prefix}setppbot*
*❒🔴 ‣ ${prefix}delchat*
*❒🔴 ‣ ${prefix}clearall*
*❒🔴 ‣ ${prefix}spam*
*❒🔴 ‣ ${prefix}upswteks*
*❒🔴 ‣ $*
*❒🔴 ‣ >*

*《 SEWABOT 》*
- 1 Minggu = 10k
Syarat, kirim link group yang akan bot join dan selesaikan transaksi anda di wa.me/6281290565513

*《 NOTE  》*
> 🐣 = *Fitur yang dapat di gunakan untuk public*
> 🔴 = *Fitur yang hanya dapat di gunakan oleh owner*
`
reply(teks)
break
case 'jadibot':
if(itsMe) return reply('Tidak bisa jadibot di dalam bot')
if (isGroup) return reply(`*Fitur Hanya dapat digunakan dalam Private Chat!*`)
jadibot(reply,dha,from, mek)
break
case 'spam':
if (!isOwner) return reply(mess.only.owner)
					if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					dha.sendMessage(from, argzi[0], MessageType.text)
				}
				break
case 'restart':
if (!isOwner) return reply(mess.only.owner)
reply(`_Restarting StealBot_`)
exec(`cd &&  node index`)
sleep(4000)
reply('Sukses')
break
case 'archive':
if (!isOwner) return reply(mess.only.owner)
                reply('*okey wait..*')
                console.log('succes archive chat = ' + from)
                await sleep(3000)
                dha.modifyChat(from, ChatModification.archive)
                break
case 'bbcnews':
				reply(mess.wait)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/bbc-news?apikey=${ley}`)
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Judul : ${i.title}\nTerbit : ${i.terbit}\nWartawan : ${i.wartawan}\nGambar : ${i.img}\nDeskripsi : ${i.desc}\nLink : ${i.link}\n=================\n`
				}
				reply(teks.trim())
				break
case 'okezone':
				reply(mess.wait)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/okezone?apikey=${ley}`)
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Judul : ${i.title}\nLink : ${i.url}\n=================\n`
				}
				reply(teks.trim())
				break
case 'sindo':
if (!isUser) return reply(mess.only.userB)
				reply(mess.wait)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/sindo/international?apikey=${ley}`)
				teks = '=================\n'
				for (let i of anu.data) {
				teks += `Judul : ${i.judul}\nWaktu : ${i.waktu}\nTipe : ${i.tipe}\nKutipan : ${i.kutipan}\nLink : ${i.link}\n=================\n`
				}
				reply(teks.trim())
				break
case 'gsmarena':
if (!isUser) return reply(mess.only.userB)
                if (!q) return reply(`apa yang mau dicari ngab?\nContoh ${prefix + command} iphone`)
                query = args.join(" ")
                reply(mess.wait)
        	    halah = await fetchJson(`https://leyscoders-api.herokuapp.com/api/gsm-arena?q=${query}&apikey=${ley}`)
        	    asu = halah.result
        	    img = await getBuffer(asu.thumb)
        	    hsil = `Nama : ${asu.spek}\n`
        	    hsil += `Type : ${asu.display_type}\n`
        	    hsil += `Size : ${asu.display_size}\n`
        	    hsil += `Resolusi : ${asu.display_resolusi}\n`
        	    hsil += `Chipset : ${asu.chipset}\n`
        	    hsil += `Os : ${asu.os}\n`
        	    hsil += `Cpu : ${asu.cpu}\n`
        	    hsil += `Internal : ${asu.internal}\n`
        	    hsil += `Camera : ${asu.camera}\n`
        	    hsil += `Batterai : ${asu.Batterai}`
        	    dha.sendMessage(from, img, image, {quoted: mek, caption: hsil})
        	    break
case 'resepmakanan':
if (!isUser) return reply(mess.only.userB)
if (!q) return reply(`Example : ${prefix + command} Ayam`)
                carii = args.join(" ")
				reply(mess.wait)
				anu = await fetchJson(`http://zekais-api.herokuapp.com/resep?menu=${carii}`)
				teksnya = `Judul : ${anu.title}\n`
				teksnya += `Chef : ${anu.author}\n`
				teksnya += `Diterbitkan : ${anu.published}\n`
				teksnya += `Kesulitan : ${anu.dificulty}\n`
				teksnya += `Waktu : ${anu.times}\n`
				teksnya += `Porsi : ${anu.servings}\n\n\n`
				teksnya += `Bahan :\n${anu.ingredient}\n\n\n`
				teksnya += `Langkah :\n${anu.step}`
				toll = await getBuffer(anu.thumb)
				dha.sendMessage(from, toll, image, {quoted: mek, caption: teksnya})
				break
case 'semoji': 
if (!isUser) return reply(mess.only.userB)
                    try {
                    if (!q) return reply(`emojinya mana?\ncontoh : ${prefix + command} 😭`) 
                    reply(mess.wait)
                    emoji = args[0]
                    try {
                    emoji = encodeURI(emoji[0])
                    } catch {
                    emoji = encodeURI(emoji)
                    }
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/smoji3/${emoji}?apikey=${lolkey}`) 
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${lolkey}&img=${ini_url.result.emoji.whatsapp}&package=StealBot&author=Bot`)
                    dha.sendMessage(from, ini_buffer, sticker, { quoted: mek }) 
                    } catch (e) {
				    console.log(`Error :`, color(e,'red'))
				    reply('❌ ERROR ❌')
				    }
                    break
case 'ceritahoror':
if (!isUser) return reply(mess.only.userB)
				anu = await fetchJson(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${lolkey}`)
				d = anu.result
				buffer = await getBuffer(d.thumbnail)
				horor = `[ CERITA HOROR ]\n\n\nTitle : ${d.title}\nDeskripsi : ${d.desc}\nStory : ${d.story}`
				dha.sendMessage(from, buffer, image, {quoted: mek, caption: horor})
				break
case 'katabijak':
if (!isUser) return reply(mess.only.userB)
				reply(mess.wait)
				anu = await fetchJson(`http://api.lolhuman.xyz/api/random/katabijak?apikey=${lolkey}`) 
				jam = `「 KATA KATA BIJAK 」 :\n\n${anu.result}`
				reply(jam)
				break
case 'terganteng':
if (!isUser) return reply(mess.only.userB)
if (!isGroup) return reply(mess.only.group)
				jds = []
				const jdiidc = groupMembers
				const kosstc = groupMembers
				const akuutc = jdiidc[Math.floor(Math.random() * jdiidc.length)]
				teks = `Yang terganteng di grub ini adalah @${akuutc.jid.split('@')[0]}`
				jds.push(akuutc.jid)
				mentions(teks, jds, true)
				break	
				case 'tercantik':
				if (!isUser) return reply(mess.only.userB)
if (!isGroup) return reply(mess.only.group)
				jds = []
				const jdiidr = groupMembers
				const kosstr = groupMembers
				const akuutr = jdiidr[Math.floor(Math.random() * jdiidr.length)]
				teks = `Yang tercantik di grub ini adalah @${akuutr.jid.split('@')[0]}`
				jds.push(akuutr.jid)
				mentions(teks, jds, true)
				break
case 'jadian':
if (!isUser) return reply(mess.only.userB)
if (!isGroup) return reply(mess.only.group)
				jds = []
				const jdii = groupMembers
				const koss = groupMembers
				const akuu = jdii[Math.floor(Math.random() * jdii.length)]
				const diaa = koss[Math.floor(Math.random() * koss.length)]
				teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]} ♥️ @${diaa.jid.split('@')[0]} `
				jds.push(akuu.jid)
				jds.push(diaa.jid)
				mentions(teks, jds, true)
				break	
case 'hobby':
if (!isUser) return reply(mess.only.userB)
if (!q) return reply(`Example : ${prefix + command} wandu`)
				hobby = body.slice(1)
				const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
				const by = hob[Math.floor(Math.random() * hob.length)]
				dha.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
				break
case 'lesbicek':
if (!isUser) return reply(mess.only.userB)
if (!q) return reply(`Example : ${prefix + command} wandu`)
				lesbii = body.slice(1)
				const lesbi =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const bi = lesbi[Math.floor(Math.random() * lesbi.length)]
				dha.sendMessage(from, 'Pertanyaan : *'+lesbii+'*\n\nJawaban : '+ bi+'%', text, { quoted: mek})
				break
case 'bagaimanakah':
if (!isUser) return reply(mess.only.userB)
if (!q) return reply(`Example : ${prefix + command} wandu`)
				bagaimanakah = body.slice(1)
				const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Coba Ulangi','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
				const mana = bagai[Math.floor(Math.random() * bagai.length)]
				dha.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted: mek })
				break
		        case 'rate':
		if (!isUser) return reply(mess.only.userB)
		if (!q) return reply(`Example : ${prefix + command} wandu`)
				rate = body.slice(1)
				const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const te = ra[Math.floor(Math.random() * ra.length)]
				reply(`${te}%`)
				break
                case 'sangecek':
                if (!isUser) return reply(mess.only.userB)
                if (!q) return reply(`Example : ${prefix + command} wandu`)
				sange = body.slice(1)
				const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const nge = sang[Math.floor(Math.random() * sang.length)]
				reply(`Pertanyaan : ${sange}\nJawaban : ${nge}%`)
				break
case 'persencantik':
if (!isUser) return reply(mess.only.userB)
                if (!q) return reply(`Example : ${prefix + command} wandu`)
				cantik = args.join(' ')
				const can =['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
				const tik = can[Math.floor(Math.random() * can.length)]
				dha.sendMessage(from, 'Pertanyaan : Cantik Cek Kakak *'+cantik+'*\n\nPersen Kecantikan : '+ tik +'', text, { quoted: mek })
				break
case 'persenganteng':
if (!isUser) return reply(mess.only.userB)
if (!q) return reply(`Example : ${prefix + command} wandu`)
				ganteng = body.slice(12)
				const gan =['10%','30%','20%','40%','50%','60%','70%','62%','74%','83%','97%','100%','29%','94%','75%','82%','41%','39%']
				const teng = gan[Math.floor(Math.random() * gan.length)]
				dha.sendMessage(from, 'Pertanyaan : Cek Ganteng Bang *'+ganteng+'*\n\nJawaban : '+ teng +'', text, { quoted: mek })
				break
case 'persengay':
if (!isUser) return reply(mess.only.userB)
if (!q) return reply(`Example : ${prefix + command} wandu`)
				rate = args.join(' ')
				persengayy = ["*4%*\n\n*Tobat Ngegay Gan:v*","*9%*\n\n*OTW Tobat Gan:v*","*17%*\n\n*Kang Coli*","*28%*\n\n*Buset Dah Gay🤦*","*34%*\n\n *Korban Tusbol*","*48%*\n\n*Kang Hunter Bool:v*","*59%*\n\n *Bahaya Ni Orang Gan*","*62%*\n\n*Hati² Sama Ni Orang Beneran Dah*","*74%*\n\n*Astagfirullah Kabur Gan🏃🌬️*","83%\n\n Yaallah Nak🤦","97%\n\nAstagfirullah🤦","100%\n\nKabur ae Gan Daripada Ditusbol Bool lu🏃","29%\n\n amann:v","94%\n\n Yaallah🏃","75%\n\nHadehh Gay🤦","82%\n\nMending Lu Tobat Dah🏃","41%\n\nSering Cari Bool Diperempatan","39%\n\nSering Tusbol Bool Topan🏃"]
				const kl = persengayy[Math.floor(Math.random() * persengayy.length)]
				dha.sendMessage(from, 'Persen Gay: *'+rate+'*\n\nJawaban : '+kl+'', text, { quoted: mek })
				break  
case 'tts':
if (!isUser) return reply(mess.only.userB)
if (!q) return reply(`Masukan kode bahasa dan teks, contoh\n\n ${prefix + command} id dancok`)
try {
				   const gtts = require('./lib/gtts')(args[0])
					var bby = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					bby.length > 300
						? reply('Teks nya terlalu panjang kak')
						: gtts.save(ranm, bby, function () {
							exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
								fs.unlinkSync(ranm)
								buff = fs.readFileSync(rano)
								if (err) return reply(dla.stikga())
								dha.sendMessage(from, buff, audio, { duration: 359996400, ptt: true, quoted: mek })
								fs.unlinkSync(rano)
							})
						})
						} catch (e) {
						reply(`${e}`)
						}
					break
case 'quotes':
if (!isUser) return reply(mess.only.userB)
data = fs.readFileSync('./lib/quotes.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
datanya = `Author : ${randKey.author}\nQuotes : ${randKey.quotes}`
buttons = [{buttonId:`${prefix}quotes`,buttonText:{displayText:'Try Again'},type:1}]
buttonsMessage = { contentText: `${datanya}`, footerText: `Quotes`,  buttons: buttons, headerType: 1 }
prep = await dha.prepareMessageFromContent(from,{buttonsMessage}, {quoted: mek})
dha.relayWAMessage(prep)
break
case 'nickff':
if (!isUser) return reply(mess.only.userB)
                reply(mess.wait)
				data = await fetchJson(`https://leyscoders-api.herokuapp.com/api/nick-epep?apikey=${ley}`)
				teks = `${data.result}`
				reply(teks)
				break
case 'randomnama':
if (!isUser) return reply(mess.only.userB)
                reply(mess.wait)
				anu = await fetchJson(`http://api.lolhuman.xyz/api/random/nama?apikey=${lolkey}`) 
				teks = `「 NAMA 」 \n\n${anu.result}`
				reply(teks)
				break
case 'randompantun':
if (!isUser) return reply(mess.only.userB)
				reply(mess.wait)
				anu = await fetchJson(`http://api.lolhuman.xyz/api/random/pantun?apikey=${lolkey}`) 
				teks = `「 RANDOM PANTUN 」 \n\n${anu.result}`
				reply(teks)
				break
case 'infotsunami':
if (!isUser) return reply(mess.only.userB)
				reply(mess.wait)
                anuu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/info-tsunami?apikey=${ley}`)
                dapxzuhy = anuu.result
                textcuk = `Waktu : ${dapxzuhy.waktu}\n`
                textcuk += `Magnitude : ${dapxzuhy.magnitude}\n`
                textcuk += `Kedalaman : ${dapxzuhy.Kedalaman}\n`
                textcuk += `Wilayah : ${dapxzuhy.Wilayah}\n`
                textcuk += `Koordinat : ${dapxzuhy.koordinat}\n`
                reply(textcuk)
                break
case 'tagall':
if (!isUser) return reply(mess.only.userB)
				members_id = []
				teks = (args.length > 1) ? body.slice(8).trim() : ''
				teks += '\n\n'
				for (let mem of groupMembers) {
				teks += `➡️ @${mem.jid.split('@')[0]}\n`
				members_id.push(mem.jid)
				}
				mentions(teks, members_id, true)
				break
case 'quotesanime':
if (!isUser) return reply(mess.only.userB)
data = await quotesAnime()
datanya = data[Math.floor(Math.random() * data.length)]
teks = `Karakter : ${datanya.karakter}\nQuote : ${datanya.quotes}`
reply(teks)
break
case 'q': 
    if (!m.quoted) return reply('reply pesan!')
    let qse = dha.serializeM(await m.getQuotedObj())
    if (!qse.quoted) return reply('pesan yang anda reply tidak mengandung reply!')
    await qse.quoted.copyNForward(m.chat, false)
break
case 'apakah':
if (!isUser) return reply(mess.only.userB)
					query = args.join(" ")
                    apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					caption = `pertanyaan: ${command} ${query}\njawaban: ${kah}`
					reply(caption)
					break
case 'kapankah':
if (!isUser) return reply(mess.only.userB)
					query = args.join(" ")
                    kapankah = body.slice(1)
					const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					caption = `pertanyaan: ${command} ${query}\njawaban: ${koh}`
					reply(caption)
					break
case 'bisakah':
if (!isUser) return reply(mess.only.userB)
					query = args.join(" ")
                    bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					caption = `pertanyaan: ${command} ${query}\njawaban: ${keh}`
					reply(caption)
					break
case 'kalkulator':
if (!isUser) return reply(mess.only.userB)
try {
				 var mtk = body.slice(12)
				 teks = `${mtk} = ${Math_js.evaluate(mtk)}`
				 reply(teks)
				} catch (e) {
				reply(`${e}`)
				}
				 break
case 'delttt':
                case 'delttc':
                if (!isUser) return reply(mess.only.userB)
if (!isGroup) return reply(mess.only.group)
if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa 
reply('Sukses')
break
case 'tictactoe':
case 'ttt':
if (!isUser) return reply(mess.only.userB)
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('Tag Lawan Anda! ')
if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target Lawan!')
ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
er1 = sender
er2 = ment[0]
angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
id = from
gilir = er2
ky_ttt.push({er1,er2,id,angka,gilir})
dha.sendMessage(from, `*🎳 Memulai Game Tictactoe 🎲*

[@${er2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ketik ${prefix}delttc , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [er2]}})
break
case 'slot':
if (!isUser) return reply(mess.only.userB)
teks = args.join(' ')
		const sotoy = [
		'🍊 : 🍒 : 🍐  LOSE',
		'🍒 : 🔔 : 🍊  LOSE',
		'🍇 : 🍇 : 🍇  LOSE',
		'🍊 : 🍅 : 🔔  LOSE',
		'🔔 : 🍒 : 🍐  LOSE',
		'🔔 : 🍒 : 🍊  LOSE',
        '🍊 : 🍋 : ??  LOSE',
		'🍐 : 🍒 : 🍋  LOSE',
		'🍐 : 🍐 : 🍐  WIN',
		'🍊 : 🍒 : ??  LOSE',
		'🔔 : 🔔 : 🍇  LOSE',
		'🍌 : 🍒 : 🔔  LOSE',
		'🍐 : 🔔 : 🔔  LOSE',
		'🍊 : 🍋 : 🍒  LOSE',
		'🍋 : 🍋 : 🍌  LOSE',
		'🔔 : 🔔 : 🍇  LOSE',
		'🔔 : 🍐 : 🍇  LOSE',
		'🔔 : 🔔 : 🔔  WIN',
		'🍒 : 🍒 : ??  WIN',
		'🍌 : 🍌 : 🍌  WIN'
		]
   const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
	yow = `
[  🎰 | SLOTS ]
-----------------
🍋 : 🍌 : 🍍
${somtoy} ⬅️  
🍅 : 🍌 : 🍍
[  🎰 | SLOTS ]

Keterangan : Jika anda Mendapatkan 3 Buah Sama Berarti Kamu Win

Contoh : 🍌 : 🍌 : 🍌
`
reply(yow)
break
case 'gura':
       case 'gawrgura':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
case 'getbio':
if (!q) return reply(`Example : #getbio @tag`)
if (!isGroup) return reply(mess.only.group)
var p = await dha.getStatus(`${mentionUser}`, MessageType.text)
reply(p.status)
if (p.status == 401) {
reply(`Error bro`)
}
break
case 'upswteks':
if (!isOwner) return reply(mess.only.owner)
if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(10)
                    dha.sendMessage('status@broadcast', teks, MessageType.text)
                    reply(`Sukses upload status:\n${teks}`)
                    break
case 'delchat':
                    if (!isOwner) return reply(mess.only.owner)
                reply('Sukses menghapus chat' + from)
                await sleep(4000)
                dha.modifyChat(from, ChatModification.delete)
                break
case 'clearall':
				if (!isOwner) return reply(mess.only.owner)
					anu = await dha.chats.all()
					dha.setMaxListeners(10)
					for (let _ of anu) {
						dha.clearMessage(_.jid)
					}
					reply('Sukses membersihkan semua pesan')
					break
case 'setppbot':
case 'setbotpp':
									if (!isOwner) return reply(`Khusus owner`)
									if (!isQuotedImage) return reply(`Reply image nya`)
									enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await dha.downloadAndSaveMediaMessage(enmedia)
									await dha.updateProfilePicture(botNumber, media)
									reply('Makasih pp barunya lord 🌝')
									break
case 'setnamabot':
{
									if (!isOwner) return reply(mess.only.owner)
									if (!q) return reply(`Kirim perintah ${prefix}${command} nama\n\nContoh : ${prefix}${command} Ochobot`)
									dha.updateProfileName(q)
									.then((res) => reply('Sukses Lord'))
									.catch((err) => reply('Eror Lord'))
									 }
									break
case 'setbio':
				if (!isOwner) return reply(mess.only.ownerB)
				if (!q) return reply(`Example : ${prefix + command} Tes`)
				dha.setStatus(q)
				reply(`Sukses menganti bio ke : ${args.join(' ')}`)
				break
case 'nano':
if (!isOwner) return reply(mess.only.owner)
if (!q) return reply(`Example : ${prefix + command} index.js`)
anus = fs.readFileSync(`${q}`)
reply(String(anus))
break
case 'bucin':
if (!isUser) return reply(mess.only.userB)
const katakata = [
  "Aku memilih untuk sendiri, bukan karena menunggu yang sempurna, tetapi butuh yang tak pernah menyerah.",
  "Seorang yang single diciptakan bersama pasangan yang belum ditemukannya.",
  "Jomblo. Mungkin itu cara Tuhan untuk mengatakan 'Istirahatlah dari cinta yang salah'.",
  "Jomblo adalah anak muda yang mendahulukan pengembangan pribadinya untuk cinta yang lebih berkelas nantinya.",
  "Aku bukan mencari seseorang yang sempurna, tapi aku mencari orang yang menjadi sempurna berkat kelebihanku.",
  "Pacar orang adalah jodoh kita yang tertunda.",
  "Jomblo pasti berlalu. Semua ada saatnya, saat semua kesendirian menjadi sebuah kebersamaan dengannya kekasih halal. Bersabarlah.",
  "Romeo rela mati untuk juliet, Jack mati karena menyelamatkan Rose. Intinya, kalau tetap mau hidup, jadilah single.",
  "Aku mencari orang bukan dari kelebihannya tapi aku mencari orang dari ketulusan hatinya.",
  "Jodoh bukan sendal jepit, yang kerap tertukar. Jadi teruslah berada dalam perjuangan yang semestinya.",
  "Kalau kamu jadi senar gitar, aku nggak mau jadi gitarisnya. Karena aku nggak mau mutusin kamu.",
  "Bila mencintaimu adalah ilusi, maka izinkan aku berimajinasi selamanya.",
  "Sayang... Tugas aku hanya mencintaimu, bukan melawan takdir.",
  "Saat aku sedang bersamamu rasanya 1 jam hanya 1 detik, tetapi jika aku jauh darimu rasanya 1 hari menjadi 1 tahun.",
  "Kolak pisang tahu sumedang, walau jarak membentang cintaku takkan pernah hilang.",
  "Aku ingin menjadi satu-satunya, bukan salah satunya.",
  "Aku tidak bisa berjanji untuk menjadi yang baik. Tapi aku berjanji akan selalu mendampingi kamu.",
  "Kalau aku jadi wakil rakyat aku pasti gagal, gimana mau mikirin rakyat kalau yang selalu ada dipikiran aku hanyalah dirimu.",
  "Lihat kebunku, penuh dengan bunga. Lihat matamu, hatiku berbunga-bunga.",
  "Berjanjilah untuk terus bersamaku sekarang, esok, dan selamanya.",
  "Rindu tidak hanya muncul karena jarak yang terpisah. Tapi juga karena keinginan yang tidak terwujud.",
  "Kamu tidak akan pernah jauh dariku, kemanapun aku pergi kamu selalu ada, karena kamu selalu di hatiku, yang jauh hanya raga kita bukan hati kita.",
  "Aku tahu dalam setiap tatapanku, kita terhalang oleh jarak dan waktu. Tapi aku yakin kalau nanti kita pasti bisa bersatu.",
  "Merindukanmu tanpa pernah bertemu sama halnya dengan menciptakan lagu yang tak pernah ternyayikan.",
  "Ada kalanya jarak selalu menjadi penghalang antara aku sama kamu, namun tetap saja di hatiku kita selalu dekat.",
  "Jika hati ini tak mampu membendung segala kerinduan, apa daya tak ada yang bisa aku lakukan selain mendoakanmu.",
  "Mungkin di saat ini aku hanya bisa menahan kerinduan ini. Sampai tiba saatnya nanti aku bisa bertemu dan melepaskan kerinduan ini bersamamu.",
  "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
  "Dalam dinginnya malam, tak kuingat lagi; Berapa sering aku memikirkanmu juga merindukanmu.",
  "Merindukanmu itu seperti hujan yang datang tiba-tiba dan bertahan lama. Dan bahkan setelah hujan reda, rinduku masih terasa.",
  "Sejak mengenalmu bawaannya aku pengen belajar terus, belajar menjadi yang terbaik buat kamu.",
  "Tahu gak perbedaan pensi sama wajah kamu? Kalau pensil tulisannya bisa dihapus, tapi kalau wajah kamu gak akan ada yang bisa hapus dari pikiran aku.",
  "Bukan Ujian Nasional besok yang harus aku khawatirkan, tapi ujian hidup yang aku lalui setelah kamu meninggalkanku.",
  "Satu hal kebahagiaan di sekolah yang terus membuatku semangat adalah bisa melihat senyumanmu setiap hari.",
  "Kamu tahu gak perbedaanya kalau ke sekolah sama ke rumah kamu? Kalo ke sekolah pasti yang di bawa itu buku dan pulpen, tapi kalo ke rumah kamu, aku cukup membawa hati dan cinta.",
  "Aku gak sedih kok kalo besok hari senin, aku sedihnya kalau gak ketemu kamu.",
  "Momen cintaku tegak lurus dengan momen cintamu. Menjadikan cinta kita sebagai titik ekuilibrium yang sempurna.",
  "Aku rela ikut lomba lari keliling dunia, asalkan engkai yang menjadi garis finishnya.",
  "PR-ku adalah merindukanmu. Lebih kuat dari Matematika, lebih luas dari Fisika, lebih kerasa dari Biologi.",
  "Cintaku kepadamu itu bagaikan metabolisme, yang gak akan berhenti sampai mati.",
  "Kalau jelangkungnya kaya kamu, dateng aku jemput, pulang aku anter deh.",
  "Makan apapun aku suka asal sama kamu, termasuk makan ati.",
  "Cinta itu kaya hukuman mati. Kalau nggak ditembak, ya digantung.",
  "Mencintaimu itu kayak narkoba: sekali coba jadi candu, gak dicoba bikin penasaran, ditinggalin bikin sakaw.",
  "Gue paling suka ngemil karena ngemil itu enak. Apalagi ngemilikin kamu sepenuhnya...",
  "Dunia ini cuma milik kita berdua. Yang lainnya cuma ngontrak.",
  "Bagi aku, semua hari itu adalah hari Selasa. Selasa di Surga bila dekat denganmu...",
  "Bagaimana kalau kita berdua jadi komplotan penjahat? Aku curi hatimu dan kamu curi hatiku.",
  "Kamu itu seperti kopi yang aku seruput pagi ini. Pahit, tapi bikin nagih.",
  "Aku sering cemburu sama lipstikmu. Dia bisa nyium kamu tiap hari, dari pagi sampai malam.",
  "Hanya mendengar namamu saja sudah bisa membuatku tersenyum seperti orang bodoh.",
  "Aku tau teman wanitamu bukan hanya satu, dan menyukaimu pun bukan hanya aku.",
  "Semenjak aku berhenti berharap pada dirimu, aku jadi tidak semangat dalam segala hal..",
  "Denganmu, jatuh cinta adalah patah hati paling sengaja.",
  "Sangat sulit merasakan kebahagiaan hidup tanpa kehadiran kamu disisiku.",
  "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
  "Sendainya kamu tahu, sampai saat ini aku masih mencintaimu.",
  "Terkadang aku iri sama layangan..talinya putus saja masih dikejar kejar dan gak rela direbut orang lain...",
  "Aku tidak tahu apa itu cinta, sampai akhirnya aku bertemu denganmu. Tapi, saat itu juga aku tahu rasanya patah hati.",
  "Mengejar itu capek, tapi lebih capek lagi menunggu\nMenunggu kamu menyadari keberadaanku...",
  "Jangan berhenti mencinta hanya karena pernah terluka. Karena tak ada pelangi tanpa hujan, tak ada cinta sejati tanpa tangisan.",
  "Aku punya sejuta alasan unutk melupakanmu, tapi tak ada yang bisa memaksaku untuk berhenti mencintaimu.",
  "Terkadang seseorang terasa sangat bodoh hanya untuk mencintai seseorang.",
  "Kamu adalah patah hati terbaik yang gak pernah aku sesali.",
  "Bukannya tak pantas ditunggu, hanya saja sering memberi harapan palsu.",
  "Sebagian diriku merasa sakit, Mengingat dirinya yang sangat dekat, tapi tak tersentuh.",
  "Hal yang terbaik dalam mencintai seseorang adalah dengan diam-diam mendo akannya.",
  "Kuharap aku bisa menghilangkan perasaan ini secepat aku kehilanganmu.",
  "Demi cinta kita menipu diri sendiri. Berusaha kuat nyatanya jatuh secara tak terhormat.",
  "Anggaplah aku rumahmu, jika kamu pergi kamu mengerti kemana arah pulang. Menetaplah bila kamu mau dan pergilah jika kamu bosan...",
  "Aku bingung, apakah aku harus kecewa atu tidak? Jika aku kecewa, emang siapa diriku baginya?\n\nKalau aku tidak kecewa, tapi aku menunggu ucapannya.",
  "Rinduku seperti ranting yang tetap berdiri.Meski tak satupun lagi dedaunan yang menemani, sampai akhirnya mengering, patah, dan mati.",
  "Kurasa kita sekarang hanya dua orang asing yang memiliki kenangan yang sama.",
  "Buatlah aku bisa membencimu walau hanya beberapa menit, agar tidak terlalu berat untuk melupakanmu.",
  "Aku mencintaimu dengan segenap hatiku, tapi kau malah membagi perasaanmu dengan orang lain.",
  "Mencintaimu mungkin menghancurkanku, tapi entah bagaimana meninggalkanmu tidak memperbaikiku.",
  "Kamu adalah yang utama dan pertama dalam hidupku. Tapi, aku adalah yang kedua bagimu.",
  "Jika kita hanya bisa dipertemukan dalam mimpi, aku ingin tidur selamanya.",
  "Melihatmu bahagia adalah kebahagiaanku, walaupun bahagiamu tanpa bersamaku.",
  "Aku terkadang iri dengan sebuah benda. Tidak memiliki rasa namun selalu dibutuhkan. Berbeda dengan aku yang memiliki rasa, namun ditinggalkan dan diabaikan...",
  "Bagaimana mungkin aku berpindah jika hanya padamu hatiku bersinggah?",
  "Kenangan tentangmu sudah seperti rumah bagiku. Sehingga setiap kali pikiranku melayang, pasti ujung-ujungnya akan selalu kembali kepadamu.",
  "Kenapa tisue bermanfaat? Karena cinta tak pernah kemarau. - Sujiwo Tejo",
  "Kalau mencintaimu adalah kesalahan, yasudah, biar aku salah terus saja.",
  "Sejak kenal kamu, aku jadi pengen belajar terus deh. Belajar jadi yang terbaik buat kamu.",
  "Ada yang bertingkah bodoh hanya untuk melihatmu tersenyum. Dan dia merasa bahagia akan hal itu.",
  "Aku bukan orang baik, tapi akan belajar jadi yang terbaik untuk kamu.",
  "Kita tidak mati, tapi lukanya yang membuat kita tidak bisa berjalan seperti dulu lagi.",
  "keberadaanmu bagaikan secangkir kopi yang aku butuhkan setiap pagi, yang dapat mendorongku untuk tetap bersemangat menjalani hari.",
  "Aku mau banget ngasih dunia ke kamu. Tapi karena itu nggak mungkin, maka aku akan kasih hal yang paling penting dalam hidupku, yaitu duniaku.",
  "Mending sing humoris tapi manis, ketimbang sok romantis tapi akhire tragis.",
  "Ben akhire ora kecewa, dewe kudu ngerti kapan waktune berharap lan kapan kudu mandeg.",
  "Aku ki wong Jowo seng ora ngerti artine 'I Love U'. Tapi aku ngertine mek 'Aku tresno awakmu'.",
  "Ora perlu ayu lan sugihmu, aku cukup mok setiani wes seneng ra karuan.",
  "Cintaku nang awakmu iku koyok kamera, fokus nang awakmu tok liyane mah ngeblur.",
  "Saben dino kegowo ngimpi tapi ora biso nduweni.",
  "Ora ketemu koe 30 dino rasane koyo sewulan.",
  "Aku tanpamu bagaikan sego kucing ilang karete. Ambyar.",
  "Pengenku, Aku iso muter wektu. Supoyo aku iso nemokne kowe lewih gasik. Ben Lewih dowo wektuku kanggo urip bareng sliramu.",
  "Aku ora pernah ngerti opo kui tresno, kajaba sak bare ketemu karo sliramu.",
  "Cinta aa ka neng moal leungit-leungit sanajan aa geus kawin deui.",
  "Kasabaran kaula aya batasna, tapi cinta kaula ka anjeun henteu aya se epna.",
  "Kanyaah akang moal luntur najan make Bayclean.",
  "Kenangan endah keur babarengan jeung anjeun ek tuluy diinget-inget nepi ka poho.",
  "Kuring moal bakal tiasa hirup sorangan, butuh bantosan jalmi sejen.",
  "Nyaahna aa ka neg teh jiga tukang bank keur nagih hutang (hayoh mumuntil).",
  "Kasabaran urang aya batasna, tapi cinta urang ka maneh moal aya beakna.",
  "Hayang rasana kuring ngarangkai kabeh kata cinta anu aya di dunya ieu, terus bade ku kuring kumpulkeun, supaya anjeun nyaho gede pisan rasa cinta kuring ka anjeun.",
  "Tenang wae neng, ari cinta Akang mah sapertos tembang krispatih; Tak lekang oleh waktu.",
  "Abdi sanes jalmi nu sampurna pikeun anjeun, sareng sanes oge nu paling alus kanggo anjeun. Tapi nu pasti, abdi jalmi hiji-hijina nu terus emut ka anjeun.",
  "Cukup jaringan aja yang hilang, kamu jangan.",
  "Sering sih dibikin makan ati. Tapi menyadari kamu masih di sini bikin bahagia lagi.",
  "Musuhku adalah mereka yang ingin memilikimu juga.",
  "Banyak yang selalu ada, tapi kalo cuma kamu yang aku mau, gimana?",
  "Jam tidurku hancur dirusak rindu.",
  "Cukup China aja yang jauh, cinta kita jangan.",
  "Yang penting itu kebahagiaan kamu, aku sih gak penting..",
  "Cuma satu keinginanku, dicintai olehmu..",
  "Aku tanpamu bagaikan ambulans tanpa wiuw wiuw wiuw.",
  "Cukup antartika aja yang jauh. Antarkita jangan."
]
               const hata = katakata[Math.floor(Math.random() * katakata.length)]
		       buttons = [{buttonId:`${prefix}bucin`,buttonText:{displayText:'Try Again'},type:1}]
               buttonsMessage = { contentText: `${hata}`, footerText: `WhatsApp - bot`,  buttons: buttons, headerType: 1 }
               prep = await dha.prepareMessageFromContent(from,{buttonsMessage}, {quoted: mek})
               dha.relayWAMessage(prep)
					
break
case 'leave':
				if (!isGroup) return reply(mess.only.group)
				if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
				dha.updatePresence(from, Presence.composing)
				 dha.groupLeave(from)
			break
case 'delete':
case 'del':
case 'd':
try {
					if (!isGroup)return reply(mess.only.group)
					if (!isUser) return reply(mess.only.userB)
					if (!isGroupAdmins) return reply(mess.only.admin)
					dha.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					} catch (e) {
					reply(`Tag pesan bot!`)
					}
					break
case 'join': 
                  reply(`Anda harus sewa bot!`)
                  break
case 'pinterest':
if (!isUser) return reply(mess.only.userB)
reply(mess.wait)
try {
            if(!q) return reply(`Example : ${prefix + command} Ayam`)
            let pin = await pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await dha.sendMessage(from,di,image,{quoted: mek , thumbnail: Buffer.alloc(0), caption: `*Result* : ${ac}`})
            } catch (e) {
            reply(`Maaf result ${prefix}${command} ${q} tidak ada`)
            }
break
case 'cersex':  
			       if (!isUser) return reply(mess.only.userB)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cersex`)                   
                   anu2 = `➻ *JUDUL* : ${anu.result.judul}\n`
                   anu2 += `➻ *NAMA* : ${anu.result.cersex}\n`
                   reply(anu2)
                   break
case 'liputan6':
			    if (!isUser) return reply(mess.only.userB)
			reply(mess.wait)
                data = await fetchJson(`https://api.lolhuman.xyz/api/liputan6?apikey=${lolkey}`)
                teks = `「 *LIPUTAN6* 」\n`
                for (let i of data.result) {
				teks += ` *Title* : ${i.title}\n*Url* : ${i.link}\n*Desc* : ${i.desc}\n*Kategori* : ${i.category}\n*Publish* : ${i.publish}`
				}
				reply(teks.trim())
                break
case 'get':
case 'fetch':
if(!q) return reply('linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            reply(bu)
            })   
            break
case 'cnn':
if (!isUser) return reply(mess.only.userB)
reply(mess.wait)
                data = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia?apikey=${lolkey}`)
                teks = `「 *CNN* 」\n`
                for (let i of data.result) {
				teks += ` \n*Title* : ${i.judul}\n*Url* : ${i.link}\nPoster : ${i.poster}\n`
				}
				reply(teks.trim())
                break
case 'detik':
if (!isUser) return reply(mess.only.userB)
reply(mess.wait)
                data = await fetchJson(`https://api.lolhuman.xyz/api/detik?apikey=${lolkey}`)
                teks = `「 *DETIK* 」\n`
                for (let i of data.result) {
				teks += ` \n*Title* : ${i.title}\n*Url* : ${i.link}\n*Img* : ${i.thumbnail}\n*Waktu* : ${i.time}\n\n`
				}
				reply(teks.trim())
                break
case 'animesaran':
if (!isUser) return reply(mess.only.userB)
		        dha.sendMessage(from, animesaran(), text, {quoted: mek})
		        break
case 'clearall':
try {
				anu = await dha.chats.all()
				dha.setMaxListeners(25)
				dha.deleteChat(anu.jid)
				reply(mek.clears())
				} catch (e) { 
				reply(`${e}`)
				}
				break
case 'ping': case 'botstatus': case 'statusbot': {
	if (!isUser) return reply(mess.only.userB)
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                privat = dha.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
                totalCht = await dha.chats.all()
                groups = dha.chats.array.filter(v => v.jid.endsWith('g.us'))
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${waktu(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}

_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                 reply(respon)
            }
            break
case 'linkgc':
case 'grouplink':
case 'linkgroup':
 if (!isUser) return reply(mess.only.userB)
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)   
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									linkgc = await dha.groupInviteCode (from)
									yeh = `*https://chat.whatsapp.com/${linkgc}*`
									dha.sendMessage(from, {text: yeh,
									matchedText: 'https://chat.whatsapp.com/' + linkgc, 
									canonicalUrl: `https://chat.whatsapp.com/${linkgc}`, 
									description: `https://chat.whatsapp.com/${linkgc}`, 
									title: `${groupName}`, 
									jpegThumbnail: thumbnail}, 'extendedTextMessage', { detectLinks: false, contextInfo: {mentionedJid: [yeh]}, quoted: mek})
									break
case 'setname':
if (!isUser) return reply(mess.only.userB)
if (!q) return reply(`_Example : #setname nama group_`)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
dha.groupUpdateSubject(from, `${args.join(' ')}`)
dha.sendMessage(from, `\`\`\`✓Sukses Mengganti Nama Group Menjadi\`\`\` *${args.join(' ')}*`, text, { quoted: mek})
break
case 'promote' :
if (!isUser) return reply(mess.only.userB)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply(`_Example : ${prefix}promote @tag_`)
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda menjdi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
dha.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
dha.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isUser) return reply(mess.only.userB)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply(`_Example : ${prefix}demote @tag_`)
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda tidak menjadi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
dha.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
dha.groupDemoteAdmin(from, mentioned)
}
break
case 'dare':
if (!isUser) return reply(mess.only.userB)
					const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					dha.sendMessage(from, tod, image, { quoted: mek, thumbnail: Buffer.alloc(0), caption: '*Dare*\n\n'+ der })
					break
case 'truth':
if (!isUser) return reply(mess.only.userB)
					const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu mekatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah dimeket apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					dha.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek, thumbnail: Buffer.alloc(0) })
					break
case 'faktaunik':
if (!isUser) return reply(mess.only.userB)
fakta = await fetchJson(`https://api.lolhuman.xyz/api/random/faktaunik?apikey=${lolkey}`)
reply(fakta.result)
break
case 'quoteislami':
if (!isUser) return reply(mess.only.userB)
quoteis = await fetchJson(`https://api.lolhuman.xyz/api/quotes/islami?apikey=${lolkey}`)
reply(`_${quoteis.result}_`)
break
case 'quotedilan':
if (!isUser) return reply(mess.only.userB)
quoteis = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${lolkey}`)
reply(`${quoteis.result}`)
break
case 'artimimpi':
if (!isUser) return reply(mess.only.userB)
if (!q) return reply(`Example : ${prefix + command} Colmek`)
mimpi = await fetchJson(`https://docs-jojo.herokuapp.com/api/artimimpi?q=${args.join(' ')}`)
reply(mimpi.result)
break
case 'kisahnabi':
if (!isUser) return reply(mess.only.userB)
if (!q) return await reply(`Example: ${prefix + command} Muhammad`)
kisah = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${args.join(' ')}?apikey=${lolkey}`)
teks = `Nama : ${kisah.result.name}\nUmur : ${kisah.result.age}\nTahun lahir : ${kisah.result.thn_kelahiran}\nPlace : ${kisah.result.place}\n\nStory : ${kisah.result.story}`
reply(teks)
break
case 'kompas':
			    if (!isUser) return reply(mess.only.userB)
                data = await fetchJson(`http://hadi-api.herokuapp.com/api/kompas`)
                teks = `「 *KOMPAS* 」\n`
                for (let i of data.result) {
				teks += ` \n*Title* : ${i.title}\n*Url* : ${i.url}\n*Img* : ${i.img}\n*Waktu* : ${i.time}\n\n`
				}
				reply(teks.trim())
                break
case 'jadwalsholat':  
if (!isUser) return reply(mess.only.userB)
                   if (!q) return await reply(`Example: ${prefix + command} Yogyakarta`)
                   reply(mess.wait)
                   F = args.join(' ')
                   anus = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${F}?apikey=${lolkey}`)
                   anus1 = `➻ *IMSYAK* : ${anus.result.imsak}\n`
                   anus1 += `➻ *SUBUH* : ${anus.result.subuh}\n`
                   anus1 += `➻ *DHUHA* : ${anus.result.dhuha}\n`
                   anus1 += `➻ *DZUHUR* : ${anus.result.dzuhur}\n`
                   anus1 += `➻ *ASHAR* : ${anus.result.ashar}\n`
                   anus1 += `➻ *MAGRHRIB* : ${anus.result.maghrib}\n`
                   anus1 += `➻ *ISYA* : ${anus.result.isya}\n` 
                   reply(anus1)
                   break
case 'merdeka':
if (!isUser) return reply(mess.only.userB)
data = await merdeka()
datanya = data[Math.floor(Math.random(), data.length)]
buffer = await getBuffer(datanya.thumb)
result = `*Title* : ${datanya.title}\n*Upload* : ${datanya.upload_date}\n*Link* : ${datanya.link}`
dha.sendMessage(from, buffer, image, {quoted: mek, caption: result, thumbnail: Buffer.alloc(0)})
break
case 'artinama': 
if (!isUser) return reply(mess.only.userB)
if (!q) return reply(`Example : ${prefix + command} wandy`)
reply(mess.wait)
data = await artinama(q)
reply(data)
break
case 'namaninja':
if (!isUser) return reply(mess.only.userB)
if (!q) return reply(`Example : ${prefix + command} wandy`)
reply(mess.wait)
data = await namaninja(q)
reply(data)
break
case 'blackpill':
if (!isUser) return reply(mess.only.userB)
if (!q) return reply(`Example : ${prefix + command} Wibu`)
reply(mess.wait)
data = await blackpill(q)
reply(data)
break
case 'wiki':
if (!isUser) return reply(mess.only.userB)
if(!q) return reply(`Example : ${prefix}${command} ff`)
reply(mess.wait)
teks = args.join(' ')
ressss = await wiki(teks).catch(e => {
return reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
}) 
result = `*Judul :* ${ressss[0].judul}
*Wiki :* ${ressss[0].wiki}`
sendFileFromUrl(ressss[0].thumb, image, {quoted: mek, thumbnail: Buffer.alloc(0), caption: result}).catch(e => {
  reply(result)
})
break
case 'playstore':
            if (!isUser) return reply(mess.only.userB)
            if(!q) return reply(`Example : ${prefix}${command} ff`)
            reply(mess.wait)
            let play = await playstore(q)
            let store = '\n'
            for (let i of play){
            store += `\n*[ _PLAY STORE_ ] *\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n`
            }
            reply(store)
            break
case 'hentai':
if (!isUser) return reply(mess.only.userB)
reply(`Maaf fitur ini sementara tidak dapat di gunakan`)
/*let data4 = (await fetchJson(`https://nekos.life/api/v2/img/hentai`))
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(data4.url))
buttons = [{buttonId:`#hentai`,buttonText:{displayText:`⫹⫺ ${command} ⫹⫺`},type:1}]
imageMsg = ( await dha.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:'Hentai Anime', imageMessage: imageMsg,
contentText:`Klick Tombol Dibawah Untuk Menampilkan Gambar Berikutnya`,buttons,headerType:4}
prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
dha.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)
*/
break
case 'tovideo':
if (!isUser) return reply(mess.only.userB)
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
reply(mess.wait)
 encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               mediaaa = await dha.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               dha.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: mek, caption: mess.success})
               fs.unlinkSync(mediaaa)
                     } else {
               reply(`Example : ${prefix + command} replystickervideo`)
}
break
case 'bc':
      case 'broadcast':
             if (!isOwner) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
             anu = await dha.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await dha.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             dha.sendMessage(_.jid, bc, image, {quoted:freply,caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
dha.sendMessage(_.jid, 
			{"contentText": `*「 Siaran Ochobot」*\n#Ijin Siaran\n*Isi Pesan :* ${body.slice(4)}`,
			"footerText": 'Ochobot',
			"buttons": [
			{"buttonId": `${prefix}menu`,
			"buttonText": {"displayText": "LIST MENU"
			},"type": "RESPONSE"}
			], "headerType": 1,
			}, MessageType.buttonsMessage )
}
             reply('Suksess broadcast')
}
break
case 'setdesc':
if (!isUser) return reply(mess.only.userB)
if (!q) return reply(`_Usage : ${prefix}setdesc_\n_Example : #setdesc teksnya`)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
dha.groupUpdateDescription(from, `${body.slice(9)}`)
dha.sendMessage(from, `\`\`\`✓Sukses Mengganti Deskripsi Group\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: mek})
break
case 'hidetag':
if (!isUser) return reply(mess.only.userB)
if (!q) return reply(`_Example : #hidetag teksnya_`)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
var value = body.slice(9)
var group = await dha.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: mek
}
dha.sendMessage(from, options, text)
break
case 'sticker':
case 'stiker':
case 's':
if (!isUser) return reply(mess.only.userB)
reply(mess.wait)
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await dha.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
}).on('error', function (err) {console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.err.api)
})
.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											dha.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await dha.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							reply(mess.wait)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											dha.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
break
case 'exif':
                    if (!isOwner) return reply(mess.only.owner)
                    if (!q) return reply(`Example : ${prefix + command} wandy|Gans`)
					const exifff = `${args.join(' ')}`
					const namaPack = exifff.split('|')[0]
					const authorPack = exifff.split('|')[1]
					exif.create(namaPack, authorPack)
					await reply('Done gan')
				
break
case 'tomp3':
if (!isUser) return reply(mess.only.userB)
if (!isQuotedVideo) return reply(`Example : ${prefix + command} replyvideonya`)
reply(`Sedang di proses, akan memakan waktu 1 menit`)
encmedianya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
medianya = await dha.downloadAndSaveMediaMessage(encmedianya, './database/media_user')
ran = getRandom('.mp4')
exec(`ffmpeg -i ${medianya} ${ran}`, (err) => {
fs.unlinkSync(medianya)
if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
bufferlkj = fs.readFileSync(ran)
dha.sendMessage(from, bufferlkj, audio, { mimetype: 'audio/mp4', quoted: mek})
fs.unlinkSync(ran)
})
break
case 'toimg':
if (!isUser) return reply(mess.only.userB)
if (!isQuotedSticker) return reply(`Example : ${prefix + command} replystickernya`)
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await dha.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
buffer = fs.readFileSync(ran)
dha.sendMessage(from, buffer, image, {quoted: mek, caption: `Nih kak`, thumbnail: Buffer.alloc(0)})
fs.unlinkSync(ran)
})
break
case 'attp':
if (!isUser) return reply(mess.only.userB)
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
dha.sendMessage(from, buffer, sticker, { quoted: mek })
break
case 'attp2':
if (!isUser) return reply(mess.only.userB)
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/attp2?apikey=${lolkey}&text=${encodeURI(q)}`)
dha.sendMessage(from, buffer, sticker, { quoted: mek })
break
case 'ttp':
if (!isUser) return reply(mess.only.userB)
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/ttp?apikey=${lolkey}&text=${encodeURI(q)}`)
dha.sendMessage(from, buffer, sticker, { quoted: mek })
break
case 'ttp2':
if (!isUser) return reply(mess.only.userB)
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/ttp2?apikey=${lolkey}&text=${encodeURI(q)}`)
dha.sendMessage(from, buffer, sticker, { quoted: mek })
break
case 'ttp3':
if (!isUser) return reply(mess.only.userB)
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/ttp3?apikey=${lolkey}&text=${encodeURI(q)}`)
dha.sendMessage(from, buffer, sticker, { quoted: mek })
break
case 'ttp4':
if (!isUser) return reply(mess.only.userB)
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/ttp4?apikey=${lolkey}&text=${encodeURI(q)}`)
dha.sendMessage(from, buffer, sticker, { quoted: mek })
break
case 'igstalk':
try {
            if (!q) return reply(`Example : ${prefix + command} Aci game spot`)
            reply(mess.wait)
            Y = await igstalk(`${args.join(' ')}`)
            console.log(Y)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            } catch (e) {
           reply(`*Username yang anda masukan tidak ada!* `)
           }
            break
case 'readmore':
					if (!q) return reply(`Example : ${prefix + command} Woi/iya`)
					var kls = body.slice(9)
					var has = kls.split("/")[0];
					var kas = kls.split("/")[1];
					dha.sendMessage(from, `${has}‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎${kas}` , text, { quoted: mek })
					break
case 'trendtwit':
if (!isUser) return reply(mess.only.userB)
reply(mess.wait)
trend = await trendtwit()
console.log(trend)
teks = `「 *TRENDTWITTER* 」\n`
for (let i of trend.result) {
teks += `\n*Rank* : ${i.rank}\n*Hastag* : ${i.hastag}\n*Tweet* : ${i.tweet}\n`
}
reply(teks.trim())
break
case 'linkwa':
if (!isUser) return reply(mess.only.userB)
if (!q) return reply(`Example : ${prefix}${command} wibu`)
reply(mess.wait)
linkwaa = await linkwa(`${q}`)
f = ``
for (let i of linkwaa) {
f += `GroupWhatsApp
*Nama : ${i.nama}
*Link* : ${i.link}\n\n`
}
veler = f.trim()
reply(veler)
break
case 'tiktoksearch':
if (!isUser) return reply(mess.only.userB)
if (!q) return reply(`Example : ${prefix}tiktoksearch wandy_gan`)
reply(mess.wait)
data = await tiktoksearch(q)
teks = `「 *TIKTOKSEARCH* 」\n`
for (let i of data.result) {
teks += `\n*User* : ${i.user}\n*Username* : ${i.username}\n*Url* : ${i.user_url}\n`
}
reply(teks.trim())
break
case 'volume':
if (!isUser) return reply(mess.only.userB)
if (!isQuotedAudio) return reply(`Example : ${prefix}volume tag audio`)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await dha.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "volume=10" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
audionya = fs.readFileSync(ran)
dha.sendMessage(from, audionya, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:mek})
fs.unlinkSync(ran)
})
break
case 'simi':
if (!isUser) return reply(mess.only.userB)
if (!q) return reply(`Example : ${prefix}simi halo simi`)
simi = await fetchJson(`https://api.lolhuman.xyz/api/simi?apikey=${lolkey}&text=${args.join(' ')}`)
reply(`${simi.result}`)
break
case 'stickersearch':
if (!isUser) return reply(mess.only.userB)
if (!q) return reply(`Example : ${prefix + command} patrick`)
reply(mess.wait)
stik = await stickerdown(`${q}`)
reply(mess.wait)
reply(`*Title* : ${stik.title}\n*Author* : ${stik.author}\n*Author_link* : ${stik.author_link}\n\n_Tunggu sedang mengirim sticker!_`)
let linkstic = stik.sticker[Math.floor(Math.random(), stik.sticker.length)]
sendWebp(from, `${linkstic}`)
break
case 'patrick':
if (!isUser) return reply(mess.only.userB)
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
case 'doge':
if (!isUser) return reply(mess.only.userB)
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
case 'animestick':
case 'stickeranime':
case 'stikeranime':
if (!isUser) return reply(mess.only.userB)
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
             .then(res => res.text())
             .then(body => {
              let todd = body.split("\n");
              let pjrr = todd[Math.floor(Math.random() * todd.length)];
              sendWebp(from, pjrr)
              }
              )
   break
case 'google':
case 'googlesearch':
case 'ggs':
if (!isUser) return reply(mess.only.userB)
if (!q) return reply(`Example : ${prefix + command} Naisa`)
teks = args.join(' ')
reply(mess.wait)
resss = await ggs({'query' : `${teks}`})
kant = ``
for (let i of resss) {
kant += `\n*Judul* : ${i.title}
*Link* : ${i.link}
*Keterangan* : ${i.snippet}\n`
}
var akhir = kant.trim()
reply(akhir)
break
case 'gimage':
case 'googleimage':
if (!isUser) return reply(mess.only.userB)
if (!q) return reply(`Example : ${prefix + command} Naisa`)
reply(mess.wait)
teks = args.join(' ')
ressss = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail: Buffer.alloc(0), caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
break
case 'hilih':
if (!isUser) return reply(mess.only.userB)
if (!q) return reply(`Example : ${prefix + command} Woi`)
teks = args.join(' ')
hilih = await fetchJson(`http://hadi-api.herokuapp.com/api/hilih?teks=${args.join(' ')}`)
reply(hilih.result)
break
case 'besarkecil':
if (!isUser) return reply(mess.only.userB)
if (!q) return reply(`Example : ${prefix + command} Woi`)
teks = args.join(' ')
hilih = await fetchJson(`https://api.lolhuman.xyz/api/upperlower?apikey=${lolkey}&text=${args.join(' ')}`)
reply(hilih.result)
break
case '4l4y':
if (!isUser) return reply(mess.only.userB)
if (!q) return reply(`Example : ${prefix + command} alay`)
teks = args.join(' ')
hilih = await fetchJson(`https://api.lolhuman.xyz/api/alay?apikey=${lolkey}&text=${args.join(' ')}`)
reply(hilih.result)
break
case 'halah':
if (!isUser) return reply(mess.only.userB)
if (!q) return reply(`Example : ${prefix + command} Woi`)
teks = args.join(' ')
hilih = await fetchJson(`http://hadi-api.herokuapp.com/api/halah?teks=${args.join(' ')}`)
reply(hilih.result)
break
case 'heleh':
if (!isUser) return reply(mess.only.userB)
if (!q) return reply(`Example : ${prefix + command} Woi`)
teks = args.join(' ')
hilih = await fetchJson(`http://hadi-api.herokuapp.com/api/heleh?teks=${args.join(' ')}`)
reply(hilih.result)
break
case 'watak':
if (!isUser) return reply(mess.only.userB)
                    if (!q) return reply(`Example : ${prefix + command} Nama`)
                    watak = args.join(' ')
					wa =["penyayang","pemurah","Pemarah","Pemaaf","Penurut","Baik","baperan","Baik Hati","penyabar","Uwu","top deh, pokoknya","Suka Membantu"]
					const tak = wa[Math.floor(Math.random() * wa.length)]
					teks = `*Watak* : ${watak}\n*Jawaban* : ${tak}`
					reply(teks)
					break 
case 'ssweb':
case 'ss':
if (!isUser) return reply(mess.only.userB)
                if (!q) return reply(`Example : ${prefix}ssweb https://`)
                reply(mess.wait)
                teks = args.join(' ')
                buff = await getBuffer(`http://hadi-api.herokuapp.com/api/ssweb?url=${teks}&device=phone&full=on`)
                dha.sendMessage(from, buff, image, {quoted: mek, thumbnail: Buffer.alloc(0)})
                break
case 'bass':              
if (!isUser) return reply(mess.only.userB) 
if (!isQuotedAudio) return reply(`Example : ${prefix}bass tag audio`)
reply(mess.wait)
encmediao = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediao = await dha.downloadAndSaveMediaMessage(encmediao)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${mediao} -af equalizer=f=200:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediao)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						dha.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:mek})
						fs.unlinkSync(ran)
						})
					    break
case 'imgtourl':
if (!isUser) return reply(mess.only.userB)
reply(mess.wait)
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await dha.downloadMediaMessage(boij)
            res = await upload(owgi)
            buff = await getBuffer(res)
            dha.sendMessage(from, buff, image, {quoted: mek, caption: `Result : ${res}`, thumbnail: Buffer.alloc(0)})
            console.log(res)
            } else {
            reply('kirim gambar dengan caption #imgtourl atau reply gambar yang sudah dikirim')
            }
            break
case 'font':
if (!isUser) return reply(mess.only.userB)
if (!q) return reply(`Example ${prefix}font teks`)
teks = args.join(' ')
data = await fetchJson(`http://hadi-api.herokuapp.com/api/font?teks=${teks}`)
reply(`_${data.result}_`)
break
case 'font2':
if (!isUser) return reply(mess.only.userB)
if (!q) return reply(`Example ${prefix}font2 teks`)
teks = args.join(' ')
data = await fetchJson(`http://hadi-api.herokuapp.com/api/font2?teks=${teks}`)
reply(`_${data.result}_`)
break
case 'yts':
case 'ytsearch':
if (!isUser) return reply(mess.only.userB)
              if (!q) return reply(`Example : ${prefix + command} Aci game spot`)
              reply(mess.wait)
              try {
              res = await yts(q)
              a = `*Youtube Search 🔎*\n`
for (let i of res.all) {
a += `
Title : ${i.title}
Views : ${i.views}
Upload : ${i.ago}
Durasi : ${i.timestamp}
Channel : ${i.author.name}
Link : ${i.url}\n`
}
               b = a.trim()
               sendFileFromUrl(res.all[0].image, image, {quoted: mek, thumbnail: Buffer.alloc(0), caption: b})
               } catch (e) {
               console.log(e)
               reply(`*Video tidak di temukan!*`)
}
               
break
case 'ytstalk':
if (!isUser) return reply(mess.only.userB)
if (!q) return reply(`Example : ${prefix + command} Aci game spot`)
reply(mess.wait)
try {
if (!q) return reply(`Example : ${prefix + command} Aci game spot`)
stalking = await fetchJson(`https://leyscoders-api.herokuapp.com/api/yt-stalk?q=${args.join(' ')}&apikey=${ley}`)
k = stalking.result
teks = 
`Channel : ${k.channel}
Subscriber : ${k.subscriber_count}
Verified : ${k.is_verified}
Family : ${k.is_family}
Link : ${k.link}
Image : ${k.image}

Desc : ${k.desc}`
buffer = await getBuffer(k.image)
dha.sendMessage(from, buffer, image, { quoted: mek, caption: teks, thumbnail: Buffer.alloc(0)})
} catch (e) {
reply(`404: not found`)
}
break
case 'covid':
if (!isUser) return reply(mess.only.userB)
covid().then(res => {
reply(`*COVIDINDO*\n- Positif : ${res.indo.indoP}\n- Sembuh : ${res.indo.indoS}\n- Meninggal : ${res.indo.indoM}\n- Update : ${res.indo.indoU}\n`)
})
break
case 'infogempa':
if (!isUser) return reply(mess.only.userB)
reply(mess.wait)
hasil = await gempa()
teks = `*INFO GEMPA*
*Wilayah* : ${hasil.Wilayah}
*Lintang* : ${hasil.Lintang}
*Bujur* : ${hasil.Bujur}
*Magnitudo* : ${hasil.Magnitudo}
*Kedalaman* : ${hasil.Kedalaman}
*Map* : ${hasil.Map}`
buff = await getBuffer(hasil.Map)
dha.sendMessage(from, buff, image, {quoted: mek, caption: teks, thumbnail: Buffer.alloc(0)})
break
case 'cutly':
if (!isUser) return reply(mess.only.userB)
if (!q) return reply(`Example : ${prefix + command} https://youtube.com`)
if (args[0].startsWith('www')) return reply('Url harus berupa https://url')
reply(mess.wait)
try {
link = args[0]
anus = await fetchJson(`http://hadi-api.herokuapp.com/api/cuttly?url=${link}`)
reply(`${anus.result}`)
console.log(anus.result)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
break
case 'bitly':
if (!isUser) return reply(mess.only.userB)
if (!q) return reply(`Example : ${prefix + command} https://youtube.com`)
if (args[0].startsWith('www')) return reply('Url harus berupa https://url')
reply(mess.wait)
try {
link = args[0]
anus = await fetchJson(`http://hadi-api.herokuapp.com/api/bitly?url=${link}`)
reply(`${anus.result}`)
console.log(anus.result)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
break
case 'shorturl':
if (!isUser) return reply(mess.only.userB)
if (!q) return reply(`Example : ${prefix + command} https://youtube.com`)
if (args[0].startsWith('www')) return reply('Url harus berupa https://url')
reply(mess.wait)
try {
link = args[0]
anus = await fetchJson(`https://docs-jojo.herokuapp.com/api/shorturl-at?url=${link}`)
reply(`${anus.result}`)
console.log(anus.result)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
break
case 'tinyurl':
if (!isUser) return reply(mess.only.userB)
if (!q) return reply(`Example : ${prefix + command} https://youtube.com`)
if (args[0].startsWith('www')) return reply('Url harus berupa https://url')
reply(mess.wait)
try {
link = args[0]
anus = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anus.data}`)
console.log(anus.data)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
break
case 'donasi':
if (!isUser) return reply(mess.only.userB)
reply(`Donasi seiklasnya\nPulsa : 082125039170`)
break
case 'owner':
if (!isUser) return reply(mess.only.userB)
let inilist = []
for (let i of ownerNumber) {
let vname = dha.contacts[i] != undefined ? dha.contacts[i].vname || dha.contacts[i].notify : undefined
inilist.push({
"displayName": 'dha',
"vcard": 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Creator ${ownername} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ 'END:VCARD'.trim()
})
}
hehe = await dha.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: mek})
button = [
  {buttonId: '#menu', buttonText: {displayText: '☰ ALLMENU'}, type: 1}
]
 buttons = {
    contentText: 'Nih Nomer Owner Ku Mau Tau Tentang Apa Ya ?',
    footerText: 'Owner ku ni boss sengol dong',
    buttons: button,
    headerType: 1
}
await dha.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: mek})
break
case 'report':
if (!isUser) return reply(mess.only.userB)
if (!q) return reply(`_Example : ${prefix}report fitur nulis error gan_`)
let pesan = body.slice(8)
if (pesan.length > 300) return dha.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, { quoted: mek })
var nomor = mek.participant
let teks1 = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`
var options = {
text: teks1,
contextInfo: { mentionedJid: [nomor] },
}
dha.sendMessage(`6281290565513@s.whatsapp.net`, options, text, { quoted: mek})
reply('Masalah Telah Di Laporkan Ke Owner BOT, Mohon Tunggu Untuk Proses Perbaikan')
break
case 'request':
if (!isUser) return reply(mess.only.userB)
if (!q) return reply(`_Example : ${prefix}request fitur hentai`)
let pesanloh = body.slice(8)
if (pesanloh.ength > 300) return dha.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, { quoted: mek })
var nomor = mek.participant
let teksy = `*[REQUEST]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesanloh}`
var options = {
text: teksy,
contextInfo: { mentionedJid: [nomor] },
}
dha.sendMessage(`6281290565513@s.whatsapp.net`, options, text, { quoted: mek})
reply('Request Telah Di Laporkan Ke Owner BOT, Mohon Tunggu Untuk Proses Pembuatan')
break
case 'afk':
if (!isUser) return reply(mess.only.userB)
              if (!q) return reply(`_Example : ${prefix}afk mandi_`)
              if (!isGroup) return reply(mess.only.group)
              if (isAfkOn) return reply('Woe Kalo Mau Afk Jangan Nimbrung di sini')
              const reason = q ? q : 'Nothing.'
              afk.addAfkUser(sender, time, reason, _afk)
              const aluty = `Fitur AFK berhasil *diaktifkan!*\n\n➸ *Username*: ${pushname}\n➸ *Alasan*: ${reason}`
              reply(aluty)
              break
case 'daftar':
case 'verify':
					if (isUser) return reply(`Nomor kamu sudah terdaftar dalam database bot`)
					user.push(sender)
					fs.writeFileSync('./database/user.json', JSON.stringify(user))
					const serial= createSerial(10)
					try {
					ppimg = await dha.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					ppimg = 'https://telegra.ph/file/e89783a7643d2fd4f2719.jpg'
					}
					captionnya = `
╭─❒ *Pendaftaran* ❒
│❒ *Nama* : ${pushname}
│❒ *Tanggal* : ${tanggal}
│❒ *Waktu* : ${wib}
│❒ *Seri* : ${serial}
│❒ *Note* : Untuk menggunakan bot ketik #menu
╰─`
					daftarimg = await getBuffer(ppimg)
					dha.sendMessage(from, daftarimg, image, {quoted: mek, caption: captionnya, thumbnail: Buffer.alloc(0)})
					break 
default:
if (isTTT && iser2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = `*🎳 Game Tictactoe 🎲*

er1 @${tty.er1.split('@')[0]}=❌
er2 @${tty.er2.split('@')[0]}=⭕

${angka[1]}${angka[2]}${angka[3]}
${angka[4]}${angka[5]}${angka[6]}
${angka[7]}${angka[8]}${angka[9]}

Giliran = @${tty.er1.split('@')[0]}`
  dha.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.er1,tty.er2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
dha.sendMessage(from, `Yahh @${tty.er2.split('@')[0]} Menolak:(`,text,{quoted:mek,contextInfo:{mentionedJid:[tty.er2]}})
}
}

if (isTTT && iser1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '❌'
main[0].angka[nuber] = s
main[0].gilir = main[0].er1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳Result Game Tictactoe 🎲

*Yeyyy Permainan Di Menangkan Oleh *@${tty.er1.split('@')[0]}*\n`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
dha.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.er1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri 🗿👌_*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.er2.split('@')[0]}=⭕
Player1 @${tty.er1.split('@')[0]}=❌

${ttt}

Giliran = @${tty.er2.split('@')[0]}`
 dha.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.er1,tty.er2]}})
}
if (isTTT && iser2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].er2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*?? Result Game Tictactoe 🎲*

Yeyyy Permainan Di Menangkan Oleh *@${tty.er2.split('@')[0]}*\n`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
dha.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.er2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

er1 @${tty.er1.split('@')[0]}=⭕
er2 @${tty.er2.split('@')[0]}=❌

${ttt}
 
Giliran = @${tty.er1.split('@')[0]}`
 dha.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.er1,tty.er2]}})
}
if (budy.startsWith('$')) {
	              if (!isOwner) return
	              console.log(color('[EXEC]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
                  exec(budy.slice(2), (err, stdout) => {
				  if (err) return textImg(`${err}`)
				  if (stdout) textImg(`${stdout}`)
				  })
				  }
if (budy.includes(`Assalamualaikum`)) {
reply(`Waalaikumsalam ${pushname}`)
 }
if (budy.includes(`@6282125039170`)) {
reply(`Kenapa tag tag aku-_-`)
 }
 if (budy.includes(`@6281290565513`)) {
reply(`Kenapa tag tag owner aku-_-`)
 }
 if (budy.startsWith('>')){
if (!mek.key.fromMe && !isOwner) return
try {
return dha.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}

    }
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
}
}
}


	
    
