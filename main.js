const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const figlet = require('figlet')
const moment = require('moment-timezone')
const { wait, banner, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom } = require('./lib/functions')
const { color } = require('./lib/color')

require('./Wandy.js')
nocache('./Wandy.js', module => console.log(`${module} telah di update!`))
require('./lib/scraper.js')
nocache('./lib/scraper.js', module => console.log(`${module} telah di update!`))

const starts = async (dha = new WAConnection()) => {
	dha.logger.level = 'warn'
    dha.version = [2, 2140, 12]
	dha.browserDescription = ["StealBot", "Chrome", "3.0.0"];

   const sendButImage = async (from, context, fotext, img, but) => {
    gam = img
    jadinya = await dha.prepareMessage(from, gam, MessageType.image)
    buttonMessagesI = {
      imageMessage: jadinya.message.imageMessage,
      contentText: context,
      footerText: fotext,
      buttons: but,
      headerType: 4
    }
    dha.sendMessage(from, buttonMessagesI, MessageType.buttonsMessage)
  }

    fs.existsSync('./QR.json') && dha.loadAuthInfo('./QR.json')
    dha.on('dhaecting', () => {
        console.log('Conecting Your WhatsApp')
    })
    dha.on('open', () => {
       console.log('Server is Running!')
    })
    await dha.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./QR.json', JSON.stringify(dha.base64EncodedAuthInfo(), null, '\t'))

    dha.on('chat-update', async (message) => {
        require('./Wandy.js')(dha, message)
    })
   dha.on("group-participants-update", async (anu) => {

    try {
      groupMet = await dha.groupMetadata(anu.jid)
      groupMembers = groupMet.participants
      groupAdmins = getGroupAdmins(groupMembers)
      mem = anu.participants[0]

      console.log(anu)
      try {
        pp_user = await dha.getProfilePicture(mem)
      } catch (e) {
        pp_user = "https://telegra.ph/file/c9dfa715c26518201f478.jpg"
      }
      try {
        pp_grup = await dha.getProfilePicture(anu.jid)
      } catch (e) {
        pp_grup =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
      }
      if (anu.action == "add" && mem.includes(dha.user.jid)) {
        dha.sendMessage(anu.jid, "Halo!.. saya WandyGans saya akan membatu mempermudah kehidupan..seperti membuat sticker dan lain-lain. untuk memulai silahkan ketik !menu.", "conversation")
      }
      if (anu.action == "add" && !mem.includes(dha.user.jid)) {
        mdata = await dha.groupMetadata(anu.jid)
        memeg = mdata.participants.length
        num = anu.participants[0]
        let v = dha.contacts[num] || { notify: num.replace(/@.+/, "") }
        anu_user = v.vname || v.notify || num.split("@")[0]
        time_wel = moment.tz("Asia/Jakarta").format("HH:mm")
        wel = `Halo @${anu_user} \nWelcome In ${mdata.subject} \nSelamat Datang Di Grub Kami Semoga Betah Dan Jadi Kuntu Loncat`
        buff = await getBuffer(
          `http://hadi-api.herokuapp.com/api/card/welcome?nama=${anu_user}&descriminator=${groupMembers.length
          }&memcount=${memeg}&gcname=${encodeURI(
            mdata.subject
          )}&pp=${pp_user}&bg=https://i.ibb.co/YDYS80p/zero.jpg`
        )

        but = [
          { buttonId: 'add', buttonText: { displayText: 'Welcome Member Baru' }, type: 1 }
        ]
        sendButImage(mdata.id, wel, "©Created : WandyGans", buff, but)
      }
      if (anu.action == "remove" && !mem.includes(dha.user.jid)) {
        mdata = await dha.groupMetadata(anu.jid)
        num = anu.participants[0]
        let w = dha.contacts[num] || { notify: num.replace(/@.+/, "") }
        anu_user = w.vname || w.notify || num.split("@")[0]
        time_wel = moment.tz("Asia/Jakarta").format("HH:mm")
        memeg = mdata.participants.length
        out = `Horee... Beban Group Keluar\nSayonara @${anu_user} Semoga Tenang Di Alam Sana`
        buff = await getBuffer(
          `http://hadi-api.herokuapp.com/api/card/goodbye?nama=${anu_user}&descriminator=${groupMembers.length
          }&memcount=${memeg}&gcname=${encodeURI(
            mdata.subject
          )}&pp=${pp_user}&bg=https://i.ibb.co/YDYS80p/zero.jpg`
        )

        but = [
          { buttonId: 'remove', buttonText: { displayText: 'Selamat Tinggal' }, type: 1 }
        ]
        sendButImage(mdata.id, out, "©Created : WandyGans", buff, but)
      }
      if (anu.action == "promote") {
        const mdata = await dha.groupMetadata(anu.jid)
        anu_user = dha.contacts[mem]
        num = anu.participants[0]
        try {
          ppimg = await dha.getProfilePicture(
            `${anu.participants[0].split("@")[0]}@c.us`
          )
        } catch {
          ppimg =
            "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"
        }
        let buff = await getBuffer(ppimg)
        teks = `@${num.split("@")[0]} Telah dipromote`
        dha.sendMessage(mdata.id, teks, MessageType.text)
      }

      if (anu.action == "demote") {
        anu_user = dha.contacts[mem]
        num = anu.participants[0]
        const mdata = await dha.groupMetadata(anu.jid)
        try {
          ppimg = await dha.getProfilePicture(
            `${anu.participants[0].split("@")[0]}@c.us`
          )
        } catch {
          ppimg =
            "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"
        }

        let buff = await getBuffer(
          `https://gatauajg.yogipw.repl.co/api/demote?name=${anu_user.notify}&msg=selamat%20menjadi%20admin&mem=5&picurl=${ppimg}&bgurl=https://cdn.discordapp.com/attachments/819995259261288475/835055559941292032/style.jpg`
        )
        teks = `@${num.split("@")[0]} Telah didemote`
        dha.sendMessage(mdata.id, teks, MessageType.text)
      }
    } catch (e) {
      console.log("Error : %s", color(e, "red"))
    }

  })
}

function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'sekarang sedang diawasi untuk perubahan')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
