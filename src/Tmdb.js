const API_KEY = "a91c85266bb9abfe3c0023fb750c21ac";
const API_BASE = "https://api.themoviedb.org/3/";

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Netflix originals",
        items: [],
      },
      {
        slug: "trending",
        title: "Recomendeds for your",
        items: [],
      },
      {
        slug: "action",
        title: "Action",
        items: [],
      },
      {
        slug: "comedy",
        title: "Comedy",
        items: [],
      },
      {
        slug: "horror",
        title: "Horror",
        items: [],
      },
      {
        slug: "romance",
        title: "Romance",
        items: [],
      },
      {
        slug: "documentary",
        title: "Documentary",
        items: [],
      },
    ];
  },
};
