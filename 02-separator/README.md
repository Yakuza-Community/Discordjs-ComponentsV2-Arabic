# 02 — Separator

**Separator** يفصل بين أجزاء الرسالة ويخليها أسهل للقراءة.

## متى تستخدمه؟

- فصل الأقسام داخل نفس الرسالة.
- تقسيم معلومات طويلة.

## مثال سريع

```js
await channel.send({
  components: [
    {
      type: 1, // Container
      components: [
        { type: 10, content: 'قسم أول: معلومات الحساب.' },
        { type: 14 }, // Separator (Small)
        { type: 10, content: 'قسم ثاني: إعدادات الخصوصية.' }
      ]
    }
  ]
});
```

## أحجام الفاصل (Small / Large)

```js
await channel.send({
  components: [
    {
      type: 1,
      components: [
        { type: 10, content: 'عنوان.' },
        { type: 14, spacing: 1 }, // Small
        { type: 10, content: 'تفاصيل قصيرة.' },
        { type: 14, spacing: 2 }, // Large
        { type: 10, content: 'قسم جديد.' }
      ]
    }
  ]
});
```
