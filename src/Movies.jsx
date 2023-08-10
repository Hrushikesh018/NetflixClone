import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import './Movies.css'; // Import the CSS for Movies component
import { useNavigate } from 'react-router-dom';

function Movies() {
  const [movies, setMovies] = useState([]);
  const navigation = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/trending/all/week?api_key=b78a510d44abdaf53d4c9f3ddd2ebfe5&language=en-US');
        const data = await response.json();

        setMovies(data.results);
        console.log(movies)
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };
    fetchMovies();
  }, [movies]);
  const handleCardClick = (movie) => {
    navigation(`/movie/${movie.id}`);
    };

  return (
    <div className='main'>
     <Banner />
      <div className="posters">
        {movies.slice(0, 10).map((movie, id) => (
          <img
            key={id}
            className="poster"
            src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
            alt={`Movie ${id}`}
            onClick={() => handleCardClick(movie)}
          />
        ))}
      </div>
    </div>
  );
}

export default Movies;
