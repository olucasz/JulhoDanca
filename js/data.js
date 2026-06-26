const songs = [
  {
    id: "algoNovo",
    title: "Algo Novo Vindo",
    artist: "Get Worship",
    duration: "06:30",
    audio: "assets/audio/algoNovo.wav",
    cover: "assets/images/covers/algoNovo.jpeg",
  },
  {
    id: "SorriaMusic",
    title: "Sorria / Meu Alvo",
    artist: "Comunidade das Nações",
    duration: "05:12",
    audio: "assets/audio/sorria.wav",
    cover: "assets/images/covers/sorria.jpg",
  },
  {
    id: "nossoGeneral",
    title: "Nosso General",
    artist: "Mateus Brito",
    duration: "04:12",
    audio: "assets/audio/NossoGeneral.mp3",
    cover: "assets/images/covers/nossoGeneral.jpg",
  },
  {
    id: "eleFaz",
    title: "Ele Faz",
    artist: "Robert Lucas",
    duration: "03:41",
    audio: "assets/audio/EleFaz.mp3",
    cover: "assets/images/covers/eleFaz.jpg",
  },
  {
    id: "aquiVou",
    title: "Aqui Vou Eu",
    artist: "NOVA",
    duration: "04:20",
    audio: "assets/audio/AquiVou.mp3",
    cover: "assets/images/covers/aquiVou.jpg",
  },
  {
    id: "naoPare",
    title: "Não Pare de Crer",
    artist: "Preto no Branco",
    duration: "03:40",
    audio: "assets/audio/naoPare.mp3",
    cover: "assets/images/covers/naoPare.jpeg",
  },
  {
    id: "estacoes",
    title: "Estações",
    artist: "Dunamis Music",
    duration: "07:43",
    audio: "assets/audio/Estacoes.mp3",
    cover: "assets/images/covers/estacoes.jpg",
  },
  {
    id: "fenomenal",
    title: "Phenomena DA DA",
    artist: "RCS Young",
    duration: "02:45",
    audio: "assets/audio/Fenomenal.mp3",
    cover: "assets/images/covers/fenomenal.jpeg",
  },
];

