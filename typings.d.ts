
interface Base {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string,
    _updatedAt: string;
}

export interface Services extends Base {
    author: AuthStoreOptions;
    body: Block[];
    categories: Category[];
    mainImage: Image;
    slug: Slug;
    title: string;
    headingHero: string;
    headingMessage: string;
    heroImage: Image;
    description: string;
}


// export interface Testimonials extends Base {
//     _type: "testimonials";
//     feedback: string;
//     imgUrl: Image;
//     date: string;
//     company: string;
//     name: string;
// }

// export interface Social extends Base {
//     _type: "social";
//     title: string;
//     url: string;
// }

// export interface FAQs extends Base {
//     _type: "faqs";
//     question: string;
//     answer: string;
// }


interface Author extends Base {
    bio: Block[];
    image: Image;
    name: string;
    slug: Slug;
}

interface Image {
    _type: "image";
    asset: Reference;
}

interface Reference {
    _ref: string;
    _type: "reference"
}

interface Slug {
    _type: "slug";
    current: string;
}

interface Block {
    _key: string;
    _type: "block";
    children: Span[];
    markDefs: any[];
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Span {
    _key: string;
    _type: "span";
    marks: string[];
    text: string;

}

// interface Geopoint extends Base {
//     _type: geopoint;
//     lat: number;
//     lng: number;
//     alt: number;
// }

interface Category extends Base {
    description: string;
    title: string;
}

interface MainImage {
    _type: "image";
    asset: Reference;
}

interface Title {
    _type: "string";
    current: string;
}

