import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'grade',
  title: 'グレード',
  type: 'document',

  fields: [
    defineField({
      name: 'code',
      title: 'グレードコード',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'label',
      title: '表示名',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: '並び順',
      type: 'number',
    }),
  ],

  preview: {
    select: {
      title: 'code',
      subtitle: 'label',
    },
  },
})
