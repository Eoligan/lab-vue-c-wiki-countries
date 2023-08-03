<template>
  <div class="mx-auto flex h-screen flex-col">
    <NavBar></NavBar>
    <div
      class="grid max-w-7xl flex-1 grid-cols-3 gap-6 self-center overflow-y-auto p-5"
    >
      <CountriesList class="scroll col-span-1 overflow-y-auto"></CountriesList>
      <CountryDetails class="col-span-2"></CountryDetails>
    </div>
  </div>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue"
import CountriesList from "../components/CountriesList.vue"
import CountryDetails from "../components/CountryDetails.vue"
</script>

<style></style>
