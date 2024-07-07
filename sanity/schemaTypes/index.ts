import { type SchemaTypeDefinition } from 'sanity';

import { aboutType } from './aboutType';
import { projectType } from './projectType';
import { socialLinkType } from './socialLinkType';
import { videoType } from './videoType';

export const schema: SchemaTypeDefinition[] = [
  aboutType,
  projectType,
  socialLinkType,
  videoType,
];
