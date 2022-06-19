<template>
  <div class="grid max-w-3xl grid-cols-12 gap-4 px-3 py-5 m-auto">
    <!-- <div class="flex col-span-12 md:col-span-6">
      <Login />
    </div> -->
    <div class="col-span-12 md:col-span-6">
      <Quote :this-week-proverb="proverbs[currentWeek - 1]" />
    </div>
    <div class="flex flex-col justify-end col-span-12 md:col-span-6">
      <List
        :table-data="tableData"
        :current-week="currentWeek"
        :chores="chores"
      />
    </div>

    <!-- <PushTest /> -->
  </div>
</template>

<script>
// import PushTest from '@/components/PushTest.vue'
import List from '@/components/List.vue'
import Quote from '@/components/Quote.vue'
import Login from '~/components/Login.vue'

export default {
  name: 'VaskeukePage',
  components: {
    List,
    Quote, // PushTest

    Login
  },
  async asyncData ({ $content }) {
    const doc = await $content('proverbs').fetch()
    const proverbs = doc.data
    return { proverbs }
  },
  data () {
    return {
      coolPeople: ['Jenny', 'Sunniva', 'René', 'Sofie', 'Sondre'],
      chores: ['Kjøkken', 'Gulv', 'Pant & Støv', 'Bad', 'Søppel']
    }
  },
  head () {
    return {
      link: [
        {
          hid: 'icon',
          rel: 'icon',
          type: 'image/x-icon',
          href: `/images/coolPerson-${this.proverbs[
            this.currentWeek - 1
          ].coolPerson.toLowerCase()}.png`
        }
      ]
    }
  },
  computed: {
    tableData () {
      // const weeks = this.$dayjs(new Date()).isoWeek()
      const totalWeeks = this.$dayjs().isoWeeksInYear() + 1
      let coolPeopleCopy = [...this.coolPeople]
      const data = []
      // const outerCounter = 0
      for (let index = 1; index < totalWeeks; index++) {
        const lastPerson = coolPeopleCopy.pop()
        // const last = coolPeopleCopy[3]
        coolPeopleCopy = [lastPerson].concat(coolPeopleCopy)
        const week = {
          nr: index,
          coolPersons: [...coolPeopleCopy]
        }

        data.push(week)
      }

      return data
    },
    currentWeek () {
      return this.$dayjs().isoWeek()
    }
  }
}
</script>
