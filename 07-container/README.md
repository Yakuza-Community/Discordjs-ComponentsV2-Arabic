# 07 — Container

**Container** هو الهيكل الأساسي اللي يجمع كل Display Components داخل الرسالة.

## متى أستخدمه؟

- دائماً عند استخدام Display Components.
- لبناء رسالة منظمة ومقسمة.

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
