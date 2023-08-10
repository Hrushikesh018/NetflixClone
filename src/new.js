import React, { useEffect, useState } from 'react';
import axios from 'axios';
import fetchdata from './fetchdata';
import './Banner.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = 'https://image.tmdb.org/t/p/original';

function Banner() {
 const [movie, setmovie] = useState([]);
 const [trailerUrl, settrailerUrl] = useState('');
 useEffect(() => {
 async function fetchData() {
 const req = await axios.get(fetchdata.fetchTrending);
 setmovie(req.data.results[Math.floor(Math.random() * req.data.results.length - 1)]);
 return req;
 }
 fetchData();
 }, [])
 // console.log(movie)
 const opts = {
 height: '390',
 width: '100%',
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
 style={
 {
 backgroundSize: "cover",
 backgroundImage: `url("${base_url}${movie?.backdrop_path}")`,
 backgroundPostion: "center center",
 }
 }
 onClick={handleBannerClick}
 >
 <div className='banner-content'>
 <h2>
 {movie?.name || movie?.original_name || movie?.title}
 </h2>
 <button className='button_banner' onClick={() => handleClick(movie)}>Play ▶</button>
 <h6 className='banner_description'>{movie?.overview}</h6>
 </div>
 {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}></Youtube>}
 </header>

 )
}

export default Banner;