import axios from "axios";
//base da api https://api.themoviedb.org/3/
// url da api:https://api.themoviedb.org/3/movie/now_playing?api_key=8a20226013191a81fea33c6295a8e646&language=pt-BR
 const api = axios.create({
  baseURL:'https://api.themoviedb.org/3/'
})
export default api;
