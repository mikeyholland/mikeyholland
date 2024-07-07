import type { StructureResolver } from 'sanity/structure';
import { UserIcon, ProjectsIcon } from '@sanity/icons';
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';

export const structure: StructureResolver = (S, context) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      // Our singleton type has a list item with a custom child
      S.listItem()
        .title('About')
        .id('about')
        .child(
          // Instead of rendering a list of documents, we render a single
          // document, specifying the `documentId` manually to ensure
          // that we're editing the single instance of the document
          S.document().schemaType('about').documentId('about'),
        )
        .icon(UserIcon),
      orderableDocumentListDeskItem({
        type: 'project',
        title: 'Projects',
        icon: ProjectsIcon,
        S,
        context,
      }),
    ]);
