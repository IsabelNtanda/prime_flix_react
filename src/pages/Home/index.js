import { useEffect, useState } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'
import './home.css'
// url da api:https://api.themoviedb.org/3/movie/now_playing?api_key=8a20226013191a81fea33c6295a8e646&language=pt-BR

export default function Home() {
  const [filmes, setFilmes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadFilmes() {
      const { data } = await api.get('movie/now_playing', {
        params: {
          api_key: '8a20226013191a81fea33c6295a8e646',
          language: 'pt-BR',
          page: 1,
        },
      })
      //console.log(response.data.results.slice(0,10))
      setFilmes(data.results.slice(0, 12))
      setLoading(false)
    }
    loadFilmes()
  }, [])

  if (loading) {
    return (
      <div className="loading">
        <h2>Carregando filmes...</h2>
      </div>
    )
  }
  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme) => {
          return (
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img
                src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                alt={filme.title}
              />
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          )
        })}
      </div> 
    </div>
  )
}
