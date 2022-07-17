import React from 'react'
import "./rowpost.css"
import axios from "../../axios"
import {imgUrl,API_KEY} from "../../constants/constants"
import Youtube from "react-youtube"

function Rowpost(props) {
const [movies,setMovies]=React.useState([])
const [Urlid,setUrlid] =React.useState("")
  React.useEffect(()=>{
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
      //alert("error");
    })
     
  },)
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie=(id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.length!==0){
        setUrlid(response.data.results[0])
      }else{
        console.log("error")
      }
    })
  }
  
 
  return (
   
    <div className='row'>
   <h1 className="ti">{props.title}</h1>
    <div className='posters'>
    <div className='fade'></div>
    {movies.map((obj)=>
          <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?"smallposter":"poster"} src={`${imgUrl+obj.backdrop_path}`}
alt='poster'></img>  
    
  
    )}
  

       
    </div>
     
    { Urlid && <Youtube opts={opts} videoId={Urlid.key}/> }
      
    </div>
  )
}

export default Rowpost
