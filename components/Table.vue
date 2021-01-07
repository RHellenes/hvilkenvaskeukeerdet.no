<template>
  <div class="table">
    <div class="table__row">
      <div class="table__column">Ukenr</div>
      <div v-for="chore in chores" :key="`${chore}`" class="table__column">
        {{ chore }}
      </div>
    </div>
    <div v-for="week in tableData" :key="week.nr" class="table__row">
      <div class="table__column">
        {{ week.nr }}
      </div>
      <div
        v-for="coolPerson in week.coolPersons"
        :key="`${coolPerson}${week.nr}`"
        class="table__column"
      >
        {{ coolPerson }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',
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
      const outerCounter = 0
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
  },
  mounted() {
    // const weeks = this.$dayjs(new Date()).isoWeek()
    const totalWeeks = this.$dayjs().isoWeeksInYear()
    let coolPeopleCopy = [...this.coolPeople]
    const data = []
    const outerCounter = 0
    for (let index = 1; index < totalWeeks; index++) {
      const lastPerson = coolPeopleCopy.pop()
      // const last = coolPeopleCopy[3]
      coolPeopleCopy = [lastPerson].concat(coolPeopleCopy)
      const week = {
        nr: index,
        persons: [...coolPeopleCopy],
      }

      data.push(week)
    }
  },
}
</script>

<style lang="scss" scoped>
.table {
  max-width: 800px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  &__row {
    width: 300px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  &__column {
    width: 20%;
  }
}
</style>
