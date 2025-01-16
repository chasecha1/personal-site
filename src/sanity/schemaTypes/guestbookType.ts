import {defineType, defineField} from 'sanity'

export const guestBookEntryType = defineType({
  name: 'guestBookEntry',
  title: 'Guest Book Entry',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
    defineField({
      name: 'message',
      type: 'text',
      title: 'Message',
    }),
    defineField({
      name: 'date',
      type: 'datetime',
      title: 'Date',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'message',
    },
  },
})