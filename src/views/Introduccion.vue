<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.bg-c1
      .col-12
        .px-5.pb-5
          .row.align-items-center
            .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
              p El componente formativo aborda las principales técnicas de conservación de forrajes y suplementación animal, esenciales para garantizar la disponibilidad de alimento durante todo el año, especialmente en épocas de escasez. Estas prácticas ayudan a mejorar la productividad y la salud del ganado, asegurando que reciba una alimentación adecuada.
              .row.mb-3
                .col-12
                  .p-3.bg-c2
                    .row.align-items-center
                      .col-md-auto
                        figure
                          img(src='@/assets/curso/intro/img1.svg', alt='', style='width: 80px').m-auto
                      .col
                        p.mb-0 Se detallan métodos como el ensilaje y la henificación, que permiten almacenar forraje de calidad para su uso en temporadas desfavorables. Además, se analizan las ventajas y desventajas de cada técnica, así como los requerimientos para su correcta implementación.
              p.mb-0 La suplementación animal, mediante bloques nutricionales, también se presenta como una solución clave para completar la dieta de los animales en períodos de baja producción forrajera. El componente formativo incluye los ingredientes necesarios y los pasos para elaborar estos suplementos de manera artesanal.
            .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/intro/img2.png', alt='', style='width: 350px').m-auto
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
