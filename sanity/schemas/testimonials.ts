
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [
        defineField({
            name: 'company',
            title: 'Company',
            type: 'string',
        }),
        defineField({
            name: 'position',
            title: 'Position',
            type: 'string',
        }),
        defineField({
            name: 'feedback',
            title: 'Feedback',
            type: 'string',
        }),
        defineField({
            name: 'Image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ]
}
)
