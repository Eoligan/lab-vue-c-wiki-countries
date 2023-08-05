<template>
  <div class="mx-auto flex h-screen flex-col">
    <NavBar></NavBar>

    <CountriesList></CountriesList>
  </div>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue"
import CountriesList from "../components/CountriesList.vue"
import CountryDetails from "../components/CountryDetails.vue"
</script>

<style></style>
