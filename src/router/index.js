import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue"
import CountriesList from "@/components/CountriesList.vue";
import CountryDetails from "@/components/CountryDetails.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    children: [
      {
        path: "/:alpha3Code",
        name: "list",
        component: CountriesList,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

export default router;
