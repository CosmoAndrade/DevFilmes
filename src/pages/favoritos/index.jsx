import { useEffect, useState } from 'react';
import './index.css'

import { Link } from 'react-router-dom';



const Favoritos = () => {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {

        const minhaLista = localStorage.getItem("@primeflix");
        setFilmes(JSON.parse(minhaLista) || [])

    }, [])


    function excluirFilme(id) {
        let filtroFilmes = filmes.filter((item) => {
            return (item.id !== id)
        })

        setFilmes(filtroFilmes);
        localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes))
        alert("Filme removido com sucesso")
    }

    return (
        <div className='container '>

            <h1 className='text-center'>Meus filmes</h1>

            {filmes.length === 0 && <span>Você não possui nenhum filme salvo :( </span>}

            <ul class="list-group">
                {filmes.map((item) => {
                    return (
                        
                             <li key={item.id} class="list-group-item mb-2">
                            <span>{item.title}</span>

                            <div>
                                <Link  className='btn btn-primary mx-3' to={`/detalhes/${item.id}`}>Ver detalhes</Link>
                                <button className='btn btn-danger' onClick={() => excluirFilme(item.id)}>Excluir</button>
                            </div>
                        </li>

                    
                       
                    )
                })}
            </ul>




        </div>
    );
}

export default Favoritos;