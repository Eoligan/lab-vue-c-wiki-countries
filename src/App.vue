<script setup>
import { useCountriesStore } from "@/stores/countriesStore"
import { onMounted } from "vue"

const countriesStore = useCountriesStore()

onMounted(() => {
  countriesStore.fetchCountries()
})
</script>

<template>
  <RouterView></RouterView>
</template>
<style></style>
