/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from 'react';

import './MoviesGrid.css'

import MovieCard from "../components/MovieCard";

// usando as variaveis do VITE que eu criei no .env
const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

function Home (){
    const [topMovies, setTopMovies] = useState([])
    
    const getTopRatedMovies = async (url) => {
        const res = await fetch (url)
        const data = await res.json();

        setTopMovies(data.results)
    };

    useEffect(() => {

        const topRatedUrl = `${moviesUrl}top_rated?${apiKey}`;

        getTopRatedMovies(topRatedUrl);

    }, [])

    return(
        <div className="container">
            <h2 className="title">Melhores filmes: </h2>
            <div className="movies-container">

                {topMovies.length === 0 && <p>Carregando...</p>}
                {/* em uma lista em React, é necessario você colocar que cada item do array terá um atributo que será sua chave  */}
                {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}

            </div>
        </div>
    );
}

export default Home;