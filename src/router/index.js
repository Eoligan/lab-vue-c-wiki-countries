import { createRouter, createWebHistory } from "vue-router"
import Home from "@/views/Home.vue"
import CountriesList from "@/components/CountriesList.vue"
import CountryDetails from "@/components/CountryDetails.vue"

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/:country",
      name: "country",
      component: CountryDetails,
    },
  ],
})

export default router
