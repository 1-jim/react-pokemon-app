import axios, { AxiosRequestConfig } from 'axios';

async function pokpiGetter(slug: string, id?: string) {
  const options: AxiosRequestConfig = {
    baseURL: "https://pokeapi.co/api/v2/",
    timeout: 10000,
    method: "get"
  };

  try {
    let query = slug;
    if (id) {
      query = query + '/' + id;
    }
    const res = await axios.get(query, options);
    if (res.status !== 200) {
      // test for status you want, etc
      console.log(res.status)
    }
    return res.data;
  }
  catch (err) {
    console.debug(err);
    return;
  }
}

export default pokpiGetter;
