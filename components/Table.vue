<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-2 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 rounded-md">
          <table class="min-w-full divide-y-2 divide-gray-200">
            <thead class="bg-gray-100">
              <tr>
                <th class="py-3 pb-1 pl-1 pr-1"></th>
                <th
                  v-for="chore in chores"
                  :key="`${chore}`"
                  scope="col"
                  class="pr-0 py-3 pl-1 text-left text-xs font-medium text-gray-800 uppercase tracking-wider subpixel-antialiased"
                >
                  {{ chore }}
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr
                v-for="week in tableData"
                :key="week.nr"
                class="text-gray-600"
                :class="[
                  !(week.nr % 2) && 'bg-gray-50',
                  currentWeek === week.nr && 'font-semibold text-teal-700',
                ]"
              >
                <td
                  class="py-3 pb-1 pl-1 pr-1 whitespace-nowrap subpixel-antialiased text-center"
                >
                  {{ week.nr }}
                </td>
                <td
                  class="py-3 pb-1 pl-1 pr-1 whitespace-nowrap subpixel-antialiased"
                  v-for="coolPerson in week.coolPersons"
                  :key="`${coolPerson}${week.nr}`"
                >
                  {{ coolPerson }}
                </td>
              </tr>

              <!-- More rows... -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: ['tableData', 'currentWeek', 'chores'],
}
</script>

<style lang="scss" scoped>
.table2 {
}
</style>
