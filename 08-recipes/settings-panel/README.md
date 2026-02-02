# Recipe — Settings Panel

لوحة إعدادات بسيطة بالعربي فيها عنوان، وصف، وقائمة اختيار.

## الفكرة

- عنوان واضح
- وصف مختصر
- Select Menu للاختيار

## مثال جاهز

```js
await channel.send({
  components: [
    {
      type: 1, // Container
      components: [
        { type: 10, content: '⚙️ لوحة الإعدادات' },
        { type: 14 },
        { type: 10, content: 'اختر إعدادك المفضل من القائمة.' },
        {
          type: 3,
          custom_id: 'settings_select',
          placeholder: 'اختر خياراً',
          options: [
            { label: 'إشعارات: تشغيل', value: 'notify_on' },
            { label: 'إشعارات: إيقاف', value: 'notify_off' },
            { label: 'لغة: العربية', value: 'lang_ar' }
          ]
        }
      ]
    }
  ]
});
```

## تحسينات مقترحة

- أضف زر حفظ بجانب القائمة داخل Section.
- افصل إعدادات كثيرة باستخدام Separator.
