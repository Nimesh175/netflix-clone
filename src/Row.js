import React, {useEffect, useState} from 'react';
import axios from './axios';
import './Row.css'

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargerRow}) {

     const [movies, setMovies] = useState([])

     useEffect(() => {
         async function fetchData() {
              await axios.get(fetchUrl)
                   .then(res => {
                     setMovies(res.data.results);
                   } );
         }
         fetchUrl && fetchData();
     }, [fetchUrl])

     return (
          <div className="row">
               <h2>{title}</h2>

               <div className="row__posters">
                    {movies.map(movie => (
                         <img key={movie.id} 
                         className={`row__poster ${isLargerRow && 'row__posterLarge'}`}
                         src={`${base_url}${isLargerRow ? movie.poster_path : movie.backdrop_path }`} 
                         alt={movie.name} />
                    ))}
               </div>
          </div>
     )
}

export default Row
