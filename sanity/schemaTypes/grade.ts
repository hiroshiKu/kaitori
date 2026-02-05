import {defineType, defineField} from 'sanity'

export default {
  name: 'grade',
  title: 'Grade',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'ランク',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'order',
      title: '表示順',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
  ],
}
