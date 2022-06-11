<template>
  <div
    class="container flex flex-wrap items-start justify-center w-full py-3 pl-3 mx-auto bg-white rounded-md shadow-md focus:outline-none"
    :class="showExplanation && 'grid-rows-3'"
    @click="() => (showExplanation = !showExplanation)"
  >
    <img
      :src="`/images/coolPerson-${thisWeekProverb.coolPerson.toLowerCase()}.png`"
      :alt="`Bra bilde av ${thisWeekProverb.coolPerson}`"
      class="rounded-full w-28"
    >

    <div class="flex flex-col justify-center flex-grow px-2">
      <p class="text-lg leading-6">
        <span
          class="text-xs font-semibold tracking-wide text-gray-500 uppercase"
        >
          Ukens visdomsord
        </span>
        <br>
        {{ thisWeekProverb.ordtak }}
      </p>
      <p class="font-bold text-right text-teal-800">
        –{{ thisWeekProverb.coolPerson }}
      </p>
    </div>
    <div v-if="showExplanation" class="flex justify-center w-full">
      <p class="text-sm text-gray-700">
        ({{ thisWeekProverb.betydning }})
      </p>
    </div>
    <div v-else class="flex justify-center w-full">
      <p class="text-sm text-gray-700 cursor-pointer">
        ?
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuoteComponent',
  props: ['thisWeekProverb', 'imageStrings'],
  data () {
    return {
      showExplanation: false
    }
  },
  computed: {}
}
</script>
