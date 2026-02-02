# Recipe — Profile Card

بطاقة بروفايل عربية بسيطة مع صورة مصغرة وزر متابعة.

## الفكرة

- اسم المستخدم ووصف سريع
- صورة مصغرة
- زر إجراء

## مثال جاهز

```js
await channel.send({
  components: [
    {
      type: 1, // Container
      components: [
        {
          type: 11, // Section
          components: [
            { type: 10, content: '👤 أحمد | مطوّر ديسكورد' },
            { type: 10, content: 'مهتم بالأدوات العربية وتجربة المستخدم.' }
          ],
          accessory: {
            type: 9,
            media: { url: 'https://picsum.photos/seed/avatar/160' }
          }
        },
        {
          type: 11,
          components: [
            { type: 10, content: 'تابعني للحصول على تحديثات جديدة.' }
          ],
          accessory: {
            type: 2,
            style: 1,
            label: 'متابعة',
            custom_id: 'follow_user'
          }
        }
      ]
    }
  ]
});
```

## تحسينات مقترحة

- أضف Media Gallery لعرض أعماله.
- أضف Separator بين المعلومات والزر.
