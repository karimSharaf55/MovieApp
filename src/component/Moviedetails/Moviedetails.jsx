import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function Moviedetails() {
  const [details, setdetails] = useState({})
  let params = useParams();
  let baseImageUrl = 'https://image.tmdb.org/t/p/original/';
  async function getMovieDetails() {

    let { data } = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US`)
    setdetails(data)

  }
  useEffect(() => {
    getMovieDetails()

  }, [])

  return (
    <div>
<div className='container'>
      <div className='row py-4'>

        <div className='col-md-4'>

          <img className='w-100' src={baseImageUrl + details.poster_path} alt="" />

        </div>
        <div className='col-md-7 offset-md-1 '>
          <div className='detail py-5 text-md-start'>
            <h5>Name :  <a href='#'>{details.original_title}</a> </h5>
            <h5>IMDb RATING :  {details.vote_average} </h5>
            <h5>User reviews :  {details.popularity} </h5>
            <p >{details.overview}</p>
            <button className='btn btn-outline-info  mx-2 mb-3'>Comdey</button>
            <button className='btn btn-outline-info mx-2 mb-3'>Action</button>
            <button className='btn btn-outline-info mx-2 mb-3'>Drama</button>

          </div>




        </div>

      </div>

    </div>
    </div>

  )
}
