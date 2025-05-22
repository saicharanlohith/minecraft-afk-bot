const mineflayer = require('mineflayer');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('AFK Bot is running!');
});

app.listen(3000, () => {
  console.log('✅ Web server running to keep the bot alive.');
});

const bot = mineflayer.createBot({
  host: 'voidsmp666.aternos.me', // Replace with your server IP or domain
  port: 14560,                 // Usually 25565 unless changed
  username: 'AFK_Bot_1234',    // Your bot's username
  version: false               // Auto-detect Minecraft version
});

bot.on('spawn', () => {
  console.log('🤖 Bot has spawned and is online!');
  bot.chat('Hello! I am AFK Bot.');

  setInterval(() => {
    // Random look direction and walk forward for 1 second every 2 minutes
    const yaw = Math.random() * 2 * Math.PI;
    bot.look(yaw, 0, true);
    bot.setControlState('forward', true);

    setTimeout(() => {
      bot.setControlState('forward', false);
    }, 1000);
  }, 120000); // 120,000 ms = 2 minutes
});
