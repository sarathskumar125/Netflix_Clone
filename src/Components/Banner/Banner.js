import React, { useEffect } from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY,imageUrl } from '../../Constants/Constants'
import { useState } from 'react'

function Banner() {
  useEffect(()=>{
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((Response)=>{
        console.log(Response.data.results[0])
        setMovie(Response.data.results[0])
      })
  }, [] )
   const [movie, setMovie]=useState()

  return (
    <div 
    style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path : ""})` }}
    className='banner'>
      <div className='content'>
        <h1 className='title'>{movie? movie.title :""}</h1>
        <div className='banner_buttons'>
        <button className='button'>play</button>
        <button className='button'>my list</button>
        </div>
        <h1 className='description'>{movie? movie.overview :""}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner