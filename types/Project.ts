import {PortableTextBlock} from 'sanity'

export type Project = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    image: string;
    url: string;
    github: string;
    components: string[];
    content: PortableTextBlock[];

}

export type Profile = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    image: string;
    url: string;
    content: PortableTextBlock[];
}