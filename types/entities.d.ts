import { Image } from "sanity";

export type PostsProfile = {
  _id: string,
  title: string,
  slug: {
    current: string,
    _type: string,
  };
  publishedAt: string,
  body: TypedObject[]
}

export type ProjectsProfile = {
  _id: string,
  title: string,
  link: string,
  description: TypedObject[],
  mainImage: Image
}

export type GuestBookProfile = {
  _id: string,
  name: string,
  message: string,
  date: string
}