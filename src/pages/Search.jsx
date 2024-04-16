// eslint-disable-next-line no-unused-vars
import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import MovieCard from "../components/MovieCard";
import './MoviesGrid.css'

const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

function Search (){

    // to pegando o parametro da url "q"
    const [searchParams] = useSearchParams();

    const [movies, setMovies] = useState([]);
    const query = searchParams.get("q");

    const getSearchedMovies = async (url) => {
        const res = await fetch (url)
        const data = await res.json();

        setMovies(data.results)
    };

    useEffect(() => {

        const searchWithQueryURL = `${searchUrl}?${apiKey}&query=${query}`;

        getSearchedMovies(searchWithQueryURL);

    }, [query])  // sempre quando mudar a query, ele refaz a função de novo 

    return(
        <div className="container">
            <h2 className="title">Resultados para: <span className="query-text">{query}</span> </h2>
            <div className="movies-container">

                {movies.length === 0 && <p>Carregando...</p>}
                {/* em uma lista em React, é necessario você colocar que cada item do array terá um atributo que será sua chave  */}
                {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}

            </div>
        </div>
    );
}

export default Search;