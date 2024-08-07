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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_01_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDc5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAzNCxcbiAgICAgICAgNTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE4LFxuICAgICAgICA2NixcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3LFxuICAgICAgICAwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1LFxuICAgICAgICAzNixcbiAgICAgICAgMTIsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyMixcbiAgICAgICAgODEsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI4LFxuICAgICAgICA2OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDkxLFxuICAgICAgICAzNixcbiAgICAgICAgMjUzLFxuICAgICAgICA3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTAzLFxuICAgICAgICA4NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgODksXG4gICAgICAgIDEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTUsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDY2LFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQwLFxuICAgICAgICAyOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODcsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDcxLFxuICAgICAgICA5NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDg2LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTI5LFxuICAgICAgICA4NyxcbiAgICAgICAgNixcbiAgICAgICAgMTE3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDc1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTU5LFxuICAgICAgICA1NixcbiAgICAgICAgMTUsXG4gICAgICAgIDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTIyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMixcbiAgICAgICAgODAsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTksXG4gICAgICAgIDQ4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDk4LFxuICAgICAgICA0MixcbiAgICAgICAgMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieTlUZTlNcHVnL1llang2QTFHa29pQUgzWVJCZnIxOFBkcjh6TXNUZXdwaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTI5NDA1MjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCREEyNUEyNDA1RUY1NzYxNTZGMkMzOUY3M0I0MjVCNVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjMwMDY4OThcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTI5NDA1MjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwMkE3OUI2N0VGNTg1OTlFN0IyQkNDNEZGRENGOTIxQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjMwMDY4OThcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwid1NwcEdGdVpSdWVKMVBQRnFXSFgyQVwiLFxuICBcInBob25lSWRcIjogXCIzZDU2ZDkwNC0xMmM5LTQ0MjctYWIzNy1kM2Y2MTI3MGNkNmJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDksXG4gICAgICAzNSxcbiAgICAgIDkyLFxuICAgICAgMjUwLFxuICAgICAgMixcbiAgICAgIDIzOCxcbiAgICAgIDMyLFxuICAgICAgNTksXG4gICAgICAxODIsXG4gICAgICAyMzEsXG4gICAgICA5NSxcbiAgICAgIDE0NSxcbiAgICAgIDE5MixcbiAgICAgIDY3LFxuICAgICAgMjksXG4gICAgICAxMDMsXG4gICAgICA2OCxcbiAgICAgIDE5NyxcbiAgICAgIDE1NCxcbiAgICAgIDE0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzgsXG4gICAgICAzNixcbiAgICAgIDEyMCxcbiAgICAgIDEwOSxcbiAgICAgIDM4LFxuICAgICAgNTgsXG4gICAgICAyMjIsXG4gICAgICAxOTgsXG4gICAgICA2MixcbiAgICAgIDI0OSxcbiAgICAgIDI1MSxcbiAgICAgIDQ3LFxuICAgICAgMjE4LFxuICAgICAgMTAyLFxuICAgICAgMTMsXG4gICAgICAxNjYsXG4gICAgICA2NixcbiAgICAgIDY2LFxuICAgICAgNjQsXG4gICAgICAxMzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSjFOWERCVEFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMjk0MDUyMTI6MzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJJcm9uIE1hblwiLFxuICAgIFwibGlkXCI6IFwiMTA0MDM3NDYyNjE0MTM5OjM4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0k3RWpQVUNFS24veTdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRTJkRTZnUXMrMmt4L0xzVFBEWnpVSjFyZXlKWWdlZktreWlxT0oxRzRpOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJiWnJrQkFJVEFCVFlGSkRlSzB0Z1NzdTl1M2ZSVTNxQXRUanh5YUFrY1A5Z0JzUm83U2JBNWUzMXdpMVBEbjNSTTRmOUozaHU1ZWxER0ZwaU5Oc3FBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJxdDI1Z1VsWjZJbkxWaVNrMVQ4OElnbWxhc0t1TUYzUmdhZFNHWTVubHJQKzBpRVVFWVUzYWlTQXAzSHI3akkvRlFySnFTOVdGSW1UYTd0Q2V4UHdpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTI5NDA1MjEyOjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDQ3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjMwMDY4OTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCUVNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJRUy5qc29uIjogIntcImtleURhdGFcIjpcIlQ5Y2lVSFFhb2c1ZUg0QUhVMThHZEp5c0ZLS0g4MzdnOW5NYWJyZTFIQkk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzgyNDQzMDIyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjMwMDY4OTYwMThcIn0iCn0="  // PUT your SESSION_ID 


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
