import { defineField, defineType } from 'sanity'
import { MdPerson as icon } from 'react-icons/md'

export default defineType({
  name: 'customers',
  title: 'Customers',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Please use "Firstname Lastname" format',
    }),
    defineField({
      name: 'phone',
      title: 'PHone Number',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'area',
      title: 'Service Area',
      type: 'number',
      options: {
        list: [
          {
            title: "Inside Dhaka",
            value: 60
          },
          {
            title: "Outside Dhaka",
            value: 100
          },
        ]
      }
    }),
    defineField({
      name: 'items',
      title: 'items',
      type: 'string',
    }),
  ],
})
