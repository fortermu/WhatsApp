const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://casinobot:123johniphone@cluster0.nfztvsi.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/themalik-g/suhail-whatsapp-bot.git";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/KrJhpZhgKxZLfHcyUZKOMw";
global.website=process.env.GURL || "https://chat.whatsapp.com/KrJhpZhgKxZLfHcyUZKOMw" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/drAZuH2.jpeg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "® 𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬: 𝗠𝗔𝗟𝗜𝗞 𝗠𝗘𝗛𝗧𝗔𝗕" 


global.devs = "923263429027" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923263429027";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "false"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.imgur.com/drAZuH2.jpeg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_30_08_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA3MixcbiAgICAgICAgMzksXG4gICAgICAgIDgyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDU1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAzNixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDgwLFxuICAgICAgICA3NyxcbiAgICAgICAgNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDk5LFxuICAgICAgICA3NixcbiAgICAgICAgMjA4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDkyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDc2LFxuICAgICAgICAyOCxcbiAgICAgICAgODksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTExLFxuICAgICAgICAxNCxcbiAgICAgICAgMTk2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjUyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTYzLFxuICAgICAgICA3MixcbiAgICAgICAgMjMsXG4gICAgICAgIDUwLFxuICAgICAgICAzNixcbiAgICAgICAgMjMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA1LFxuICAgICAgICA2MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTgyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjA2LFxuICAgICAgICA5NixcbiAgICAgICAgMzgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAzNCxcbiAgICAgICAgMjUxLFxuICAgICAgICA1MyxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjA2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgzLFxuICAgICAgICA4NixcbiAgICAgICAgNTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzksXG4gICAgICAgIDUsXG4gICAgICAgIDM2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTUxLFxuICAgICAgICA1NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjE0LFxuICAgICAgICA3MixcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyNixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjksXG4gICAgICAgIDU2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTAsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTExLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODUsXG4gICAgICAgIDk5LFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1LFxuICAgICAgICA4OCxcbiAgICAgICAgNzksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAzNixcbiAgICAgICAgODcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDk1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDQyLFxuICAgICAgICA3MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODQsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDM2LFxuICAgICAgICA5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQTNjUGtQWDI5YVR1UmlRWTNVK2FUVFBKU1Y2Q2g1WHdHc1NFa1dLVE9OND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTmt6aklfZlpSTGVnTEZfTGZXOW1lQVwiLFxuICBcInBob25lSWRcIjogXCIwNTM3NThmNi01MGJlLTQ3MDItOWIxZC04ZjM4MzNiMDIyOTdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQyLFxuICAgICAgMTYyLFxuICAgICAgMjMsXG4gICAgICAxMzUsXG4gICAgICAxMDksXG4gICAgICAyNixcbiAgICAgIDExOSxcbiAgICAgIDEzOCxcbiAgICAgIDcyLFxuICAgICAgNDAsXG4gICAgICA3NSxcbiAgICAgIDE1NCxcbiAgICAgIDE1LFxuICAgICAgODcsXG4gICAgICA0MixcbiAgICAgIDEwNCxcbiAgICAgIDkyLFxuICAgICAgMjE4LFxuICAgICAgODMsXG4gICAgICAxMDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY2LFxuICAgICAgMTY4LFxuICAgICAgMjIxLFxuICAgICAgNTYsXG4gICAgICAxMzcsXG4gICAgICA3MSxcbiAgICAgIDExMyxcbiAgICAgIDEwNCxcbiAgICAgIDI0MixcbiAgICAgIDE4MSxcbiAgICAgIDEyOCxcbiAgICAgIDEzMCxcbiAgICAgIDM5LFxuICAgICAgMzQsXG4gICAgICAyNTQsXG4gICAgICAxMjMsXG4gICAgICAxNTcsXG4gICAgICA1OSxcbiAgICAgIDc0LFxuICAgICAgODhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRVFQUTFGQ1ZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI2MzQyOTAyNzozNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk1hbGlrXFxu4oCOIFxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbuKAjlwiLFxuICAgIFwibGlkXCI6IFwiMjA3MzgyOTY1NjkwNjA5OjM1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BLSTJvRUhFSnpVL0xVR0dBOGdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTE5qQUJYMnBxZ2ZLRUZHY1BjSGhpaEpzN0s1QVNvS3k4SlZCdWwzUGhBdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJuOWNTQmxhYmlOVGJnY01VSUI0YTZYVmhKeXRPZ2JOWDBYRHgwWmp6M1dydlpvekVxd2JiUmNWOHpndDZuMkkzYVdoTS9QTVk5V2Y0S1FRRnFtRlhBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJpZDFFOFNudEJLMWxmT3g2Z01jTnhCNUx3RHZwZ3htMmlqZDR0dGx0WThoZGFOMkJ1d3NWTTZSeWsxbjBQN0lGMjBDQXZwNitYUGhmeWJ2b0tFSm5DZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNjM0MjkwMjc6MzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIzODA0MTk1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRHI2XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEcjYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ2a210ZHhWdldRSWY2WU40M20zWEU5c2NjUjVkYStwWkZzTHgyT3I0OFlRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4ODI2MjEwNDEsXCJjdXJyZW50SW5kZXhcIjoxMixcImRldmljZUluZGV4ZXNcIjpbMCwxMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // 『 𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬: 𝗠𝗔𝗟𝗜𝗞 𝗠𝗘𝗛𝗧𝗔𝗕 ® 』", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝗠𝗘𝗛𝗧𝗔𝗕",
  packname: process.env.PACK_NAME || "𝗠𝗔𝗟𝗜𝗞",
  botname : process.env.BOT_NAME  || "𝗠𝗔𝗟𝗜𝗞-𝗠𝗗",
  ownername:process.env.OWNER_NAME|| "𝗠𝗔𝗟𝗜𝗞 𝗠𝗘𝗛𝗧𝗔𝗕",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "MEHTAB"  ).toUpperCase(),



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
