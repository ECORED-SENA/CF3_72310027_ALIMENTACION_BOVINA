<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Alternativas de suplementación animal
    .row.align-items-center.mb-5
      .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
        p Un bloque nutricional es un suplemento comprimido que proporciona al animal una fuente de nitrógeno y otros nutrientes clave. Ha sido ampliamente empleado como una fuente eficaz de proteínas y energía, especialmente en épocas de escasez de forraje. Los bloques se componen de una mezcla de ingredientes como urea, melaza, minerales, sal, harina y un agente solidificante. Son particularmente útiles durante las temporadas secas, cuando los recursos alimenticios naturales son limitados, ayudando a mantener la nutrición del ganado.
        figure
          img(src='@/assets/curso/tema3/img1.svg', alt='', style='width: 300px')
      .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img1.png', alt='', style='width: 470px').m-auto
    .row.mb-4
      .col-auto.bg-c6(data-aos="fade-left")
        .row.align-items-end
          .col-auto.pe-0
            figure
              img(src='@/assets/curso/tema1/img12.svg', alt='', style='width: 50px')
          .col
            h3.mb-1 Beneficios de la suplementación con bloques nutricionales
    .row.bg-c25.mb-4
      .col-12
        .px-5
          .row.align-items-center.mb-5
            .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
              .row.mb-3
                .col-12
                  .p-4.bg-c24
                    p.mb-0 Diversos estudios han demostrado que el uso de bloques nutricionales mejora la producción láctea en vacas lecheras y contribuye al aumento del peso vivo en los animales, con una ganancia promedio de 420 gramos por día. Además, cuando se complementa la dieta con residuos de cosecha y estos bloques, la producción de leche puede aumentar a entre 4 y 5 litros por día por cabeza de ganado. En bovinos de alta producción, los bloques también pueden aportar proteínas no degradables, como las de la semilla de algodón y la harina de pescado, lo que optimiza el rendimiento y la eficiencia del animal.
              p.mb-0 Las materias primas para la elaboración de un bloque nutricional son:
            .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema3/img2.png', alt='', style='width: 470px').m-auto
          SlyderF(columnas="col-md-6 col-xl-4")(data-aos="fade-up")
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/tema3/img4.png' alt='AvatarTop')
              p.text-center.mb-0 #[b Melaza]
              p.text-center.mb-0 Contiene diferentes porcentajes de melaza, entre el 30 % y el 60 %. No debe diluirse en agua.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/tema3/img5.png' alt='AvatarTop')
              p.text-center.mb-0 #[b Urea]
              p.text-center.mb-0 Debe incorporarse en niveles de entre 5 % y 20 %. Aumentar la urea disminuye el tiempo de solidificación.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/tema3/img6.png' alt='AvatarTop')
              p.text-center.mb-0 #[b Mezcla mineral]
              p.text-center.mb-0 Se añade para suplir deficiencias de minerales. El calcio se aporta a través de la melaza y el agente ligante.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/tema3/img7.png' alt='AvatarTop')
              p.text-center.mb-0 #[b Sal común]
              p.text-center.mb-0 Se adiciona en un 2 % a 5 %. Puede ser sal mineralizada para mejorar la calidad del bloque.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/tema3/img8.png' alt='AvatarTop')
              p.text-center.mb-0 #[b Material fibroso]
              p.text-center.mb-0 Facilita el proceso de solidificación. Fuentes de fibra incluyen forraje de buena calidad.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/tema3/img9.png' alt='AvatarTop')
              p.text-center.mb-0 #[b Agente ligante]
              p.text-center.mb-0 Endurece el bloque. Se puede utilizar cal viva, óxido de magnesio, bentonita o cal dolomita.
    .row.mb-4(data-aos="fade-right")
      .col-auto.bg-c8
        .px-3.py-2
          h3.mb-0 Elaboración del bloque nutricional
    p.mb-5(data-aos="fade-right") La elaboración de un bloque nutricional se puede realizar de forma semi-industrial o artesanal. La diferencia entre ambas técnicas radica en los ingredientes y los equipos utilizados.
    .row.mb-5
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img2.svg', alt='', style='width: 470px').m-auto
      .col-lg-7(data-aos="fade-left")
        .row
          .col-12
            .p-4.bg-c26
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-hat-cowboy(style="color: #FF7C32")
                  |
                  p.mb-0 Pesar los ingredientes: melaza, urea, sales minerales, cal y fuente de fibra.
                li.d-flex
                  i.fas.fa-hat-cowboy(style="color: #FF7C32")
                  |
                  p.mb-0 Incorporar en un recipiente (canoa o caneca) uno a uno los ingredientes en el orden que los pesó.
                li.d-flex
                  i.fas.fa-hat-cowboy(style="color: #FF7C32")
                  |
                  p.mb-0 Cada vez que agregue un ingrediente, mézclelo bien.
                li.d-flex
                  i.fas.fa-hat-cowboy(style="color: #FF7C32")
                  |
                  p.mb-0 Coger una muestra de la mezcla y realizarle la prueba de puño. Cuando lo haga, no debe salir líquido entre los dedos y debe quedar una masa.
                li.d-flex
                  i.fas.fa-hat-cowboy(style="color: #FF7C32")
                  |
                  p.mb-0 Una vez que la mezcla sea homogénea, coloque la masa dentro de un balde, un recipiente de plástico o en cubos.
                li.d-flex
                  i.fas.fa-hat-cowboy(style="color: #FF7C32")
                  |
                  p.mb-0 Compactar por medio de prensado con un objeto de metal o de madera.
                li.d-flex.mb-0
                  i.fas.fa-hat-cowboy(style="color: #FF7C32")
                  |
                  p.mb-0 Secar por 10 días.
    .row.mb-4
      .col-auto.bg-c6(data-aos="fade-left")
        .row.align-items-end
          .col-auto.pe-0
            figure
              img(src='@/assets/curso/tema1/img12.svg', alt='', style='width: 50px')
          .col
            h3.mb-1 Bloques multinutricionales
    .row.mb-5
      .col-12.bg-c3(data-aos="fade-right")
        .row
          .col
            .p-4
              p.mb-0 Un bloque multinutricional es un suplemento destinado a los bovinos que aporta nitrógeno, energía y minerales esenciales. Estos bloques se presentan como una masa sólida que el rumiante lame, lo que permite la ingesta gradual de nutrientes en pequeñas cantidades, convirtiéndose en una forma segura de suministrar urea al ganado. Su formato sólido facilita la manipulación, transporte y almacenamiento. El objetivo principal de los bloques es proporcionar los nutrientes necesarios para los microorganismos del rumen, mejorando la digestión fermentativa y aumentando la producción de proteína, lo que se traduce en una mejor digestibilidad y mayor ganancia de peso en los animales.
          .col-lg-auto.pe-0.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema3/img10.png', alt='', style='width: 350px')
    p.mb-5(data-aos="fade-right") ¿Qué otros tipos de bloques existen?
    .row.justify-content-center.mb-5
      .col-10.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        .bg-c5
          figure
            img(src='@/assets/curso/tema3/img12.png', alt='', style='width: 550px')
          .row
            .col-12
              .p-4
                .row.mb-3
                  .col-auto
                    .py-2.px-3.bg-c9
                      p.text-white.mb-0 #[b Bloques minerales]
                p.mb-0 Están compuestos por minerales con macro y microelementos, melaza y un elemento cementante que evita un consumo excesivamente rápido por parte del animal.
      .col-10.col-lg-5.mb-4.mb-lg-0(data-aos="fade-left")
        .bg-c5
          figure
            img(src='@/assets/curso/tema3/img11.png', alt='', style='width: 550px')
          .row
            .col-12
              .p-4
                .row.mb-3
                  .col-auto
                    .py-2.px-3.bg-c9
                      p.text-white.mb-0 #[b Bloques terapéuticos]
                p.mb-0  Similares a los bloques multinutricionales, pero contienen productos medicinales, como desparasitantes y estimulantes del crecimiento. No se suministran durante todo el año, sino en momentos específicos cuando es necesario desparasitar o tratar a los animales.
    p.mb-5(data-aos="fade-right") Ventajas del uso de los bloques multinutricionales:
    .row.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img13.png', alt='', style='width: 400px').m-auto
      .col-lg-8(data-aos="fade-left")
        .row.justify-content-center
          .col-md-6.col-lg-3.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema3/img4.svg' alt='AvatarTop')
              .tarjeta.color-primario
                .p-4
                  p.text-center Son una fuente económica de energía, proteína y minerales.
          .col-md-6.col-lg-3.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema3/img5.svg' alt='AvatarTop')
              .tarjeta.color-primario
                .p-4
                  p.text-center Contribuyen a la activación ruminal, mejorando la utilización de pastos y aumentando el consumo de estos.
          .col-md-6.col-lg-3.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema3/img6.svg' alt='AvatarTop')
              .tarjeta.color-primario
                .p-4
                  p.text-center Favorecen la fertilidad, ganancia de peso y producción de leche.
          .col-md-6.col-lg-3.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema3/img7.svg' alt='AvatarTop')
              .tarjeta.color-primario
                .p-4
                  p.text-center Son fáciles de elaborar y no requieren de infraestructura costosa.
          .col-md-6.col-lg-3.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema3/img8.svg' alt='AvatarTop')
              .tarjeta.color-primario
                .p-4
                  p.text-center Permiten el uso de minerales producidos en la propia finca.
          .col-md-6.col-lg-3.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema3/img9.svg' alt='AvatarTop')
              .tarjeta.color-primario
                .p-4
                  p.text-center Su transporte es más sencillo que el de productos como la urea líquida o la melaza.
          .col-md-6.col-lg-3.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema3/img10.svg' alt='AvatarTop')
              .tarjeta.color-primario
                .p-4
                  p.text-center Facilitan un uso más uniforme de los potreros cuando se suministran en campo abierto.
    p.mb-5 Los ingredientes son:
    .row.mb-5
      .col-lg-9(data-aos="fade-right")
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Fuente de energía")
            .col-lg-8.mb-4.mb-lg-0
              p.mb-0 Melaza: fuente rica en carbohidratos y minerales como el potasio. Se puede usar de 25 % a 60 %, pero es recomendable utilizarla pura para mejor consistencia. Harinas: yuca, sorgo y maíz molido, ricos en carbohidratos.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema3/img15.png', alt='', style='width: 300px').m-auto
          .row(numero="2" titulo="Fuente de nitrógeno")
            .col-lg-8.mb-4.mb-lg-0
              p.mb-0 Urea: proporciona amonio al animal, facilitando la digestibilidad de los forrajes. Se debe usar en un 10 %.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema3/img16.png', alt='', style='width: 300px').m-auto
          .row(numero="3" titulo="Fuente de proteína")
            .col-lg-8.mb-4.mb-lg-0
              p.mb-0 Harina, tortas de oleaginosas o semillas enteras: tortas de maní, ajonjolí y algodón. También se pueden usar semillas enteras.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema3/img17.png', alt='', style='width: 300px').m-auto
          .row(numero="4" titulo="Fibra de soporte")
            .col-lg-8.mb-4.mb-lg-0
              p.mb-0 Cascarillas de arroz, algodón, soya, heno de pasto cortado, tusa de maíz, bagazo de caña: proporcionan soporte y rigidez al bloque.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema3/img18.png', alt='', style='width: 300px').m-auto
          .row(numero="5" titulo="Sales minerales")
            .col-lg-8.mb-4.mb-lg-0
              p.mb-0 Sal mineral: representa el 5 % del bloque y proporciona sabor, macro y microelementos.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema3/img19.png', alt='', style='width: 300px').m-auto
          .row(numero="6" titulo="Material cementante")
            .col-lg-8.mb-4.mb-lg-0
              p.mb-0 Tierra arcillosa, calcio, cal viva, yeso y cemento: proporcionan firmeza y aportan calcio al bloque.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema3/img20.png', alt='', style='width: 300px').m-auto
      .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img14.png', alt='', style='width: 300px')
    p.mb-5(data-aos="fade-right") Los materiales utilizados en la elaboración de bloques son:
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-8.col-md-6.col-lg-3.mb-4.mb-lg-0
        .p-4.bg-c5
          figure.mb-3
            img(src='@/assets/curso/tema3/img11.svg', alt='', style='width: 130px').m-auto
          p.text-center.mb-0 Lámina de nylon grueso y grande.
      .col-8.col-md-6.col-lg-3.mb-4.mb-lg-0
        .p-4.bg-c5
          figure.mb-3
            img(src='@/assets/curso/tema3/img12.svg', alt='', style='width: 130px').m-auto
          p.text-center.mb-0 Balanza
      .col-8.col-md-6.col-lg-3.mb-4.mb-md-0
        .p-4.bg-c5
          figure.mb-3
            img(src='@/assets/curso/tema3/img13.svg', alt='', style='width: 130px').m-auto
          p.text-center.mb-0 Baldes
      .col-8.col-md-6.col-lg-3
        .p-4.bg-c5
          figure.mb-3
            img(src='@/assets/curso/tema3/img14.svg', alt='', style='width: 130px').m-auto
          p.text-center.mb-0 Un pilón
    p.mb-5(data-aos="fade-right") El proceso de elaboración de un bloque multinutricional es:
    .row.justify-content-center
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img21.png', alt='', style='width: 400px').m-auto
      .col-lg-6(data-aos="fade-left")
        .row
          .col-12.bg-c18
            .p-1
              .row.align-items-center
                .col-auto.pe-0
                  figure
                    img(src='@/assets/curso/tema3/img15.svg', alt='', style='width: 90px')
                .col
                  p.mb-0 Tamizado de ingredientes.
          .col-12.bg-c19
            .p-1
              .row.align-items-center
                .col-auto.pe-0
                  figure
                    img(src='@/assets/curso/tema3/img16.svg', alt='', style='width: 90px')
                .col
                  p.mb-0 Pesaje de ingredientes.
          .col-12.bg-c18
            .p-1
              .row.align-items-center
                .col-auto.pe-0
                  figure
                    img(src='@/assets/curso/tema3/img17.svg', alt='', style='width: 90px')
                .col
                  p.mb-0 Mezcla de ingredientes sólidos.
          .col-12.bg-c19
            .p-1
              .row.align-items-center
                .col-auto.pe-0
                  figure
                    img(src='@/assets/curso/tema3/img18.svg', alt='', style='width: 90px')
                .col
                  p.mb-0 Mezcla de urea con melaza.
          .col-12.bg-c18
            .p-1
              .row.align-items-center
                .col-auto.pe-0
                  figure
                    img(src='@/assets/curso/tema3/img19.svg', alt='', style='width: 90px')
                .col
                  p.mb-0 Mezcla de urea e ingredientes sólidos.
          .col-12.bg-c19
            .p-1
              .row.align-items-center
                .col-auto.pe-0
                  figure
                    img(src='@/assets/curso/tema3/img20.svg', alt='', style='width: 90px')
                .col
                  p.mb-0 Moldeo del bloque. 

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
