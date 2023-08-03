<template>
  <div class="bg-blue-500">
    <section>
      <ul>
        <li v-for="country in sortedCountriesList" :key="country.id">
          {{ country }}
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";

const countriesList = ref([]);

const fetchCountries = async (total) => {
  const response = await fetch(
    "https://ih-countries-api.herokuapp.com/countries"
  );
  const data = await response.json();
  for (let i = 0; i < data.length; i++) {
    // countriesList[i].value = data.common;
    countriesList.value.push(data[i].name.common);

    // console.log(countriesList.value);
  }
};

onMounted(() => {
  fetchCountries();
});
console.log(countriesList.value.sort());
const sortedCountriesList = computed(() => {
  return countriesList.value.sort();
});
</script>
