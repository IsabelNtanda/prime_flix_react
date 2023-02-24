import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import api from '../../services/api'
export default function Filme(){
  const {id} = useParams()
const [filme,setFilme] =useState({})
const [loading, setLoading] = useState(true)
useEffect(()=>{

  async function loadFilme(){
  await api.get(`/movie/${id}`,{

    params:{
      api_key: '8a20226013191a81fea33c6295a8e646',
      language: 'pt-BR',
    }
  })
  .then((response)=>{
    setFilme(response.data)
    setLoading(false)
  })
  .catch(()=>{
  console.log('filme n encontrado')
  })
  }
  loadFilme()

  return () =>{
  console.log('componente foi desmontado')
  }
}, [])

if(loading){
return(
  <div className="filme-info">Carregando detalhes...</div>
  )

}


return(
  <div className="filme-info">
    <h1>{filme.title}</h1>
 <img  src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
                alt={filme.title} />

  <h3>Sinopse</h3>
  <span>{filme.overview}</span>

  <strong>Avaliaçã0:{filme.vote_average} / 10</strong>
  </div>
  )
}
