export default {
  global: {
    componenteFormativo:
      'Técnicas de conservación de forrajes y suplementación animal',
    descripcionCurso:
      'El componente formativo trata sobre técnicas de conservación de forrajes, como el ensilaje y la henificación, y la suplementación animal mediante bloques nutricionales. Explica los procesos, ventajas, desventajas y requerimientos de cada técnica, así como los ingredientes y métodos para elaborar suplementos nutricionales que mejoren la dieta de los animales, especialmente en épocas de escasez.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Conservación de forrajes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Técnicas de conservación de forrajes',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Heno',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Suplementación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Suplementos fibrosos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Suplementos proteicos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Suplementos energéticos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Suplementos vitamínicos',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Alternativas de suplementación animal',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/72310027_CF03_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Conservación de forrajes',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023). Conservación de forrajes. [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=I2G6MjqXGRQ&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA',
    },
    {
      tema: 'Técnicas de conservación de forrajes',
      referencia:
        'TvAgro. (2023). Manejo y conservación de forrajes - TvAgro por Juan Gonzalo Angel Restrepo. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=j63R2D66K_Y&ab_channel=TvAgro',
    },
    {
      tema: 'Heno',
      referencia:
        'TvAgro. (2023). Produccion de Heno Excelente Alternativa Nutricional - TvAgro por Juan Gonzalo Angel Restrepo. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=RW8_EtBmZ9s',
    },
    {
      tema: 'Suplementación',
      referencia:
        'La Finca de Hoy. (2019). Suplemento económico para bovinos - La Finca de Hoy. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=velwo7bMV5Q',
    },
    {
      tema: 'Suplementos fibrosos',
      referencia:
        'La Finca de Hoy. (2019). Ensilajes vs suplementos proteicos. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=_Y6t76pBx3w',
    },
    {
      tema: 'Alternativas de suplementación animal',
      referencia:
        'La Finca de Hoy. (2017). Alternativas en la suplementación de bovinos | La Finca de Hoy [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=w0Hz0T4twNQ',
    },
  ],
  glosario: [
    {
      termino: 'Compactación',
      significado:
        'proceso de comprimir el forraje para eliminar el aire y evitar la proliferación de bacterias indeseables durante el ensilaje.',
    },
    {
      termino: 'Digestibilidad in vitro de la MS',
      significado:
        'proporción del forraje que es digerible por el animal, evaluada en condiciones de laboratorio.',
    },
    {
      termino: 'Ensilaje',
      significado:
        'técnica de conservación de forrajes mediante fermentación anaeróbica para mantener su valor nutritivo.',
    },
    {
      termino: 'Fase aeróbica',
      significado:
        'primera fase del ensilaje donde el forraje continúa respirando y el oxígeno afecta la calidad del material.',
    },
    {
      termino: 'Fase anaeróbica',
      significado:
        'segunda fase del ensilaje donde ocurre la fermentación en ausencia de oxígeno, esencial para la conservación del forraje.',
    },
    {
      termino: 'Fibra detergente neutra (FDN)',
      significado:
        'medida de las paredes celulares del forraje, que afecta la digestibilidad y la cantidad de energía disponible.',
    },
    {
      termino: 'Forraje',
      significado:
        'plantas o vegetación utilizadas como alimento para el ganado.',
    },
    {
      termino: 'Heno',
      significado:
        'forraje seco utilizado como alimento para el ganado, obtenido al reducir su contenido de agua entre un 15 % y 25 %.',
    },
    {
      termino: 'Materia seca (MS)',
      significado:
        'cantidad de forraje que queda una vez eliminado el agua, utilizado para medir el contenido de nutrientes.',
    },
    {
      termino: 'Proteína cruda (PC)',
      significado:
        'contenido total de proteína en el forraje, esencial para la alimentación animal.',
    },
  ],
  referencias: [
    {
      referencia:
        'FAO. (2014). Capítulo VI cultivos para heno - leguminosas forrajeras y legumbres. ',
      link: 'http://www.fao.org/docrep/007/x7660s/x7660s0a.htm',
    },
    {
      referencia: 'Fondo Ganadero de Honduras (s.f.). Manejo de praderas.',
      link: '',
    },
    {
      referencia:
        'Pozzolo, O. (2007). Cosecha de Forrajes. Argentina: Universidad Nacional de Entre Ríos.',
      link: '',
    },
    {
      referencia:
        'Rúa, M. (2010). Cómo aforar un potrero para pastorear correctamente. Argentina: Cultura empresarial ganadera.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ángela Viviana Páez Perilla',
          cargo: 'Experta temática',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor multimedia',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Germán Acosta Ramos',
          cargo: 'Locución',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        //{
        //  nombre: 'Luis Gabriel Urueta Alvarez',
        //  cargo: 'Validador y vinculador de recursos educativos digitales',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
