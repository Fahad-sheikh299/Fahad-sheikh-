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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_34_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDY2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTc4LFxuICAgICAgICA3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTksXG4gICAgICAgIDI1LFxuICAgICAgICA3NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDExNixcbiAgICAgICAgODAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAzMSxcbiAgICAgICAgODYsXG4gICAgICAgIDY1LFxuICAgICAgICA5NCxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzLFxuICAgICAgICAxNyxcbiAgICAgICAgOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg2LFxuICAgICAgICA3OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTcxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAzMCxcbiAgICAgICAgMjA1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDgxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjM3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2LFxuICAgICAgICA4MyxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTgyLFxuICAgICAgICA0MixcbiAgICAgICAgNTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUxLFxuICAgICAgICA5NixcbiAgICAgICAgNixcbiAgICAgICAgMTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDg4LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTY2LFxuICAgICAgICAyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDY3LFxuICAgICAgICAxODksXG4gICAgICAgIDExNixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODAsXG4gICAgICAgIDQ2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQxLFxuICAgICAgICA5NixcbiAgICAgICAgMTk4LFxuICAgICAgICAxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMyxcbiAgICAgICAgMjM0LFxuICAgICAgICA5MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDczLFxuICAgICAgICA0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDAsXG4gICAgICAgIDc1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDExNixcbiAgICAgICAgOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTI5LFxuICAgICAgICAyNixcbiAgICAgICAgMTAzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTA3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjM4LFxuICAgICAgICA5NixcbiAgICAgICAgNTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAwLFxuICAgICAgICA3NSxcbiAgICAgICAgNTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTksXG4gICAgICAgIDEwLFxuICAgICAgICAxODksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTk2LFxuICAgICAgICA1MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyOCxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTA0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjZIVkZrUlFCYlAyVTlZTkhiZHFUL0U3Wmd5cVRYU1dlRkNOOEtja3QrbWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzNDQ4MjQ0Mzc0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCQzc5Njg4Njc1QkFGRUM5QzlEQTgzM0U0RkUzRjUxRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA4MjM2MzVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjM0NDgyNDQzNzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjVCNTEzQjkzNTFBRTYwQTMxQzdENDFEMTNCOUU1RjY0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDgyMzYzNlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzQ0ODI0NDM3NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQzdGRTIzODE4QkM5RDBFNjRENEE4RTEwQzNCRDg5QjFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwODIzNjM4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzNDQ4MjQ0Mzc0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3NTgzMEQ2RDNFNEM3MkU0N0Y5RUU5MzIwMkY3RTBENFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA4MjM2NDBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTlhLejJraExUNG1Mdnhmb2xwRG90Z1wiLFxuICBcInBob25lSWRcIjogXCI4NWM1MTkyNS03ZjQwLTQ2MmMtODgzZS02OGZmNmIzNzJhZTZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA5LFxuICAgICAgMjQ4LFxuICAgICAgMTQ4LFxuICAgICAgMjUwLFxuICAgICAgMTQwLFxuICAgICAgODgsXG4gICAgICAyMTYsXG4gICAgICA0MixcbiAgICAgIDIwNCxcbiAgICAgIDIwNixcbiAgICAgIDI1MyxcbiAgICAgIDY5LFxuICAgICAgMTgwLFxuICAgICAgMTE0LFxuICAgICAgMTQzLFxuICAgICAgMjAyLFxuICAgICAgODAsXG4gICAgICAyMjEsXG4gICAgICAxNTMsXG4gICAgICAyMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMSxcbiAgICAgIDE4NSxcbiAgICAgIDk5LFxuICAgICAgMjcsXG4gICAgICA5NixcbiAgICAgIDcsXG4gICAgICA3MSxcbiAgICAgIDExNCxcbiAgICAgIDE3OSxcbiAgICAgIDUyLFxuICAgICAgMTkxLFxuICAgICAgNjksXG4gICAgICAxOCxcbiAgICAgIDExNSxcbiAgICAgIDExOSxcbiAgICAgIDE5NixcbiAgICAgIDE4MSxcbiAgICAgIDgsXG4gICAgICAyMzEsXG4gICAgICAxMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTjQyNDlaNEJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQ0ODI0NDM3NDoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzUwMjUwMDg4MjQzNTU6MTFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQWJ1IEh1cmFpcmFcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJNlQ4ZmNIRU0vZXhyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImFXekt1dDNmOVNaTmQvV0ZwbmNsdXhmeFJqTDNqZm9FcmtoNzZ4aW02SDA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibHJSanZGbHdpbEJYeXhNdENIeHh1OVFYNEJuTnZIaFlLOHRVTFFESGtPVHh2Z0RySHlIc0FSZnhzUEppVG5pQ2p5Q1pkeERHb3d6SGsxbG9BQ0tPQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUEhsQUhJY1ZldS9ZU2t2NjNzUzJiVU5sanZuVWtxdDYyVnlucHV0SGZOajhnYlNwL3FDRy9VblNGL3pNaG1ueEtIZTRlRVBzK3E0YXVYa00rU1BtQnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDQ4MjQ0Mzc0OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA4MjM2MzMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDdmhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUN2aC5qc29uIjogIntcImtleURhdGFcIjpcIkxLVVBTb2NESUcyY0NFaXpSRGUrekRoc0FpSlpZclpWaVMxbkJwOWZ1WVE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjEzMDQ2MzExOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwODIzNjM1MzgwXCJ9Igp9"  // PUT your SESSION_ID 


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
