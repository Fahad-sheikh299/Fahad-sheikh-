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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_39_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE1LFxuICAgICAgICA3NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDY2LFxuICAgICAgICA4LFxuICAgICAgICAzMixcbiAgICAgICAgNzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDY0LFxuICAgICAgICAxMSxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDksXG4gICAgICAgIDAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExMCxcbiAgICAgICAgNixcbiAgICAgICAgMTIxLFxuICAgICAgICA4OSxcbiAgICAgICAgODcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjUzLFxuICAgICAgICA5MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA4MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDMxLFxuICAgICAgICAzMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTQyLFxuICAgICAgICA3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE2LFxuICAgICAgICA1MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTksXG4gICAgICAgIDQxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDIsXG4gICAgICAgIDUwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDg0LFxuICAgICAgICAzOCxcbiAgICAgICAgODEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjIyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjAzLFxuICAgICAgICA2MixcbiAgICAgICAgMjI1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5LFxuICAgICAgICA4OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwMixcbiAgICAgICAgNjUsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDM3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODUsXG4gICAgICAgIDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0LFxuICAgICAgICAxODIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTY5LFxuICAgICAgICA5NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjgsXG4gICAgICAgIDc2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTg0LFxuICAgICAgICAxODYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDMyLFxuICAgICAgICAzMSxcbiAgICAgICAgMjAyLFxuICAgICAgICA5NixcbiAgICAgICAgMjEsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDg1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjMwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjI1LFxuICAgICAgICA4MCxcbiAgICAgICAgNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlAwbi9rSm9LZGg2bmtsbXRLejJsY0RFckRzcEtYeTh6WWZuNklqRGRUc3c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzNDQ4MjQ0Mzc0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDNjQ1M0YwMzY5RDQzNTE0MTA0NjhCMDA4N0ZFQ0M1NlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA2ODM1NzlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjM0NDgyNDQzNzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjlCQkNBRDhGRjBBNTQxNkFCNUNEODA3RDgyQjRCODE0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDY4MzU3OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJnR2pSMk5TSFMwYTBhcUJjS0p1MG9nXCIsXG4gIFwicGhvbmVJZFwiOiBcImY4YmM2MDVjLWE3NTMtNDRlZC04Mzk5LTJjOTllYzMxNDc4Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1OCxcbiAgICAgIDkzLFxuICAgICAgMjI4LFxuICAgICAgMTQ3LFxuICAgICAgOTcsXG4gICAgICA0NCxcbiAgICAgIDIwMCxcbiAgICAgIDQ3LFxuICAgICAgMTg5LFxuICAgICAgMTcwLFxuICAgICAgNzEsXG4gICAgICA1MSxcbiAgICAgIDIzOCxcbiAgICAgIDI0MixcbiAgICAgIDI0MCxcbiAgICAgIDEyMyxcbiAgICAgIDE2NCxcbiAgICAgIDIzOSxcbiAgICAgIDE2MSxcbiAgICAgIDMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgsXG4gICAgICAzMCxcbiAgICAgIDE4OCxcbiAgICAgIDQ0LFxuICAgICAgMTQ2LFxuICAgICAgMTAwLFxuICAgICAgMTY0LFxuICAgICAgNTgsXG4gICAgICA1NCxcbiAgICAgIDE0MixcbiAgICAgIDE3NyxcbiAgICAgIDEyMixcbiAgICAgIDIwNixcbiAgICAgIDE3OSxcbiAgICAgIDI1MixcbiAgICAgIDIzNyxcbiAgICAgIDE5MixcbiAgICAgIDE1MCxcbiAgICAgIDE4NyxcbiAgICAgIDE4N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSRkpaTkRKUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDQ4MjQ0Mzc0OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjc1MDI1MDA4ODI0MzU1OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWFUOGZjSEVLK1l2clFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJhV3pLdXQzZjlTWk5kL1dGcG5jbHV4ZnhSakwzamZvRXJraDc2eGltNkgwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInBOUFhKemRKZHMrcjlzOE85SisyeW1uTndiSmMxNVJYOGxHb3RvN1d2K1ZSNzRJZVpsK1M2SDJ1anNrbnNEWEFGSTM1Y0N0Uzh5YmZDOFA2UGVQa0FRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkxXNm5lSkJ5Z2lkYkVMc2hmM2tPUS9MbXlUWU13Z29sOVZ1cVZNZk9VdkFySk9PS2ZKbW92TEh0bVc2amw2c2lBa0tQUTlwNUEvdU9rcEl3VkU3MUJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQ0ODI0NDM3NDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA2ODM1NzQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDNVhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUM1WC5qc29uIjogIntcImtleURhdGFcIjpcIldYM01BeEhkNjBSZHhzajByenJGTVE0MUUyUWR0UEFDR0oxQStSZCs3ZDQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjEzMDQ2MzExMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwNjgzNTc1OTIxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
