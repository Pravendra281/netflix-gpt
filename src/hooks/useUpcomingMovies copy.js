import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utils/constant";
import {addUpcomingMovies } from "../Utils/MoviesSlice";
import { useEffect } from "react";


const useUpcomingMovies = ()=>{
const dispatch=useDispatch();
const UpcomingMovies = useSelector((store)=>store.movies.UpcomingMovies)

const getUpcomingMovies=async()=>{
  const data= await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
  const json = await data.json();
// console.log(json.results)
dispatch(addUpcomingMovies(json.results))
}

useEffect(()=>{
  if(!UpcomingMovies)
getUpcomingMovies()
},[])
}

export default useUpcomingMovies;