<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Nombre del componente formativo',
      titulo: 'Cuestionario',
      introduccion:
        'Identificar las técnicas de conservación, almacenamiento y uso del heno y el ensilaje, así como su impacto en la alimentación y producción ganadera.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el rango adecuado de humedad para el forraje en el proceso de ensilaje?',
          imagen: require('@/assets/curso/img1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '70 % - 75 %.', esCorrecta: true },
            { id: 'b', texto: '80 % - 85 %.', esCorrecta: false },
            { id: 'c', texto: '50 % - 60 %.', esCorrecta: false },
            { id: 'd', texto: '60 % - 65 %.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es el tiempo mínimo recomendado antes de abrir un silo?',
          imagen: require('@/assets/curso/img2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '10 días.', esCorrecta: false },
            { id: 'b', texto: '28 días.', esCorrecta: true },
            { id: 'c', texto: '15 días.', esCorrecta: false },
            { id: 'd', texto: '40 días.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué cantidad de heno debe suministrarse inicialmente a los bovinos por día?',
          imagen: require('@/assets/curso/img3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '2 kg por animal.', esCorrecta: true },
            { id: 'b', texto: '1 kg por animal.', esCorrecta: false },
            { id: 'c', texto: '3 kg por animal.', esCorrecta: false },
            { id: 'd', texto: '5 kg por animal.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué es lo que ocurre durante la fase aeróbica del ensilaje?',
          imagen: require('@/assets/curso/img4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se produce dióxido de carbono y agua.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Se incrementa la temperatura y continúa la respiración del forraje.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Las bacterias ácido-lácticas proliferan.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se estabiliza el nivel de humedad del forraje.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Cuál es una ventaja del heno?',
          imagen: require('@/assets/curso/img1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Es económico y fácil de elaborar.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Requiere de maquinaria especializada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se almacena fácilmente en sitios húmedos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Su calidad es inferior a la del forraje fresco.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es el contenido adecuado de humedad para almacenar heno?',
          imagen: require('@/assets/curso/img2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '15 %.', esCorrecta: false },
            { id: 'b', texto: '30 %.', esCorrecta: false },
            { id: 'c', texto: '20 %.', esCorrecta: true },
            { id: 'd', texto: '50 %.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué tipo de forrajes es más adecuado para el ensilaje?',
          imagen: require('@/assets/curso/img3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Forrajes con un alto contenido de fibra.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Forrajes con un bajo contenido de proteínas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Forrajes con una buena relación hoja-tallo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Forrajes secos y con poca humedad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué forraje debe estar en su etapa lechosa para ser ensilado?',
          imagen: require('@/assets/curso/img4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Maíz.', esCorrecta: true },
            { id: 'b', texto: 'Caña de azúcar.', esCorrecta: false },
            { id: 'c', texto: 'Cratylia.', esCorrecta: false },
            { id: 'd', texto: 'Panicum.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Cuál es una desventaja del heno?',
          imagen: require('@/assets/curso/img1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Es difícil elaborarlo en sitios con mucha lluvia.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Requiere un alto nivel de maquinaria.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se necesita poca ventilación para su almacenamiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No es tan digestible como otros forrajes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué se recomienda hacer después de cortar el forraje para henificar?',
          imagen: require('@/assets/curso/img2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Dejarlo al sol durante una semana.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Picar los tallos gruesos antes de deshidratarlo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cosecharlo en la tarde para un secado más rápido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar voltearlo durante el secado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
