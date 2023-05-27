
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'services',
    title: 'Services',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'headingHero',
            title: 'Heading Hero',
            type: 'string',
        }),
        defineField({
            name: 'heroTagline',
            title: 'Hero Tagline',
            type: 'string',
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'imageOne',
            title: 'Image One',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'imageTwo',
            title: 'Image Two',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'imageThree',
            title: 'Image three',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'imageFour',
            title: 'Image Four',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: { type: 'author' },
        }),
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'category' } }],
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        }),
    ],

    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
        },
        prepare(selection) {
            const { author } = selection
            return { ...selection, subtitle: author && `by ${author}` }
        },
    },
})
