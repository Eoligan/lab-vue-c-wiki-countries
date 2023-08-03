<template>
  <NavBar></NavBar>
  <CountriesList class="grid place-items-center"></CountriesList>
  <CountryDetails></CountryDetails>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
import CountriesList from "../components/CountriesList.vue";
import CountryDetails from "../components/CountryDetails.vue";
</script>

<style></style>
