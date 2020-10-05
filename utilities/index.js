export const categoryMock = {
  data: [
    {
      id: 28,
      name: 'Action',
    },
    {
      id: 12,
      name: 'Adventure',
    },
    {
      id: 16,
      name: 'Animation',
    },
    {
      id: 35,
      name: 'Comedy',
    },
    {
      id: 80,
      name: 'Crime',
    },
    {
      id: 99,
      name: 'Documentary',
    },
    {
      id: 18,
      name: 'Drama',
    },
    {
      id: 10751,
      name: 'Family',
    },
    {
      id: 14,
      name: 'Fantasy',
    },
    {
      id: 36,
      name: 'History',
    },
    {
      id: 27,
      name: 'Horror',
    },
    {
      id: 10402,
      name: 'Music',
    },
    {
      id: 9648,
      name: 'Mystery',
    },
    {
      id: 10749,
      name: 'Romance',
    },
    {
      id: 878,
      name: 'Science Fiction',
    },
    {
      id: 10770,
      name: 'TV Movie',
    },
    {
      id: 53,
      name: 'Thriller',
    },
    {
      id: 10752,
      name: 'War',
    },
    {
      id: 37,
      name: 'Western',
    },
  ],
};

export const categoryColor = {
  Action: '#FF4500',
  Thriller: '#87CEEB',
  Western: '#4682B4',
  War: '#6A5ACD',
  Crime: '#FF69B4',
  Comedy: '#6A5ACD',
  Adventure: 'green',
  Animation: 'pink',
  Documentary: 'purple',
  Drama: 'gray',
  Family: 'violet',
};

export function transformCategory(data, categoryColor) {
  return data.map((item) => ({
    id: item.id,
    title: item.name,
    color: categoryColor[item.name],
    image: 'https://img.icons8.com/color/48/000000/photo-reel.png',
    favorites: 5,
  }));
}

export const movieList = {
  page: 1,
  total_results: 10000,
  total_pages: 500,
  results: [
    {
      popularity: 141.198,
      vote_count: 431,
      video: false,
      poster_path: '/AboUXTrDWEi0PuZUqaft0iwBTm7.jpg',
      id: 689249,
      adult: false,
      backdrop_path: '/yEBBtk1eyZltGgJt8Z2zi3KIvvX.jpg',
      original_language: 'es',
      original_title: 'La casa de papel: El fenómeno',
      genre_ids: [99],
      title: 'Money Heist: The Phenomenon',
      vote_average: 7.7,
      overview:
        "A documentary on why and how 'Money Heist' sparked a wave of enthusiasm around the world for a lovable group of thieves and their professor.",
      release_date: '2020-04-03',
    },
    {
      popularity: 92.854,
      vote_count: 390,
      video: false,
      poster_path: '/iVdYRFlPgn1zcR2UIpHZ5FES8FS.jpg',
      id: 656690,
      adult: false,
      backdrop_path: '/i26FIo5vJrR4u8ZZBm8o5Q4T9di.jpg',
      original_language: 'en',
      original_title: 'The Social Dilemma',
      genre_ids: [99, 18],
      title: 'The Social Dilemma',
      vote_average: 7.8,
      overview:
        'This documentary-drama hybrid explores the dangerous human impact of social networking, with tech experts sounding the alarm on their own creations.',
      release_date: '2020-01-26',
    },
    {
      popularity: 103.752,
      vote_count: 55,
      video: false,
      poster_path: '/jjs3hE3mQlVGTX3u5ZH2EJBJpf3.jpg',
      id: 743601,
      adult: false,
      backdrop_path: '/62buUp8hR037V6Y6JuRSM90zN8T.jpg',
      original_language: 'en',
      original_title: 'American Murder: The Family Next Door',
      genre_ids: [80, 99, 9648],
      title: 'American Murder: The Family Next Door',
      vote_average: 7.3,
      overview:
        'Using raw, firsthand footage, this documentary examines the disappearance of Shanann Watts and her children, and the terrible events that followed.',
      release_date: '2020-09-30',
    },
  ],
};
