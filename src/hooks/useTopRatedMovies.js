import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utils/constant";
import {addTopRatedMovies} from "../Utils/MoviesSlice";
import { useEffect } from "react";


const useTopRatedMovies = ()=>{
const dispatch=useDispatch();

const TopRatedMovies = useSelector((store)=>store.movies.TopRatedMovies)

const getTopRatedMovies=async()=>{
  const data= await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
  const json = await data.json();
// console.log(json.results)
dispatch(addTopRatedMovies(json.results))
}

useEffect(()=>{
  if(!TopRatedMovies)
getTopRatedMovies()
},[])
}

export default useTopRatedMovies;