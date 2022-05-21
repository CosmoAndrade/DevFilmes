import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import './index.css';
import api from '../../services/api';



const Detalhes = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [filme, setFilme] = useState({});


    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "28fc232cc001c31e8a031f419d0a14ca",
                    language: "pt-BR",
                }
            })
                .then((response) => {
                    setFilme(response.data);
                    
                })
                .catch(() => {
                    console.log("FILME NAO ENCONTRADO");
                    navigate("/", { replace: true });
                    return;
                })
        }

        loadFilme();


        return () => {
            console.log("COMPONENTE FOI DESMONTADO")
        }
    }, [navigate, id])


    function salvarFilme() {
        const minhaLista = localStorage.getItem("@primeflix");

        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some((filmesSalvo) => filmesSalvo.id === filme.id)

        if (hasFilme) {
            alert("Esse filme já está na sua lista!")
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
        alert("Filme salvo com sucesso!")

    }


    return (

        <div className='container  '>


            <h1 class="text-center">{filme.title}</h1>

            <figure class="figure "  >

            <img    class="figure-img img-fluid rounded " src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

            </figure>

            <h3 className='text-center'>Sinopse</h3>
            <span>{filme.overview}</span>  <br />

            <strong className='text-center'> Avalição: {filme.vote_average} / 10</strong>

            <div  class="d-flex justify-content-around mt-3 "  >
                <button className='btn btn-primary w-25  mb-4 ' onClick={salvarFilme}>Salvar</button>
                <button className='btn btn-info w-25  mb-4'>
                    <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>
                        Trailer
                    </a>
                </button>
            </div>




        </div>
    );
}

export default Detalhes;