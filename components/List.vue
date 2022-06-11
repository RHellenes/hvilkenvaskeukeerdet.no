<template>
  <div class="overflow-hidden bg-white rounded-md shadow-md">
    <dl>
      <div
        v-for="(element, index) in concatinatedList"
        :key="element.chore"
        class="grid grid-cols-4 px-4 py-5 sm:gap-4 sm:px-6"
        :class="index % 2 ? 'bg-white' : 'bg-gray-50'"
      >
        <dt class="col-span-2 text-sm font-medium text-emerald-800">
          {{ element.chore }}
        </dt>
        <dd class="col-span-2 text-sm text-emerald-900">
          {{ element.coolPerson }}
        </dd>
      </div>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'ListComp',
  // eslint-disable-next-line vue/require-prop-types
  props: ['tableData', 'currentWeek', 'chores', 'thisWeekProverb'],
  computed: {
    thisWeeksRotation () {
      return this.tableData[this.currentWeek - 1]
    },
    concatinatedList () {
      const list = []
      const thisWeeksRotation = this.thisWeeksRotation.coolPersons
      this.chores.forEach((chore, index) => {
        const obj = {
          chore,
          coolPerson: thisWeeksRotation[index]
        }
        list.push(obj)
      })
      return list
    }
  }
}
</script>
