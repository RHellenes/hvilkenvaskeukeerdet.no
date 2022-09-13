<template>
  <div class="grid max-w-3xl grid-cols-12 gap-4 px-3 py-5 m-auto">
    <div class="flex flex-col justify-end col-span-12 md:col-span-6">
      <List
        :table-data="orderedList"
        :current-week="currentWeek"
        :chores="res.Housing.chores"
      />
    </div>
    <!-- <div v-for="(member) in orderedList" :key="`${member.name}${member.nr}`" class="mt-2 border-green-800 border-solid">
      {{ member.name }}
    </div> -->
  </div>
</template>

<script>
import gql from 'graphql-tag'
import List from '@/components/List.vue'

const GET_HOUSING_INFO = gql`
  query GET_HOUSING_INFO($id: ID!) {
    Housing(where: { id: $id }) {
      id
      members {
        id
        name
        choreDoneDate
      }
      owner{
        id
      }
      chores {
        title
        description
      }
    }
  }
`
export default {
  name: 'HousingId',
  components: {
    List
  },
  async asyncData ({ app, params }) {
    const client = app.apolloProvider.defaultClient
    const res = await client.query({
      query: GET_HOUSING_INFO,
      variables: {
        id: params.id
      }
    })
    return { res: res.data }
  },
  computed: {
    currentWeek () { return this.$dayjs().week() },
    orderedList () {
      const totalWeeks = this.$dayjs().isoWeeksInYear() + 1

      let coolPeopleCopy = [...this.res.Housing.members]
      const data = []

      for (let index = 1; index < totalWeeks; index++) {
        const lastPerson = coolPeopleCopy.pop()

        coolPeopleCopy = [lastPerson].concat(coolPeopleCopy)
        const week = [...coolPeopleCopy]

        data.push(week)
      }

      return data[this.currentWeek]
    }
  }
}
</script>
