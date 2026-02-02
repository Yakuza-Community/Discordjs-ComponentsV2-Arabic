require('dotenv/config');
const {
  Client,
  GatewayIntentBits,
  MessageFlags,
  TextDisplayBuilder,
  SeparatorBuilder,
} = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on('ready', (client) => {
  console.log(`${client.user.username} is online.`);
});

client.on('messageCreate', async (message) => {
  if (message.content === 'ping') {
    const textComponent = new TextDisplayBuilder().setContent(
      'This is a text display component'
    );

    const separatorComponent = new SeparatorBuilder();

    message.channel.send({
      flags: MessageFlags.IsComponentsV2,
      components: [textComponent, separatorComponent, textComponent],
    });
  }
});

client.login(process.env.TOKEN);
