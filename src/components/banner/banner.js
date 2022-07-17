import React from 'react'
import axios from '../../axios'
import {API_KEY,imgUrl} from "../../constants/constants"

import "./banner.css";

function Banner() {
  const [movie,setMovie]=React.useState()
  React.useEffect(() =>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[1])
      setMovie(response.data.results[1]);
    })

  },[])
  
  return (
    <div
    style={{backgroundImage:`url(${movie ? imgUrl+movie.backdrop_path:""})`}}
     className='banner'>
    <div className='content'>
    <h1 className='title'>{movie? movie.title:""}</h1>
    <div className='banner_buttons'>
        <button className='button'>play</button>
        <button className='button'>my list</button>
    </div>
    <h1 className='discription'>{movie?movie.overview:""}</h1>

    </div>
      <div className='fade_bottom'></div>
    </div>
   
  )
}

export default Banner