const videoLessons = [
  //algo novo
  {
    songId: "AlgoNovo",
    songTitle: "Algo Novo Vindo",
    lessons: [
      {
        id: "algo-novo-completo",
        title: "Coreografia Completa",
        duration: "4:33",
        thumbnail: "assets/images/thumb/completo.png",
        videoUrl:
          "https://player.vimeo.com/video/1204724349?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
        // externalUrl: "https://vimeo.com/1204574370",
      },
      {
        id: "algo-novo-refrao",
        title: "Passo a Passo - Refrão",
        duration: "2:19",
        thumbnail: "assets/images/thumb/refrao.png",
        videoUrl: "https://www.youtube.com/embed/EZZr-TuPAi8",
        externalUrl: "https://www.youtube.com/watch?v=EZZr-TuPAi8",
      },
      {
        id: "algo-novo-ponte",
        title: "Passo a Passo - Ponte",
        duration: "1:19",
        thumbnail: "assets/images/thumb/ponte.png",
        videoUrl: "https://www.youtube.com/embed/PRNW9I3wBBQ",
        externalUrl: "https://www.youtube.com/watch?v=PRNW9I3wBBQ",
      },
    ],
  },

  //sorria
  {
    songId: "Sorria",
    songTitle: "Sorria / Meu Alvo",
    lessons: [
      {
        id: "sorria-completo",
        title: "Coreografia Completa",
        duration: "3:35",
        thumbnail: "assets/images/thumb/completo.png",
        videoUrl: "https://www.youtube.com/embed/SRYyGJqIBOE",
      },
      {
        id: "sorria-parte-1",
        title: "Passo a Passo — Início",
        duration: "3:16",
        thumbnail: "assets/images/thumb/inicio.png",
        videoUrl:
          "https://www.youtube.com/embed/vkc-Spff7Jc?list=PLRL9IDIQbmu8",
      },
      {
        id: "sorria-refrao",
        title: "Passo a Passo — Refrão",
        duration: "2:23",
        thumbnail: "assets/images/thumb/refrao.png",
        videoUrl:
          "https://www.youtube.com/embed/HMKpgeYQdnw?list=PLRL9IDIQbmu8",
      },
      {
        id: "sorria-parte-final",
        title: "Passo a Passo — Final",
        duration: "1:55",
        thumbnail: "assets/images/thumb/final.png",
        videoUrl:
          "https://www.youtube.com/embed/GHMdcBhByyM?list=PLRL9IDIQbmu8",
      },
    ],
  },
  //Nosso General
  {
    songId: "NossoGeneral",
    songTitle: "Nosso General",
    lessons: [
      {
        id: "nosso-general-completo",
        title: "Coreografia Completa",
        duration: "1:47",
        thumbnail: "assets/images/thumb/completo.png",
        videoUrl: "https://www.youtube.com/embed/akGkCMdt1I4",
      },
      {
        id: "nosso-general-passo",
        title: "Passo a Passo",
        duration: "2:35",
        thumbnail: "assets/images/thumb/refrao.png",
        videoUrl:
          "https://www.youtube.com/embed/rh5Z7X5prjY?list=PLd7WubqrXuxg",
      },
    ],
  },

  //ele faz
  {
    songId: "eleFaz",
    songTitle: "Ele Faz",
    lessons: [
      {
        id: "ele-faz-completo",
        title: "Coreografia Completa",
        duration: "1:47",
        thumbnail: "assets/images/thumb/completo.png",
        videoUrl: "https://www.youtube.com/embed/59qYvlqdJCo",
      },
      {
        id: "eleFaz-passo-inicio",
        title: "Passo a Passo - Início",
        duration: "2:51",
        thumbnail: "assets/images/thumb/inicio.png",
        videoUrl: "https://www.youtube.com/embed/ByUWagAA6vo",
      },
      {
        id: "eleFaz-passo-refrao",
        title: "Passo a Passo - Refrão",
        duration: "2:51",
        thumbnail: "assets/images/thumb/refrao.png",
        videoUrl: "https://www.youtube.com/embed/Jv8cvsWhZjo",
      },
      {
        id: "ele-faz-final",
        title: "Passo a Passo - Final",
        duration: "1:47",
        thumbnail: "assets/images/thumb/final.png",
        videoUrl: "https://www.youtube.com/embed/wm8zw0Blu0k",
      },
    ],
  },

  //Aqui Vou Eu
  {
    songId: "aquiVou",
    songTitle: "Aqui Vou Eu",
    lessons: [
      {
        id: "aqui-vou-completo",
        title: "Coreografia Completa",
        duration: "1:47",
        thumbnail: "assets/images/thumb/completo.png",
        videoUrl: "https://www.youtube.com/embed/dsaWYmPVfgM",
      },
      {
        id: "aquiVou-passo-inicio",
        title: "Passo a Passo - Início",
        duration: "1:15",
        thumbnail: "assets/images/thumb/inicio.png",
        videoUrl: "https://www.youtube.com/embed/sWJPFJpl_m8",
      },
      {
        id: "aquiVou-passo-refrao",
        title: "Passo a Passo - Refrão",
        duration: "3:50",
        thumbnail: "assets/images/thumb/refrao.png",
        videoUrl: "https://www.youtube.com/embed/8JyPjsNrCaE",
      },
      {
        id: "aquiVou-passo-ponte",
        title: "Passo a Passo - Ponte",
        duration: "0:40",
        thumbnail: "assets/images/thumb/ponte.png",
        videoUrl: "https://www.youtube.com/embed/YTW0fV3GbVM",
      },
      {
        id: "aquiVou-passo",
        title: "Passo a Passo - Final",
        duration: "3:26",
        thumbnail: "assets/images/thumb/final.png",
        videoUrl: "https://www.youtube.com/embed/aw4-yfGt3bg",
      },
    ],
  },

  //nao pare
  {
    songId: "Naopare",
    songTitle: "Não Pare de Crer",
    lessons: [
      {
        id: "nao-pare-completo",
        title: "Coreografia Completa",
        duration: "1:47",
        thumbnail: "assets/images/thumb/completo.png",
        videoUrl:
          "https://player.vimeo.com/video/1204575723?badge=0&autopause=0&player_id=0&app_id=58479",
      },
      {
        id: "nao-pare-passo",
        title: "Passo a Passo",
        duration: "2:51",
        thumbnail: "assets/images/thumb/refrao.png",
        videoUrl: "https://www.youtube.com/embed/ByUWagAA6vo",
      },
    ],
  },

  //estacoes
  {
    songId: "estacoes",
    songTitle: "Estações",
    lessons: [
      {
        id: "estacoes-completo",
        title: "Coreografia Completa",
        duration: "4:33",
        thumbnail: "assets/images/thumb/completo.png",
        videoUrl: "https://www.youtube.com/embed/qAT3kquVW6w",
      },
      {
        id: "estacoes-refrao",
        title: "Passo a Passo - Refrão",
        duration: "2:19",
        thumbnail: "assets/images/thumb/refrao.png",
        videoUrl: "https://www.youtube.com/embed/Rj-UGQiCmOw",
      },
      {
        id: "algo-novo-ponte",
        title: "Passo a Passo - Ponte",
        duration: "1:09",
        thumbnail: "assets/images/thumb/ponte.png",
        videoUrl: "https://www.youtube.com/embed/mP_CbeoJn-E",
      },
    ],
  },
  //Fenomenal
  {
    songId: "Phenomena",
    songTitle: "Phenomena DA DA",
    lessons: [
      {
        id: "phenomena-completo",
        title: "Coreografia Completa",
        duration: "2:32",
        thumbnail: "assets/images/thumb/completo.png",
        videoUrl: "https://www.youtube.com/embed/PePhUA5VBOU",
      },
    ],
  },
];
