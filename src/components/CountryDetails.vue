<script setup>
const props = defineProps({
  name: String,
  capital: String,
  area: Number,
  borders: Array,
  image: String,
})
</script>

<template>
  <div class="flex flex-col place-items-center space-y-8">
    <div class="grid h-64 place-items-end">
      <img
        class="aspect-[16/10] max-w-xs overflow-hidden"
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
      <p class="font-bold">{{ area }} km<sup>2</sup></p>

      <p>Borders</p>
      <ul>
        <li v-for="border in borders" :key="border">
          <RouterLink
            :to="{
              name: 'home',
              params: { country: border },
            }"
            :key="border"
          >
            <p
              class="font-bold text-blue-800 underline hover:text-blue-500 hover:no-underline"
            >
              {{ border }}
            </p>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>
