<template>
  <NavBar></NavBar>
  <div class="grid grid-cols-3 m-6 gap-6 h-[calc(100vh-5rem-3rem)]">
    <CountriesList class="col-span-1"></CountriesList>
    <CountryDetails class="col-span-2"></CountryDetails>
  </div>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
import CountriesList from "../components/CountriesList.vue";
import CountryDetails from "../components/CountryDetails.vue";
</script>

<style></style>
