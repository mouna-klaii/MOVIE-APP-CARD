
import './App.css';
import { useState } from 'react';
import {moviesData} from './Component/Data/Data';
import MovieList from './Component/MovieList/MovieList';
import AddMovie from './Component/AddMovies/AddMovie';
import FilterMovies from './Component/FilterMovies/FilterMovies';



function App() {
  const [movies , setMovies] = useState(moviesData)
  const add= (newMovies) =>{
    setMovies ([...movies, newMovies] )
   

  }

  const [InputSearch,SetInputSearch] = useState("");
  
  return (
    <div className="App">
<FilterMovies InputSearch={InputSearch} SetInputSearch={SetInputSearch} /> 
      <MovieList movies={movies} InputSearch={InputSearch} />
      <AddMovie add={add} />
   
    
   
    </div>
  );
}

export default App;
