import { ContentTypes } from '@/types/contentTypesEnum';

const contentfulEntries = [
  {
    content_type: ContentTypes.JOB_EXPERIENCE,
    order: '-fields.order',
  },
  {
    content_type: ContentTypes.SKILL,
    order: '-fields.rating',
  },
  {
    content_type: ContentTypes.HOBBY,
    order: '-fields.title',
  },
  {
    content_type: ContentTypes.SOCIAL_LINK,
    order: '-fields.order',
  },
];

export default contentfulEntries;
