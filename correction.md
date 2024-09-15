Muy buen trabajo!

Para que te cargue los detalles del país, tal y como lo tienes hecho (sin hacer fetch de un sólo país buscándolo por su parámetro),
necesitas que countriesList de la store ya tenga datos, pero al cargar la página, como hacer fetch siempre lleva un tiempo (por eso
es asíncrono) countriesList no tiene nada, así que intenta buscar un país en una array vacío.
Para solucionar esto de una manera rápida sin tocar mucho código, puedes vigilar también la variable countriesList de la store con
el mismo watch donde vigilas los cambios del parámetro de ruta, así cuando countriesList tenga datos volverá a calcular el detalle:

watch(
  () => [route.params.country, countriesStore.countriesList],
  () => {
    selectedCountry.value = countriesStore.countriesList.find(
      (country) => country.alpha3Code === route.params.country
    )
  }
)
