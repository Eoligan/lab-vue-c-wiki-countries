<script setup>
import { useCountriesStore } from "@/stores/countriesStore"
import { onMounted } from "vue"
import { useRoute } from "vue-router"
import { watch } from "vue"

const countriesStore = useCountriesStore()
const route = useRoute()

onMounted(() => {
  countriesStore.fetchCountries()
})
</script>

<template>
  <RouterView></RouterView>
</template>
<style></style>
