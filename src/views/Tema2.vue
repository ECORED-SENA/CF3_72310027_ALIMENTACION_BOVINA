<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Suplementación
    .row.mb-4
      .col-12
        .p-4.bg-c15
          p(data-aos="fade-right") La suplementación animal es una práctica que consiste en proporcionar a los animales de producción una fuente adicional de nutrientes que complementa su dieta básica, especialmente en situaciones donde los recursos naturales, como los pastos, no satisfacen todas sus necesidades nutricionales. Esta técnica es fundamental para mejorar el rendimiento productivo y reproductivo de los animales, garantizando un adecuado aporte de energía, proteínas, vitaminas y minerales, lo que contribuye a su salud, crecimiento y eficiencia en la producción de carne, leche u otros productos. En el siguiente podcast se explica a profundidad:
          .row
            .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
              .p-3.bg-c22
                .row.align-items-center
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema2/img1.svg', alt='', style='width: 300px').m-auto
                  .col-md-7
                    p.txt-c1.mb-0 #[b ¿Sabías qué?]
                    p.text-white Lo invitamos a escuchar el siguiente Pódcast:
                    TarjetaAudio.color-primario(
                      texto="Texto de muestra  "
                      :audio="require('@/assets/componentes/audios/Suplementacion.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            .col-lg-6(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema2/img1.png', alt='', style='width: 520px').m-auto
    .row.align-items-center(data-aos="fade-up")
      .col-lg-10.mb-4.mb-lg-0
        .row
          .col-auto.d-none.d-md-block
            figure
              img(src='@/assets/curso/tema2/img2.svg', alt='', style='width: 90px').m-auto
          .col
            p.mb-0 Existen diferentes tipos de suplementos que pueden utilizarse dependiendo del tipo de producción ganadera y los objetivos nutricionales que se busquen para los animales. La elección adecuada del suplemento es crucial, ya que influye directamente en la salud y productividad del ganado. A continuación, se describen los principales tipos de suplementos utilizados en la alimentación animal:
      .col-lg-2
        figure
          img(src='@/assets/curso/tema2/img3.svg', alt='', style='width: 200px').m-auto
    Separador
    #t_2_1
    .titulo-segundo.color-acento-contenido
      h2 2.1 Suplementos fibrosos
    .row.bg-c23
      .col-12
        .px-5
          p(data-aos="fade-right") Este grupo incluye forrajes como pastos, leguminosas y árboles, que pueden ser utilizados enteros o en cortes. Para facilitar su suministro, se recomienda cortar árboles, arbustos y leguminosas, especialmente en épocas de escasez de forrajes debido a la sequía. Estos suplementos ayudan a compensar la falta de fibra en la dieta del animal.
          p.mb-5(data-aos="fade-right") Los principales suplementos fibrosos:
          .row.justify-content-center.mb-4(data-aos="fade-up")
            .col-10.col-md-6.col-lg-3.mb-4.mb-lg-0
              .p-4.bg-c3
                figure.mb-3
                  img(src='@/assets/curso/tema2/img4.svg', alt='', style='width: 120px').m-auto
                p.text-center.mb-0 Pastos de corte.
            .col-10.col-md-6.col-lg-3.mb-4.mb-lg-0
              .p-4.bg-c3
                figure.mb-3
                  img(src='@/assets/curso/tema2/img5.svg', alt='', style='width: 120px').m-auto
                p.text-center.mb-0 Leguminosas arbustivas.
            .col-10.col-md-6.col-lg-3.mb-4.mb-lg-0
              .p-4.bg-c3
                figure.mb-3
                  img(src='@/assets/curso/tema2/img6.svg', alt='', style='width: 120px').m-auto
                p.text-center.mb-0 Residuos de cosecha (tamos, pajas, socas).
            .col-10.col-md-6.col-lg-3.mb-4.mb-lg-0
              .p-4.bg-c3
                figure.mb-3
                  img(src='@/assets/curso/tema2/img7.svg', alt='', style='width: 120px').m-auto
                p.text-center.mb-0 Ensilajes y henos.
          .row.justify-content-center(data-aos="fade-left")
            .col-10.col-lg-5.mb-4.mb-lg-0
              .bg-c5
                figure
                  img(src='@/assets/curso/tema2/img3.png', alt='', style='width: 550px')
                .row
                  .col-12
                    .p-4
                      .row.mb-3
                        .col-auto
                          .py-2.px-3.bg-c9
                            p.text-white.mb-0 #[b Pastos de corte]
                      p.mb-0 Especies como King grass, elefante, maralfalfa e imperial son muy utilizadas para la suplementación en sistemas de pastoreo, ya sea frescos o como pastos de reserva. Estos pastos, ricos en biomasa y proteína, son comunes en la alimentación estabulada de bovinos.
            .col-10.col-lg-5
              .bg-c5
                figure
                  img(src='@/assets/curso/tema2/img4.png', alt='', style='width: 550px')
                .row
                  .col-12
                    .p-4
                      .row.mb-3
                        .col-auto
                          .py-2.px-3.bg-c9
                            p.text-white.mb-0 #[b Residuos agrícolas fibrosos]
                      p.mb-0 Aunque suelen ser bajos en valor nutritivo, en especial en proteínas y energía, los residuos de cosecha son útiles como suplementos fibrosos durante la escasez para mantener la alimentación del ganado.
    Separador
    #t_2_2
    .titulo-segundo.color-acento-contenido
      h2 2.2 Suplementos proteicos
    .row.align-items-center
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p Los suplementos proteicos se utilizan para cubrir las deficiencias de proteínas en la dieta, esenciales para el desarrollo y mantenimiento del ganado. Estos suplementos pueden ser de origen vegetal o animal.
        p Las generalidades de los suplementos proteicos son:
        .row
          .col-12
            .p-4.bg-c15
              p Las fuentes vegetales incluyen la torta de algodón, cascarilla de soya y residuos de leguminosas.
              .hr1
              p Los suplementos proteicos más comunes son los concentrados con un 16 % de proteína, derivados principalmente de especies vegetales que mejoran la digestión.
              .hr1
              p Leguminosas aportan alrededor del 20 % de proteína.
              .hr1
              p Para un buen funcionamiento del rumen, se requiere un 7 % de proteínas, indispensables para las bacterias ruminales.
              .hr1
              p.mb-0 El nitrógeno no proteico en el rumen ayuda a incrementar la cantidad de bacterias ruminales, mejorando el aprovechamiento de la materia seca consumida.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img5.png', alt='', style='width: 400px').m-auto
    Separador
    #t_2_3
    .titulo-segundo.color-acento-contenido
      h2 2.3 Suplementos energéticos
    p.mb-5(data-aos="fade-right") Estos suplementos aportan energía al ganado, proveniente principalmente de fuentes de grasas, lípidos y carbohidratos.
    .row.justify-content-center
      .col-10.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        .bg-c5
          figure
            img(src='@/assets/curso/tema2/img6.png', alt='', style='width: 550px')
          .row
            .col-12
              .p-4
                .row.mb-3
                  .col-auto
                    .py-2.px-3.bg-c9
                      p.text-white.mb-0 #[b Fuentes de carbohidratos]
                ul.lista-ul.mb-0
                  li.d-flex
                    i.fas.fa-hat-cowboy(style="color: #FF7C32")
                    |
                    p.mb-0 Melaza.
                  li.d-flex
                    i.fas.fa-hat-cowboy(style="color: #FF7C32")
                    |
                    p.mb-0 Raíces o tubérculos, como la yuca.
                  li.d-flex.mb-0
                    i.fas.fa-hat-cowboy(style="color: #FF7C32")
                    |
                    p.mb-0 Cereales como sorgo, arroz, maíz, y salvados de trigo y maíz.
      .col-10.col-lg-5.mb-4.mb-lg-0(data-aos="fade-left")
        .bg-c5
          figure
            img(src='@/assets/curso/tema2/img7.png', alt='', style='width: 550px')
          .row
            .col-12
              .p-4
                .row.mb-3
                  .col-auto
                    .py-2.px-3.bg-c9
                      p.text-white.mb-0 #[b Fuentes de lípidos]
                ul.lista-ul.mb-0
                  li.d-flex
                    i.fas.fa-hat-cowboy(style="color: #FF7C32")
                    |
                    p.mb-0 Grasas vegetales y animales.
                  li.d-flex.mb-0
                    i.fas.fa-hat-cowboy(style="color: #FF7C32")
                    |
                    p.mb-0 Semilla de algodón.
    Separador
    #t_2_4
    .titulo-segundo.color-acento-contenido
      h2 2.4 Suplementos vitamínicos
    .row.align-items-center
      .col-lg-10(data-aos="fade-right")
        p.mb-0 Las vitaminas, aunque no aportan calorías, son esenciales para regular las funciones fisiológicas del organismo animal. Dado que el organismo del ganado no las produce naturalmente, es vital incluirlas en la suplementación para garantizar su bienestar.
      .col-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img8.svg', alt='', style='width: 150px').m-auto

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
