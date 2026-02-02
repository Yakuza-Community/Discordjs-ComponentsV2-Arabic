require('dotenv/config');
const {
  Client,
  GatewayIntentBits,
  MessageFlags,
  TextDisplayBuilder,
  ChannelSelectMenuBuilder,
  ActionRowBuilder,
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

    const channelSelectMenuComponent = new ChannelSelectMenuBuilder()
      .setCustomId('random-select-menu-id')
      .setPlaceholder('Select a channel...');

    const channelActionRowComponent = new ActionRowBuilder().addComponents(
      channelSelectMenuComponent
    );

    message.channel.send({
      flags: MessageFlags.IsComponentsV2,
      components: [textComponent, channelActionRowComponent],
    });
  }
});

client.login(process.env.TOKEN);
