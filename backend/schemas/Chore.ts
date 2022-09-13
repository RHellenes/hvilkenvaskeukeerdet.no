
import { list } from '@keystone-next/keystone/schema';
import { text } from '@keystone-next/fields';

export const Chore = list({
  fields: {
    title: text({ isRequired: true }),
    description: text({
      ui: { displayMode: 'textarea' },
    })
  }
});
