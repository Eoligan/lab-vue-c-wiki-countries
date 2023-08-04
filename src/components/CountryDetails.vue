<template>
<div class="bg-red-500">
 asdadasdasdadadsa
</div>

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


</script>
