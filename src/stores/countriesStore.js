import { defineStore } from "pinia"
import { ref } from "vue"

export const useCountriesStore = defineStore("countriesStore", () => {
  const countriesList = ref([])

  const fetchCountries = async () => {
    try {
      const response = await fetch(
        "https://ih-countries-api.herokuapp.com/countries"
      )
      const data = await response.json()

      countriesList.value = data
    } catch (error) {
      console.log("There was an error", error)
    }
  }

  return { countriesList, fetchCountries }
})
