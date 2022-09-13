
import { list } from '@keystone-next/keystone/schema';
import { text, relationship } from '@keystone-next/fields';

export const Housing = list({
  // access
  // ui
  fields: {
    name: text({ isRequired: true }),
    owner: relationship({
      ref: 'User.housingOwnerOf',
    }),
    members: relationship({
      ref: 'User.housingMemberOf',
      many: true,
      //ui: {
      //   cardFields: ['image', 'altText'],
      //   inlineEdit: { fields: ['image', 'altText'] },
      //   inlineCreate: { fields: ['image', 'altText'] },
      //   inlineConnect: false,
    // },
    }),
    chores: relationship({
      ref: 'Chore',
      many: true
    })
  },
});
