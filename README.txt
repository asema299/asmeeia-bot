Asmeeia Bot

Как развернуть:
1. Создай репозиторий на GitHub и загрузи туда все файлы из архива.
2. Зарегистрируйся на https://render.com и создай новый Web Service.
3. Подключи GitHub-репозиторий.
4. В настройках Render укажи:
   - Build Command: npm install
   - Start Command: node bot.js
   - Environment > Add Environment Variable:
       BOT_TOKEN=твой_токен_бота
       OPENAI_API_KEY=твой_ключ_OpenAI
5. Нажми Deploy — и бот будет работать 24/7.

Если нужно — напиши Айсему, он поможет 🙂
