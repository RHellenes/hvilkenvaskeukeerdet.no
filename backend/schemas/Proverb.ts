import { list } from '@keystone-next/keystone/schema';
import { text, relationship, integer } from '@keystone-next/fields';

export const Proverb = list({
  // access
  // ui
  fields: {
    saying: text({ isRequired: true, isUnique: true }),
    meaning: text({ isRequired: true }),
    week: integer({ isRequired: true, isUnique: true }),
    person: relationship({ ref: 'User' })
  },
});
