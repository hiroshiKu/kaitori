import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'price',
  title: '最新買取価格',
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
      type: 'reference',
      to: [{type: 'grade'}],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'price',
      title: '買取価格（円）',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),

    defineField({
      name: 'updatedAt',
      title: '更新日時',
      type: 'datetime',
      readOnly: true,
    }),
  ],

  preview: {
    select: {
      model: 'model.title',
      capacity: 'capacity',
      gradeCode: 'grade.code',
      gradeLabel: 'grade.label',
      price: 'price',
    },
    prepare({model, capacity, gradeCode, gradeLabel, price}) {
      return {
        title: `${model} / ${capacity} / ${gradeCode}`,
        subtitle: `${gradeLabel ?? ''} ¥${price?.toLocaleString()}`,
      }
    },
  },
})
