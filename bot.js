
const express = require('express');
const { Telegraf } = require('telegraf');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const bot = new Telegraf(process.env.BOT_TOKEN);

async function askOpenAI(message) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: 'Ты — Асмея, добрая и умная помощница, говоришь просто и по-человечески.' },
        { role: 'user', content: message }
      ]
    })
  });

  const data = await response.json();
  return data.choices?.[0]?.message?.content || 'Что-то пошло не так...';
}

bot.on('text', async (ctx) => {
  const userMessage = ctx.message.text;
  const reply = await askOpenAI(userMessage);
  ctx.reply(reply);
});

app.get('/', (req, res) => {
  res.send('🤖 Asmeeia Bot работает!');
});
app.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});

bot.launch();
