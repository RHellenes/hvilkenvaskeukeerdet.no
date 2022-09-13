import { list } from '@keystone-next/keystone/schema';
import { text, password, relationship, integer, timestamp } from '@keystone-next/fields';

export const User = list({
  // access
  // ui
  fields: {
    name: text({ isRequired: true }),
    email: text({ isRequired: true, isUnique: true }),
    password: password(),
    choreDoneDate: timestamp(),
    choreDoneCounter: integer(),
    housingOwnerOf: relationship({
      ref: 'Housing.owner',
      many: true
    }),
    housingMemberOf: relationship({
      ref: 'Housing.members',
      many: true
    })
  },
});
