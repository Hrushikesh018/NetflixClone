import React, { useEffect, useState } from 'react'
import axios from './axios'
import requests from './requests'
import './Banner.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Banner() {
  const [movie, setMovie] = useState([]);

  const [trailerUrl, settrailerUrl] = useState('');



  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals)
      setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
      return request;
    }
    fetchData();
  }, []);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  const opts = {
    height: '390',
    width: '100%',
    marginBottom:'1300',
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      settrailerUrl('');
    }
    else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name || "").then((url) => {
        const urlparams = new URLSearchParams(new URL(url).search);
        settrailerUrl(urlparams.get('v'));
      }).catch(err => console.log(err))
    }
  }
  const handleBannerClick = () => {
    if (trailerUrl) {
      settrailerUrl('');
    }
  };

  return (
    <header className='banner'
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center"
      }}
      onClick={handleBannerClick}
    >
      <div className='banner_contents'>
        <h1 className='banner_title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className='banner_buttons'>
          <button className='banner_button' onClick={() => handleClick(movie)}>Play</button>
          <button className='banner_button'>My List</button>
        </div>
        <h1 className='banner_description'>{truncate(movie?.overview, 150)}</h1>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}
        className="video-player" style={{marginTop:"-300px"}}></Youtube>}
      </div>
      <div className='banner--fadeBottom' />
    </header>
  )
}

export default Banner