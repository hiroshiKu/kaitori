import {defineType, defineField} from 'sanity'

export default {
  name: 'price',
  title: 'Price',
  type: 'document',
  fields: [
    {
      name: 'model',
      title: '機種',
      type: 'reference',
      to: [{type: 'model'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'capacity',
      title: '容量',
      type: 'string',
      options: {
        list: ['64GB', '128GB', '256GB', '512GB'],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'grade',
      title: 'ランク',
      type: 'reference',
      to: [{type: 'grade'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      title: '買取価格',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    },
  ],
}
