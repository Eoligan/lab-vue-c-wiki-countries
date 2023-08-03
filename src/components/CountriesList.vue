<template>
  <section>
    <ul>
      <li
        class="grid cursor-pointer place-items-center border border-gray-400 p-10 text-sm font-bold uppercase hover:bg-gray-200 active:bg-gray-300"
        v-for="country in sortedCountriesList"
        :key="country.id"
      >
        {{ country.name.common }}
        <img
          class="pt-4"
          :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"
          alt=""
        />
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from "vue"

const countriesList = ref([])

const fetchCountries = async () => {
  try {
    const response = await fetch(
      "https://ih-countries-api.herokuapp.com/countries"
    )
    const data = await response.json()
    for (let i = 0; i < data.length; i++) {
      countriesList.value.push(data[i])
    }
  } catch (error) {
    console.log("There was an error", error)
  }
}

onMounted(() => {
  fetchCountries()
})

const sortedCountriesList = computed(() => {
  return countriesList.value.sort((a, b) => {
    return a.name.common.localeCompare(b.name.common)
  })
})
</script>
