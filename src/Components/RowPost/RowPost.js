import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { imageUrl } from '../../Constants/Constants'
import YouTube from 'react-youtube'
import { API_KEY } from '../../Constants/Constants'

function RowPost(props) {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    axios.get(props.url).then((Response)=>{
          setMovie(Response.data.results)
    }).catch(err=>{
      alert('network error')
    })
    } )
    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    }
    const [youtubeId, setYoutubeId]=useState()
    const runTrailer=(id)=>{
      axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(Response=>{
        if(Response.data.results.length!==0){
          setYoutubeId(Response.data.results[0])
        } else{console.log("Array empty")}
      } )
    }

  return (
  
    <div className='row'>
        <h2>{props.title}</h2>

        <div className="posters">
           {movie.map((obj)=>
             
             <img  onClick={()=>runTrailer(obj.id)}  className={props.small? "smallPoster" : 'poster'} src={`${imageUrl+obj.backdrop_path}`}  alt="poster"/>
             
           )}
        </div>
       { youtubeId && <YouTube videoId={youtubeId.key} opts={opts} /> } 
       
    </div>
 
  )
}

export default RowPost