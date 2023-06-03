import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import author from './schemas/author'
import services from './schemas/services'
import gallery from './schemas/gallery'
import testimonials from './schemas/testimonials'
import trusted from './schemas/trusted'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [post, author, trusted, testimonials, category, gallery, blockContent, services],
}
