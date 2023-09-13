export default () => {
  const config = useRuntimeConfig();
  const wpUri = config.public.wpUri;

  //get

  const get = async (endpoint: string) => {
    return useFetch(`${wpUri}/wp-json/wp/v2/${endpoint}`);
  };

  // GET All Post

  const getPosts = async (
    category?: number,
    page: number = 1,
    perPgae: number = 20,
    // fields: string = "author,id,excerpt,title,link,slug,date",
  ) => {
    let query: string = `posts?_embedded&per_page=${perPgae}&page=${page}`;
    if (category) {
      query += `&categories=${category}`;
    }
    return get(query);
  };

  // Get a Singel Post

  const getPost = async (slug: string) => get(`posts?slug=${slug}&_embed`);

  // Get All Categories

  const getCategories = async () => get("categories");

  // Get a SIngle Categories
  const getCategory = async (slug: string) => get(`categories?slug=${slug}`);

  return {
    get,
    getPosts,
    getPost,
    getCategories,
    getCategory,
  };
};
