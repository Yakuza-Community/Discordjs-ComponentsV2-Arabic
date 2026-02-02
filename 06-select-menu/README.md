# 06 — Select Menu

**Select Menu** يعطي المستخدم قائمة اختيارات بسيطة داخل الرسالة.

## متى أستخدمه؟

- اختيار إعداد أو تفضيل.
- اختيار لغة أو قسم.

## مثال سريع

```js
await channel.send({
  components: [
    {
      type: 1, // Container
      components: [
        {
          type: 3, // Select Menu
          custom_id: 'lang_select',
          placeholder: 'اختر اللغة',
          options: [
            { label: 'العربية', value: 'ar' },
            { label: 'English', value: 'en' }
          ]
        }
      ]
    }
  ]
});
```

## نصائح

- خلي الخيارات قصيرة وواضحة.
- استخدم placeholder واضح.
