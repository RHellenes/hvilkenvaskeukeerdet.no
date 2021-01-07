<template>
  <div class="table">
    <div class="table__row table__row--header">
      <div class="table__column"></div>
      <div v-for="chore in chores" :key="`${chore}`" class="table__column">
        {{ chore }}
      </div>
    </div>
    <div
      v-for="week in tableData"
      :key="week.nr"
      class="table__row"
      :class="currentWeek === week.nr && 'table__row--highlight'"
    >
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
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;

  &__row {
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid;
    &--header {
      & * {
        background: white !important;
        font-weight: bolder;
      }
    }
    &--highlight {
      //border-bottom: 2px solid;
    }
  }
  &__column {
    width: 30%;
    padding: 1em 1em 0.2em 1em;
    &:first-of-type {
      //background: red;
      width: 10%;
    }
    &:nth-of-type(even) {
      background: #35495e1c;
    }
  }
}
</style>
