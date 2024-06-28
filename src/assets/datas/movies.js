const movies = [
  {
    id: "1",
    title: "Oceans 8",
    category: "Comedy",
    likes: 4,
    dislikes: 1,
    poster:
      "https://filmspell.com/wp-content/uploads/2018/07/Oceans-8-movie-poster-990x556.jpg",
  },
  {
    id: "2",
    title: "Midnight Sun",
    category: "Comedy",
    likes: 2,
    dislikes: 0,
    poster:
      "https://www.newsfolo.com/wp-content/uploads/2018/04/midnight-sun-810x456.jpg",
  },
  {
    id: "3",
    title: "Les indestructibles 2",
    category: "Animation",
    likes: 3,
    dislikes: 1,
    poster:
      "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DA0F68B4F3473F114573FF8781BD8380A46D0FCA28BE45545DEF2872003D107B/scale?width=1200&aspectRatio=1.78&format=jpeg",
  },
  {
    id: "4",
    title: "Sans un bruit",
    category: "Thriller",
    likes: 6,
    dislikes: 6,
    poster:
      "https://freakingeek.com/wp-content/uploads/2018/06/SansUnBruit-Banniere02-800x445.jpg",
  },
  {
    id: "5",
    title: "Creed II",
    category: "Drame",
    likes: 16,
    dislikes: 2,
    poster: "https://wallpapercave.com/wp/wp3711585.jpg",
  },
  {
    id: "6",
    title: "Pulp Fiction",
    category: "Thriller",
    likes: 11,
    dislikes: 3,
    poster:
      "https://www.teahub.io/photos/full/27-278528_pulp-fiction-wallpaper-poster.jpg",
  },
  {
    id: "7",
    title: "Pulp Fiction",
    category: "Thriller",
    likes: 12333,
    dislikes: 32,
    poster:
      "https://www.teahub.io/photos/full/27-278528_pulp-fiction-wallpaper-poster.jpg",
  },
  {
    id: "8",
    title: "Seven",
    category: "Thriller",
    likes: 2,
    dislikes: 1,
    poster: "https://wallpaperaccess.com/full/3693029.jpg",
  },
  {
    id: "9",
    title: "Inception",
    category: "Thriller",
    likes: 2,
    dislikes: 1,
    poster:
      "https://is5-ssl.mzstatic.com/image/thumb/Video114/v4/e7/82/10/e78210ee-606a-14f2-8a04-d568c4e6368e/pr_source.lsr/2000x1125.jpg",
  },
  {
    id: "10",
    title: "Gone Girl",
    category: "Thriller",
    likes: 22,
    dislikes: 12,
    poster: "https://images2.alphacoders.com/111/thumb-1920-1115019.jpg",
  },
];

export const movies$ = new Promise((resolve, reject) =>
  setTimeout(resolve, 100, movies)
);
