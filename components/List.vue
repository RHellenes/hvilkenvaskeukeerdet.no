<template>
  <div class="bg-white shadow-md overflow-hidden rounded-md">
    <div class="bg-white px-4 py-2 sm:px-6 my-3">
      <h1 class="text-2xl font-medium text-gray-900">
        Hvilken vaskeuke er det?
      </h1>
    </div>
    <dl>
      <div
        v-for="(element, index) in concatinatedList"
        :key="element.chore"
        class="px-4 py-5 grid grid-cols-4 sm:gap-4 sm:px-6"
        :class="index % 2 ? 'bg-white' : 'bg-gray-50'"
      >
        <dt class="text-sm font-medium text-gray-600 col-span-2">
          {{ element.chore }}
        </dt>
        <dd class="text-sm text-gray-900 col-span-2">
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
