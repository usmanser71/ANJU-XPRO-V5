//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU4wUUd1UDZPckRUSEJodG5XbzN0S0dZbDNHRHErRTRVSVhHdGJkU3VGQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0Ribk1kbHd0Rkc0UTVhUUdRQnhqcm1CNDB3U0pUalJZaCtVQ0dkOG5qQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpTjRlSUd3YXd1d0NrbG1Mb0poRmlQME9ZYWp0eVhLNkYrL1V0dERBTm04PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwcG5FM21YYnZ4UTlqNjhlT2t3Mm9YRWRMSmhYT21UYjJUZ0E4T29oVGxVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlOZ2VFdTI2TjFZcGpZTEU0WXFGVXdyaGxvdGppUnMrUDVVZDlCejZTSGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitZUkVJclA4OVdrdVJaM3lvQkVteEg5YTdBNUVYQzJ5V1BneFNNM3pIbjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUdiQjhoWU96SkhCUS94TWlJTWdrVW43OFM2cnN0MXl4SVY2akpUTkZtND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidVRuVXQ5ejdtQUJXbHN0NHJaMG05a0dvM0k4L0dzRnQ5NERDNWN2MTIyYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJ1MTZrM3loVmN3a0YxWHRIYmU3V0gyYTYya3FqSThjUVNKckhMam9xUXk2S2JZQlhPbkVnVEpyd0d3S2VmMWlyek5lK1hPdzFCWjBHRzdVa3FmU2pBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk1LCJhZHZTZWNyZXRLZXkiOiJPL1JCaTV4UGVxYSt2QUtBZDFLZzVHdzhVSlZzemF6VVNMQVA4ZlVnZ3JnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJDNjRCMThCUSIsIm1lIjp7ImlkIjoiOTIzMzUxMzAwMzg5OjI2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCThqnwnZCU8J2QkvCdkIzwnZCA8J2QjSDwnZCS8J2QhPCdkJHwk4aqXG4gXG4gXG4gXG4gXG4gXG4gXG4gXG4gXG4gXG4gXG4gXG4gXG4gXG4gXG4gXG4gXG4gXG4gXG4gXG4gXG4gXG4gXG4gXG4gXG4gXG4gPDMiLCJsaWQiOiIyMzMxMzQ4NTE4OTM0MjoyNkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05HNnVMZ0NFTGFjNGNVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjhyVllTUWk3UGJDRVIwM1RkNWlyZnBQMERkTlJnRHZsSEhMWENMZ0gxSDA9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkNySlA4cjBVdElnNE9hbW1MVmN1YnZWY1J1OGFNYWFZRXpITUNjYk1ac3dWRGMrV0krWUJuR3BqT3dZbzN0T09XcmVsaGdUTENEalZlb3dEZnAwREJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJHNi9nNEplNjlkOTFUT1lTdGN1N3U1Mkl5cm01RlFoN1kya1hHY2d2Zy9zWGVlWm4wd2RJbWRRZFFWNVNPazV3WlBTVmFsdGZ1R3JySE1pRzdPV2VpQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzM1MTMwMDM4OToyNkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmSzFXRWtJdXoyd2hFZE4wM2VZcTM2VDlBM1RVWUE3NVJ4eTF3aTRCOVI5In19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTY5MDkxMjUsImxhc3RQcm9wSGFzaCI6IlBXazVCIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
