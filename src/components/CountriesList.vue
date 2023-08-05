<script setup>
import { ref, onMounted, computed } from "vue"
import CountryDetails from "./CountryDetails.vue"

const countriesList = ref([])
const selectedCountry = ref()

const fetchCountries = async () => {
  try {
    const response = await fetch(
      "https://ih-countries-api.herokuapp.com/countries"
    )
    const data = await response.json()

    countriesList.value = data
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

const selectCountry = (country) => {
  // console.log(country);
  selectedCountry.value = country
  // console.log(selectedCountry.value.alpha3Code)
}
</script>

<template>
  <div
    class="grid max-w-7xl flex-1 grid-cols-3 gap-6 self-center overflow-y-auto p-5"
  >
    <section class="scroll col-span-1 overflow-y-auto">
      <ul>
        <li
          @click="selectCountry(country)"
          class="grid cursor-pointer place-items-center border border-gray-400 p-10 text-sm font-bold uppercase hover:bg-gray-200 active:bg-gray-300"
          v-for="country in sortedCountriesList"
          :key="country.alpha3Code"
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

    <section class="col-span-2" v-if="selectedCountry">
      <RouterLink
        :to="{
          name: 'country',
          params: { country: selectedCountry.alpha3Code },
        }"
      >
        <CountryDetails
          :name="selectedCountry.name.common"
          :capital="selectedCountry.capital[0]"
          :area="selectedCountry.area"
          :borders="selectedCountry.borders"
          :image="selectedCountry.alpha2Code.toLowerCase()"
        ></CountryDetails>
      </RouterLink>
    </section>
  </div>
</template>
