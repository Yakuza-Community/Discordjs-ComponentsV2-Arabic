# 05 — Media Gallery

**Media Gallery** يعرض مجموعة صور/وسائط داخل نفس الرسالة.

## متى تستخدمه؟

- عرض منتجات أو لقطات متعددة.
- استعراض صور حدث أو ملفات.

## مثال سريع

```js
await channel.send({
  components: [
    {
      type: 1, // Container
      components: [
        {
          type: 12, // Media Gallery
          items: [
            { media: { url: 'https://picsum.photos/seed/1/400/300' } },
            { media: { url: 'https://picsum.photos/seed/2/400/300' } },
            { media: { url: 'https://picsum.photos/seed/3/400/300' } }
          ]
        }
      ]
    }
  ]
});
```

## نصائح

- حافظ على نفس أبعاد الصور قد ما تقدر.
- لا تبالغ بعدد الصور داخل نفس الرسالة.
