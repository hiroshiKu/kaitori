export default {
  name: 'request',
  title: '査定リクエスト',
  type: 'document',
  fields: [
    {
      name: 'modelSlug',
      title: 'Model Slug',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'carrier',
      title: 'キャリア',
      type: 'string',
      options: {
        list: ['docomo', 'au', 'softbank', 'rakuten', 'simfree'],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'capacity',
      title: '容量',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'grade',
      title: 'ランク',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
}
