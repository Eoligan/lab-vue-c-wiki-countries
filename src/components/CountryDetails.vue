<script setup>
import { ref } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()
const alpha3Code = ref({})
const props = defineProps({
  name: String,
  capital: String,
  area: Number,
  borders: String,
  image: String,
})

// const fetchCountry = async () => {
//   const id = route.params.country
//   const response = await fetch(
//     `https://ih-countries-api.herokuapp.com/countries/${id}`
//   )
//   const data = await response.json()
//   alpha3Code.value = data
// }

// watch(
//   () => route.params.country,
//   () => {
//     fetchCountry()
//   }
// )
</script>

<template>
  <div class="flex flex-col place-items-center space-y-8">
    <div class="grid h-64 place-items-end">
      <img
        class="aspect-auto w-96"
        :src="`https://flagpedia.net/data/flags/w1160/${image}.webp`"
        alt=""
      />
    </div>
    <h1 class="pb-10 text-center text-5xl font-bold">{{ name }}</h1>
    <div
      class="grid h-32 w-80 grid-cols-2 place-items-center items-start gap-y-6"
    >
      <p>Capital</p>
      <p class="font-bold">{{ capital }}</p>
      <p>Area</p>
      <p class="font-bold">{{ area }}</p>

      <p>Borders</p>
      <ul>
        <li v-for="border in borders">
          <p class="font-bold">{{ border }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
