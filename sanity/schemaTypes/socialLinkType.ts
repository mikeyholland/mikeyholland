import { defineField, defineType } from 'sanity';

export const socialLinkType = defineType({
  name: 'socialLink',
  title: 'Social Link',
  type: 'document',
  fields: [
    defineField({
      name: 'text',
      type: 'string',
    }),
    defineField({
      name: 'href',
      type: 'string',
    }),
    // defineField({
    //   name: 'svgIcon',
    //   title: 'SVG Icon',
    //   type: 'inlineSvg',
    // }),
  ],
});
