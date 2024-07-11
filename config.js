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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_41_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTk4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI4LFxuICAgICAgICA0NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0LFxuICAgICAgICA5MixcbiAgICAgICAgMTEwLFxuICAgICAgICA1MixcbiAgICAgICAgOTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjksXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjU0LFxuICAgICAgICA4MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDAsXG4gICAgICAgIDIsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDMyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjA5LFxuICAgICAgICA1NSxcbiAgICAgICAgNzksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODksXG4gICAgICAgIDIyLFxuICAgICAgICAyMDksXG4gICAgICAgIDMwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQyLFxuICAgICAgICA3MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg4LFxuICAgICAgICA3MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDY0LFxuICAgICAgICAxODYsXG4gICAgICAgIDQwLFxuICAgICAgICA0OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA5LFxuICAgICAgICA5MCxcbiAgICAgICAgMzksXG4gICAgICAgIDkwLFxuICAgICAgICAwLFxuICAgICAgICAxNixcbiAgICAgICAgMTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDk5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTEwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjA2LFxuICAgICAgICA0NixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDkxLFxuICAgICAgICAxODksXG4gICAgICAgIDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg3LFxuICAgICAgICA0NixcbiAgICAgICAgMTc1LFxuICAgICAgICA5NixcbiAgICAgICAgNTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzksXG4gICAgICAgIDM4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDk3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTczLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDQwLFxuICAgICAgICA0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODAsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzksXG4gICAgICAgIDk3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDU4LFxuICAgICAgICA5MixcbiAgICAgICAgNixcbiAgICAgICAgMTI5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkM5clV1cEFHZ1lhU0NQTGFvZy93MnRpdzNaS2xxZ09kOWc1R3l2ZE5nbnc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk85ODVwR0xpVGIyQTRJZXRYcVBZc3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDcyMzYyMjMtZjRjYS00YWYzLWE2NTEtMzU1NjU1YTIxMjhmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MixcbiAgICAgIDEyNixcbiAgICAgIDE2LFxuICAgICAgMTE4LFxuICAgICAgMTYzLFxuICAgICAgMTk1LFxuICAgICAgMTY5LFxuICAgICAgMTAwLFxuICAgICAgOSxcbiAgICAgIDE0NyxcbiAgICAgIDE4OSxcbiAgICAgIDQsXG4gICAgICA2OSxcbiAgICAgIDIwNSxcbiAgICAgIDc5LFxuICAgICAgMjEsXG4gICAgICAxMDAsXG4gICAgICAyNTEsXG4gICAgICAyMzQsXG4gICAgICAxMjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTczLFxuICAgICAgMjI4LFxuICAgICAgMjQ0LFxuICAgICAgMTA5LFxuICAgICAgMTc4LFxuICAgICAgMTUsXG4gICAgICAyNDQsXG4gICAgICA1OSxcbiAgICAgIDQzLFxuICAgICAgODksXG4gICAgICA4MCxcbiAgICAgIDE2MyxcbiAgICAgIDIxNyxcbiAgICAgIDU4LFxuICAgICAgMjI2LFxuICAgICAgMjMwLFxuICAgICAgMjQ5LFxuICAgICAgNzgsXG4gICAgICAyMTAsXG4gICAgICA0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyOFRaSkxKWVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDQ4MjQ0Mzc0OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjc1MDI1MDA4ODI0MzU1OjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWVUOGZjSEVMUE93TFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJhV3pLdXQzZjlTWk5kL1dGcG5jbHV4ZnhSakwzamZvRXJraDc2eGltNkgwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk1maEROR0dvdUJSMGswZEhWR0VQTHUvcW5Nc1pZMHQ4ZVNxQzFOenNtbjZDOFo2RktiaGpUSXpLY3daU0hIWVlqVGZCSzJkbEZUS3JYQWRWQjQ4RURRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkt6RVJEZm0xMWpRTUtBcGk2Z1FrNE9kZ3NUcGxGNVRPaE51c2JzaDUxRUVPcEprQnd0RFNHRG5EcWRzYmF3Z3AxZlhKV0lJd0JieVYxUThwb09Iemp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQ0ODI0NDM3NDo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA3MjMyNTQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDNVlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUM1WS5qc29uIjogIntcImtleURhdGFcIjpcIlVpV1VhaEYxWlptb2RQRVpsd0tzVUZJU3F3SXMvUWg0M1Q5NTFYYXU5VEE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjEzMDQ2MzExMCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
