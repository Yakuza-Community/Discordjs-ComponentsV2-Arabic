# 01 — Text Display

**Text Display** هو أبسط مكوّن لعرض نص منسّق داخل الرسالة. مناسب للعناوين والوصف السريع.

## متى أستخدمه؟

- عنوان أو وصف مختصر.
- توضيح خطوة أو تعليمات قصيرة.

## مثال سريع (copy-paste)

```js
import { Client, GatewayIntentBits } from 'discord.js';
import 'dotenv/config';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', async () => {
  const channel = await client.channels.fetch(process.env.CHANNEL_ID);

  await channel.send({
    components: [
      {
        type: 1, // Container
        components: [
          {
            type: 10, // Text Display
            content: 'مرحباً! هذا مثال Text Display بالعربي.'
          }
        ]
      }
    ]
  });
});

client.login(process.env.BOT_TOKEN);
```

## نصائح

- خلك واضح ومباشر.
- لا تطوّل النص كثير.
