# 03 — File

**File** يتيح لك إرفاق ملف داخل الرسالة، مثل صورة أو نص.

## متى أستخدمه؟

- إرسال صورة جاهزة داخل الـ Container.
- مشاركة ملف نصي أو PDF.

## مثال سريع

```js
import { AttachmentBuilder } from 'discord.js';

const file = new AttachmentBuilder('./assets/report.pdf');

await channel.send({
  files: [file],
  components: [
    {
      type: 1,
      components: [
        { type: 10, content: 'تم إرفاق التقرير.' }
      ]
    }
  ]
});
```

## نصائح

- تأكد أن المسار صحيح.
- خلك واضح في الوصف حتى يفهم المستخدم الملف.
