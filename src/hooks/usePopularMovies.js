import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utils/constant";
import { addPopularMovies } from "../Utils/MoviesSlice";
import { useEffect } from "react";


const usePopularMovies = ()=>{
const dispatch=useDispatch();
const PopularMovies = useSelector((store)=>store.movies.PopularMovies)

const getPopularMovies=async()=>{
  const data= await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
  const json = await data.json();
// console.log(json.results)
dispatch(addPopularMovies(json.results))
}

useEffect(()=>{
  if(!PopularMovies)
getPopularMovies()
},[])
}

export default usePopularMovies;