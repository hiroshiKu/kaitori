import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'priceHistory',
  title: '買取価格履歴',
  type: 'document',

  fields: [
    defineField({
      name: 'model',
      title: 'モデル',
      type: 'reference',
      to: [{type: 'model'}],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'capacity',
      title: '容量',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'grade',
      title: 'グレード',
      type: 'string',
      options: {
        list: ['A', 'B', 'C', 'J'],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'price',
      title: '買取価格（円）',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),

    defineField({
      name: 'snapshotDate',
      title: '価格基準日',
      type: 'date',
      description: 'この日付時点の価格',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'importedAt',
      title: '取込日時',
      type: 'datetime',
      readOnly: true,
    }),
  ],

  preview: {
    select: {
      model: 'model.title',
      capacity: 'capacity',
      grade: 'grade',
      price: 'price',
      date: 'snapshotDate',
    },
    prepare({model, capacity, grade, price, date}) {
      return {
        title: `${model} / ${capacity} / ${grade}`,
        subtitle: `${date} ¥${price?.toLocaleString()}`,
      }
    },
  },
})
