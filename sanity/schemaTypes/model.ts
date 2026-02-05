import {defineType, defineField} from 'sanity'

export default {
  name: 'model',
  title: 'Model',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: '機種名',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      description: 'iPhoneは機種名のみ / Androidはキャリア型番込み（例: aquos_sense8_SH-54D）',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'platform',
      title: 'Platform',
      type: 'string',
      options: {
        list: [
          {title: 'iPhone', value: 'iphone'},
          {title: 'Android', value: 'android'},
        ],
      },
      validation: (Rule) => Rule.required(),
    },
  ],
}
