import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '5dqu2b8j',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: process.env.Token,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);