export default () => {
  const config = useRuntimeConfig();
  const wpUri = config.public.wpUri;

  //get

  const get = async <T>(endpoint: string) => {
    return useFetch<T>(`${wpUri}/wp-json/wp/v2/${endpoint}`);
  };

  // GET All Post

  const getPosts = async <T>(
    category?: number,
    page: number = 1,
    perPgae: number = 20,
    // fields: string = "author,id,excerpt,title,link,slug,date",
  ) => {
    let query: string = `posts?_embed&per_page=${perPgae}&page=${page}`;
    if (category) {
      query += `&categories=${category}`;
    }
    return get<T>(query);
  };

  // Get a Singel Post

  const getPost = async <T>(slug: string) =>
    get<T>(`posts?slug=${slug}&_embed`);

  // Get All Categories

  const getCategories = async <T>() => get<T>("categories");

  // Get a SIngle Categories
  const getCategory = async <T>(slug: string) =>
    get<T>(`categories?slug=${slug}`);

  return {
    get,
    getPosts,
    getPost,
    getCategories,
    getCategory,
  };
};
