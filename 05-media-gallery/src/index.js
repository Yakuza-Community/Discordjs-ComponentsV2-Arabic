require('dotenv/config');
const {
  Client,
  GatewayIntentBits,
  MessageFlags,
  TextDisplayBuilder,
  MediaGalleryBuilder,
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

    const mediaGalleryComponent = new MediaGalleryBuilder().addItems([
      {
        media: {
          url: 'https://cdn.discordapp.com/embeds/avatars/1.png',
        },
      },
      {
        media: {
          url: 'https://cdn.discordapp.com/embeds/avatars/2.png',
        },
        spoiler: true,
      },
    ]);

    message.channel.send({
      flags: MessageFlags.IsComponentsV2,
      components: [textComponent, mediaGalleryComponent],
    });
  }
});

client.login(process.env.TOKEN);
