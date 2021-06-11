<template>
  <div
    class="w-full container mx-auto bg-white shadow-md rounded-md pl-3 py-3 flex focus:outline-none flex-wrap items-start"
    :class="showExplanation && 'grid-rows-3'"
    @click="() => (showExplanation = !showExplanation)"
  >
    <img
      :src="`/images/coolPerson-${thisWeekProverb.coolPerson.toLowerCase()}.png`"
      :alt="`Bra bilde av ${thisWeekProverb.coolPerson}`"
      class="w-28 rounded-full"
    />

    <div class="flex-grow px-2 flex flex-col justify-center">
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
    <div v-if="showExplanation" class="w-full flex justify-center">
      <p class="text-sm text-gray-700">({{ thisWeekProverb.betydning }})</p>
    </div>
    <div v-else class="w-full flex justify-center">
      <p class="text-sm text-gray-700 cursor-pointer">?</p>
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
