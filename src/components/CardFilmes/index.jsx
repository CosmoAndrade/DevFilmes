import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api'
import './index.css'



const CardFilmes = () => {

  const [filmes, setFilmes] = useState([]);



  useEffect(() => {

    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "28fc232cc001c31e8a031f419d0a14ca",
          language: "pt-BR",
          page: 1,
        }
      })

      //console.log(response.data.results.slice(0, 10));
      setFilmes(response.data.results.slice(0, 12))


    }

    loadFilmes();

  }, [])



  return (
    <  >

      <div className=" d-flex justify-content-around flex-wrap">

        {filmes.map((filme) => {
          return (
            <div class="card mb-3 mt-3" style={{ width: '18rem' }} key={filme.id} >

              <img class="card-img-top" src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />

              <div class="card-body">

                <h5 className='text-center'>{filme.title}</h5>

                <Link class="btn d-flex btn-primary justify-content-center" to={`/detalhes/${filme.id}`}>Ver Detalhes</Link>
              </div>


            </div>
          )
        })}
      </div>

    </>

  );
}

export default CardFilmes;