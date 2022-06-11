<template>
  <div
    class="container relative flex flex-wrap items-start justify-center w-full mx-auto overflow-hidden bg-white rounded-md shadow-md aspect-square focus:outline-none"
    :class="showExplanation && 'grid-rows-3'"
  >
    <button class="absolute top-0 bottom-0 left-0 right-0 z-20 w-full " @click="() => (showExplanation = !showExplanation)" />
    <img
      :src="`/images/coolPerson-${thisWeekProverb.coolPerson.toLowerCase()}.png`"
      :alt="`Bra bilde av ${thisWeekProverb.coolPerson}`"
      class="absolute w-full grayscale brightness-110"
    >

    <div class="z-10 flex flex-col justify-between flex-grow h-full px-2 py-3 pl-3 bg-opacity-75 bg-emerald-900 ">
      <h1 class="text-2xl font-medium text-white">
        Hvilken vaskeuke er det?
      </h1>
      <div>
        <p class="text-lg leading-6">
          <span
            class="text-xs font-semibold tracking-wide uppercase text-emerald-100"
          >
            Ukens visdomsord
          </span>
          <br>
          <span v-if="!showExplanation" class="text-white">

            {{ thisWeekProverb.ordtak }} –{{ thisWeekProverb.coolPerson }}
          </span>
          <span v-else class="text-white">

            {{ thisWeekProverb.betydning }}
          </span>
        </p>
        <!-- <p class="font-bold text-right text-emerald-100">
          –{{ thisWeekProverb.coolPerson }}
        </p> -->
      </div>
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
