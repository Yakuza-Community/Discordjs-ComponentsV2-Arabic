require('dotenv/config');
const {
  Client,
  GatewayIntentBits,
  MessageFlags,
  TextDisplayBuilder,
  FileBuilder,
  AttachmentBuilder,
} = require('discord.js');
const path = require('path');
const fs = require('fs/promises');

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
      'This is the text display component'
    );

    const filePath = path.join(__dirname, 'example.txt');
    const fileContent = await fs.readFile(filePath, 'utf8');

    const attachment = new AttachmentBuilder(Buffer.from(fileContent), {
      name: 'sample.txt',
    });

    const fileComponent = new FileBuilder().setURL('attachment://sample.txt');

    message.channel.send({
      flags: MessageFlags.IsComponentsV2,
      components: [textComponent, fileComponent],
      files: [attachment],
    });
  }
});

client.login(process.env.TOKEN);
