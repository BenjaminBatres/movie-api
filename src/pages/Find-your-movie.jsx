import React, { useEffect, useState }from "react"
import Movies from '../components/Movies'
import axios from "axios";
import SearchBox from "../components/SearchBox";
import MovieResults from "../components/Movie-results";
import { useParams } from "react-router-dom";


const FindYourMovie = () => {
    const {search} = useParams()
    const [movies, setMovies] = useState([]);
    const [sortOrder, setSortOrder] = useState('latest');
    const [searchTerm, setSearchTerm] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    async function fetchMovie() {
        const { data } = await axios.get(
            `https://www.omdbapi.com/?s=${searchTerm || search}=&apikey=4053be5e`
          );
          if(data.Search) {
              setMovies(data.Search);
              setTimeout(() => {
                  setIsLoading(false)
                
              }, 250);
              if(sortOrder === 'latest') {
                  data.Search.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
              }
              else if(sortOrder === 'oldest') {
                  data.Search.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
              }
            }
        }

    useEffect(() => {
        fetchMovie(searchTerm)
    }, [searchTerm, sortOrder])
  return (
    <>
        <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <MovieResults sortOrder={sortOrder} searchTerm={searchTerm} search={search} setSortOrder={setSortOrder}/>
        <Movies movies={movies} isLoading={isLoading}/>
    </>
  )
};

export default FindYourMovie;
