# 03 — File

**File** يخليك ترفق ملف داخل الرسالة، مثل صورة أو نص.

## متى تستخدمه؟

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

- تأكد إن المسار صحيح.
- خلك واضح في الوصف عشان يفهم المستخدم الملف.
