import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'trustedBy',
    title: 'TrustedBy',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ]
})

