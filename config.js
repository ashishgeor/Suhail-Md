const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919074818752";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_53_06_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgNixcbiAgICAgICAgMjEzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTgyLFxuICAgICAgICA3MixcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTksXG4gICAgICAgIDEyLFxuICAgICAgICAzMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjksXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzIsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAzOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1LFxuICAgICAgICAxLFxuICAgICAgICAzNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAwLFxuICAgICAgICAxODAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDY5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjIxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzLFxuICAgICAgICA1NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAzNixcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDksXG4gICAgICAgIDE0NixcbiAgICAgICAgOTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1LFxuICAgICAgICAwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNixcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTksXG4gICAgICAgIDEzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5NixcbiAgICAgICAgOCxcbiAgICAgICAgMTIwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDM3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDgxLFxuICAgICAgICAxODAsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjksXG4gICAgICAgIDQzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODgsXG4gICAgICAgIDE4MixcbiAgICAgICAgNSxcbiAgICAgICAgMTcwLFxuICAgICAgICA5OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ5LFxuICAgICAgICAzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDgzLFxuICAgICAgICAyMixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDcxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTEsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODYsXG4gICAgICAgIDc3LFxuICAgICAgICAxODEsXG4gICAgICAgIDMyLFxuICAgICAgICAxODgsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTksXG4gICAgICAgIDM4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI4LFxuICAgICAgICA1MixcbiAgICAgICAgMjksXG4gICAgICAgIDMzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU2LFxuICAgICAgICAzOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDgsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ2aENmc2FPbXBac25tYTZBdEpBY1d2TmxLcDErL3hDQkw1b2pyOGJCYzBNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI5TFNWR2VxRFMtdWNrQXA3VHN3UEdnXCIsXG4gIFwicGhvbmVJZFwiOiBcImU0NzA4YjA2LTc0MzctNDYzNy1iZDg2LTBmZmExNTI4ZTA4ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MSxcbiAgICAgIDk4LFxuICAgICAgMTE3LFxuICAgICAgMjM5LFxuICAgICAgNDMsXG4gICAgICAxODAsXG4gICAgICA0LFxuICAgICAgMjYsXG4gICAgICA4MCxcbiAgICAgIDExOCxcbiAgICAgIDYwLFxuICAgICAgMjM5LFxuICAgICAgMjUwLFxuICAgICAgMjA4LFxuICAgICAgMTQ4LFxuICAgICAgMTgzLFxuICAgICAgNzMsXG4gICAgICA4NyxcbiAgICAgIDIwLFxuICAgICAgMjUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0OCxcbiAgICAgIDIyMixcbiAgICAgIDc4LFxuICAgICAgMjEzLFxuICAgICAgMTM4LFxuICAgICAgODMsXG4gICAgICAxOTMsXG4gICAgICAxMTQsXG4gICAgICAxMTUsXG4gICAgICAxOTQsXG4gICAgICAxNixcbiAgICAgIDE2MyxcbiAgICAgIDU4LFxuICAgICAgMzgsXG4gICAgICAxMzcsXG4gICAgICAxNzgsXG4gICAgICAyMjcsXG4gICAgICAxMDcsXG4gICAgICA3LFxuICAgICAgMTczXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhOWDg2RkpEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTkwNzQ4MTg3NTI6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk1FTlRBTElTVCBBU0hJU0hcIixcbiAgICBcImxpZFwiOiBcIjE1ODg0NTMwNTM2MDQ3ODoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05tMHEvMERFSjZudWJNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOUNFYUlzUzl2S1ZpRFArWGtWZmZDbkdobktYQmV5RDkxaXdxSGdvQm1TYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJiNGtSSUVNOUsyNzhPQ040YWpyWWJlM1VKa2ROMG9qeFRDZ09KMGVlNFZZZEpIZisvVUNpNVBCZkJWa1pDcGtZZExwZnl6NjEvK3hZejRKMWMzMFdBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIwcTBRdkhpaGpOUTFUMDBjM3JjdWwwVXpOQXo0c2RudlBqWVJ1a0JTNHQ4VUZCdXNmeXdqWUpoTU9qQmlCaHdnRnVrcGZpemdpZjVXNXRoUDFIVVhBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTkwNzQ4MTg3NTI6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODUwNjQwMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxmcFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTGZwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVjEwa1ZsU2hub0R4Y1JBU0J3MHlPaVVEenRJak5naXFKWm1uK2Q4aWJWcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDY4MTYxNjI0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
