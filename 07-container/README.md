# 07 — Container

**Container** هو الأساس اللي يجمع كل Display Components داخل الرسالة.

## متى تستخدمه؟

- دائماً عند استخدام Display Components.
- لبناء رسالة مرتبة ومقسمة.

## مثال سريع

```js
await channel.send({
  components: [
    {
      type: 1, // Container
      components: [
        { type: 10, content: 'عنوان بسيط' },
        { type: 14 },
        { type: 10, content: 'وصف مختصر.' }
      ]
    }
  ]
});
```

## نصائح

- اجمع المكوّنات المتقاربة في نفس الـ Container.
- استخدم أكثر من Container إذا عندك أقسام كثيرة.
