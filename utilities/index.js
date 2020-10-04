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
