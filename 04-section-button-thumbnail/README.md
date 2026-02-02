# 04 — Section + Button + Thumbnail

**Section** يجمع نص مع عنصر جانبي (Accessory) مثل زر أو صورة مصغرة.

## متى تستخدمه؟

- عرض سطر معلومات مع زر إجراء سريع.
- إظهار بطاقة بسيطة مع صورة صغيرة.

## مثال سريع (Section + Button)

```js
await channel.send({
  components: [
    {
      type: 1, // Container
      components: [
        {
          type: 11, // Section
          components: [
            { type: 10, content: 'هل تريد تفعيل التنبيهات؟' }
          ],
          accessory: {
            type: 2, // Button
            style: 1,
            label: 'تفعيل',
            custom_id: 'notify_enable'
          }
        }
      ]
    }
  ]
});
```

## مثال سريع (Section + Thumbnail)

```js
await channel.send({
  components: [
    {
      type: 1,
      components: [
        {
          type: 11,
          components: [
            { type: 10, content: 'بطاقة سريعة للمستخدم.' }
          ],
          accessory: {
            type: 9, // Thumbnail
            media: {
              url: 'https://picsum.photos/200'
            }
          }
        }
      ]
    }
  ]
});
```

## نصائح

- خلي النص مختصر عشان تكون البطاقة أنيقة.
- استخدم زر واحد واضح بدل عدة أزرار.
