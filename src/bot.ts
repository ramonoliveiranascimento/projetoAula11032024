import { config } from "dotenv";
import TelegramBot from "node-telegram-bot-api";

config();

const token = process.env.TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/echo (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    if(match) {
        const resp = match[1];
        bot.sendMessage(chatId, resp);
    }else{
        bot.sendMessage(chatId, "Ocorreu um erro na comunicação");

    }
});

bot.on("message", (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, "Received your message");
});