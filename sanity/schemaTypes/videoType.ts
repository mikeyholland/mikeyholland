import { defineField, defineType } from 'sanity';

export const videoType = defineType({
  name: 'video',
  title: 'Video',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      title: 'Video file',
      name: 'video',
      type: 'mux.video',
    }),
  ],
});
