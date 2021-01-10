<template>
  <div
    class="container mx-auto bg-white shadow-md rounded-md pl-3 py-3 grid grid-cols-4 grid-rows-2 focus:outline-none"
    :class="showExplanation && 'grid-rows-3'"
    @click="() => (showExplanation = !showExplanation)"
  >
    <img
      :src="`/images/coolPerson-${thisWeekProverb.coolPerson.toLowerCase()}.png`"
      :alt="`Bra bilde av ${thisWeekProverb.coolPerson}`"
      class="col-span-1 row-span-2 rounded-full"
    />

    <div class="col-span-3 row-span-2 px-2 flex flex-col justify-between">
      <p class="text-lg leading-6">
        <span
          class="text-xs tracking-wide uppercase font-semibold text-gray-500"
        >
          Ukens visdomsord
        </span>
        <br />
        {{ thisWeekProverb.ordtak }}
      </p>
      <p class="text-teal-800 font-bold text-right">
        –{{ thisWeekProverb.coolPerson }}
      </p>
    </div>
    <div
      v-if="showExplanation"
      class="col-span-4 row-span-1 flex flex-col justify-end"
    >
      <p class="text-sm text-gray-700">({{ thisWeekProverb.betydning }})</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Quote',
  data() {
    return {
      showExplanation: false,
    }
  },
  props: ['thisWeekProverb', 'imageStrings'],
  computed: {},
}
</script>
