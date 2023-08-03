<template>
  <div>
    <section>
      <ul class="">
        <li
          class="border border-gray-400 p-10 grid place-items-center hover:bg-gray-200 cursor-pointer uppercase font-bold text-sm"
          v-for="country in sortedCountriesList"
          :key="country.id"
        >
          {{ country }}
          <img
            class="pt-4"
            src="https://flagpedia.net/data/flags/icon/72x54/fr.png"
            alt=""
          />
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
    countriesList.value.push(data[i].name.common);
  }
};

onMounted(() => {
  fetchCountries();
});

const sortedCountriesList = computed(() => {
  return countriesList.value.sort();
});
</script>
