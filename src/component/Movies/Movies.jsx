import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './movies.module.css'
import { MediaContext } from '../../MediaContext'
export default function Home() {
  const { trandingmovies } = useContext(MediaContext)

  let baseImageUrl = 'https://image.tmdb.org/t/p/original/';



  return (
    <>
<div className='container mt-5'>
      {
        trandingmovies ? <div className='row py-4'>
          <div className='col-md-4 d-flex  align-items-center'>
            <div className='w-100'>
              <div className={` w-25 ${styles.brdr} mb-2 `}></div>
              <h2>tranding</h2>
              <h2>movies</h2>
              <h2>to watch now</h2>
              <p>most watched movies by day</p>
              <div className={`  ${styles.brdr} mb-2 `}></div>
            </div>
          </div>

          {trandingmovies.map((movie, index) =>
            <div key={index} className='col-md-2  position-relative my-md-3'>
                <div className='item mb-4'>
              <Link to={`/Moviedetails/${movie.id}`}>
                <img className='w-100' src={baseImageUrl + movie.poster_path} alt="" />
                <h5 className='mt-3 '>{movie.title}</h5>
                <h3 className={` position-absolute top-0 end-0 p-2  ${styles.light} `}>{movie.vote_average}</h3>
              </Link>
              </div>
            </div>
          )}
        </div> : ''
      }
      </div>
    </>
  )
}
