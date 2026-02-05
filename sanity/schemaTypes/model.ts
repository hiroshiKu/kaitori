import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'model',
  type: 'document',
  title: 'モデル',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'モデル名',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'スラッグ',
      options: {source: 'title'},
    }),
    defineField({
      name: 'category',
      type: 'reference',
      title: 'カテゴリ',
      to: [{type: 'category'}],
    }),
  ],
})
