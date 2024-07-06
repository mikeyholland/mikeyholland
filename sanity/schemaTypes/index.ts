import { type SchemaTypeDefinition } from 'sanity';

import { aboutType } from './aboutType';
import { artistType } from './artistType';
import { eventType } from './eventType';
import { projectType } from './projectType';
import { socialLinkType } from './socialLinkType';
import { venueType } from './venueType';
import { videoType } from './videoType';

export const schema: SchemaTypeDefinition[] = [
  aboutType,
  artistType,
  eventType,
  projectType,
  socialLinkType,
  venueType,
  videoType,
];
