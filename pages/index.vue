<template>
  <div class="py-3 px-3">
    <Quote :thisWeekProverb="proverbs[currentWeek - 1]" />
    <List :tableData="tableData" :currentWeek="currentWeek" :chores="chores" />
  </div>
</template>

<script>
// import Table from '@/components/Table'
export default {
  name: 'Vaskeuke',
  components: {
    // Table,
  },
  head() {
    return {
      link: [
        {
          hid: 'icon',
          rel: 'icon',
          type: 'image/x-icon',
          href: `/images/coolPerson-${this.proverbs[
            this.currentWeek - 1
          ].coolPerson.toLowerCase()}.png`,
        },
      ],
    }
  },
  async asyncData({ $content }) {
    const doc = await $content('proverbs').fetch()
    const proverbs = doc.data
    return { proverbs }
  },
  data() {
    return {
      coolPeople: ['Jenny', 'René', 'Sofie', 'Sondre'],
      chores: ['Kjøkken', 'Gulv', 'Bad', 'Søppel'],
    }
  },
  computed: {
    tableData() {
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
          coolPersons: [...coolPeopleCopy],
        }

        data.push(week)
      }

      return data
    },
    currentWeek() {
      return this.$dayjs().isoWeek()
    },
  },
}
</script>

<style>
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
</style>
