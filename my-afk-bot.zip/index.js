const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'voidsmp666.aternos.me',
    port: 14560,
    username: 'AFK_Bot', // You can change this name
    version: false // Automatically detects server version
  });

  bot.on('spawn', () => {
    console.log('✅ Bot spawned and is online.');

    // Move slightly every 60 seconds to prevent AFK kick
    setInterval(() => {
      const yaw = Math.random() * Math.PI * 2;
      bot.look(yaw, 0, true); // turn randomly
      bot.setControlState('forward', true);
      setTimeout(() => bot.setControlState('forward', false), 500);
    }, 60000); // every 60 seconds
  });

  bot.on('end', () => {
    console.log('🔄 Bot disconnected. Reconnecting in 10s...');
    setTimeout(createBot, 10000); // reconnect after 10 seconds
  });

  bot.on('error', (err) => {
    console.log(`❌ Bot error: ${err.message}`);
  });
}

createBot();

