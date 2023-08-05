<script setup>
import { ref, computed, watch } from "vue"
import { useRoute } from "vue-router"
import CountryDetails from "@/components/CountryDetails.vue"
import { useCountriesStore } from "@/stores/countriesStore"

const countriesStore = useCountriesStore()
const selectedCountry = ref()
const route = useRoute()

const sortedCountriesList = computed(() => {
  return countriesStore.countriesList.sort((a, b) => {
    return a.name.common.localeCompare(b.name.common)
  })
})

watch(
  () => route.params.country,
  () => {
    selectedCountry.value = countriesStore.countriesList.find(
      (country) => country.alpha3Code === route.params.country
    )
  }
)

const selectCountry = (country) => {
  selectedCountry.value = country
}
</script>

<template>
  <div
    class="grid max-w-7xl flex-1 grid-cols-3 gap-6 self-center overflow-y-auto bg-slate-200 p-5"
  >
    <section class="scroll col-span-1 overflow-y-auto">
      <ul>
        <li
          @click="selectCountry(country)"
          class="grid cursor-pointer place-items-center border border-gray-400 p-10 text-sm font-bold uppercase hover:bg-gray-200 active:bg-gray-300"
          v-for="country in sortedCountriesList"
          :key="country.alpha3Code"
        >
          <RouterLink
            class="grid h-full w-full place-items-center"
            :to="{
              name: 'home',
              params: { country: country.alpha3Code },
            }"
          >
            {{ country.name.common }}

            <img
              class="pt-4"
              :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"
              alt=""
            />
          </RouterLink>
        </li>
      </ul>
    </section>

    <section class="col-span-2" v-if="!selectedCountry">
      <h1 class="grid place-items-center pt-40 text-center text-4xl font-bold">
        Welcome
      </h1>
      <p class="text-center text-2xl">Select a country to show the details.</p>
    </section>

    <section class="col-span-2" v-if="selectedCountry">
      <CountryDetails
        :name="selectedCountry.name.common"
        :capital="selectedCountry.capital[0]"
        :area="selectedCountry.area"
        :borders="selectedCountry.borders"
        :image="selectedCountry.alpha2Code.toLowerCase()"
      >
      </CountryDetails>
    </section>
  </div>
</template>
