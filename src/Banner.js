import React, { useEffect, useState } from 'react';
import axios from "./axios";
import './Banner.css';

const base_url = "https://image.tmdb.org/t/p/original/";

function Banner({fetchUrl}) {
     const [movies, setMovies] = useState([]);

     useEffect(() => {
          async function fetchData() {
                await axios.get(fetchUrl)
                    .then(res => {
                         setMovies(res.data.results[
                              Math.floor( Math.random() * res.data.results.length - 1)])
                    });
          
          }
          fetchUrl && fetchData();
     }, [fetchUrl]);


     function truncate(str, n) {
          return str?.length > n ? str.substr(0, n - 1) + "..." : str;
     }

     return (
          <header
               className="banner"
               style={{
                    backgroundSize: "cover",
                    backgroundImage: `url(${base_url}${movies?.backdrop_path})`,
                    backgroundPosition: "center center",
               }}
          >
               <div className="banner_contents">
                    <h1 className="banner__title">
                         {movies?.title || movies?.name || movies?.original_name}
                    </h1>
                    
                    <div className="banner__buttons">
                         <button className="banner_button">Play</button>
                         <button className="banner_button">My List</button>
                    </div>

                    <h1 className="banner_description">
                         {truncate(movies?.overview, 150)}
                    </h1>
               </div>

               <div className="banner__fadeBottom" />
          </header>
     )
}

export default Banner
