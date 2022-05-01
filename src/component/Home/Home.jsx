import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MediaContext } from '../../MediaContext'
import Header from '../Header/Header'
import styles from './Home.module.css'

export default function Home() {
  const { trandingmovies, trandingTv, trandingPerson } = useContext(MediaContext)
  let baseImageUrl = 'https://image.tmdb.org/t/p/original/';


  return (
    <>

<Header/>
<div  className='container'>
      {
        trandingmovies ? <div className='row py-4'>
          <div className='col-lg-4 col-md-6 d-flex  align-items-center'>
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
            <div key={index} className=' col-lg-2 col-md-6    position-relative my-md-3'>
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

      {
        trandingTv ? <div className='row py-4'>
          <div className='col-lg-4 col-md-6 d-flex  align-items-center'>
            <div className='w-100'>
              <div className={` w-25 ${styles.brdr} mb-2 `}></div>
              <h2>tranding</h2>
              <h2>tv</h2>
              <h2>to watch now</h2>
              <p>most watched tv by day</p>
              <div className={`  ${styles.brdr} mb-2 `}></div>
            </div>
          </div>

          {trandingTv.map((tv, index) =>
            <div key={index} className='col-lg-2 col-md-6 position-relative  my-md-3'>
               <div className='item mb-4'>
              <Link to={`/Moviedetails/${tv.id}`}>
                <img className='w-100' src={baseImageUrl + tv.poster_path} alt="" />
                <h5 className='mt-3 ' >{tv.name}</h5>
                <h3 className={` position-absolute top-0 end-0 p-2  ${styles.light} `}>{tv.vote_average}</h3>
              </Link>
              </div>
            </div>

          )}
        </div> : ''
      }
      {
        trandingPerson ? <div className='row py-4'>
          <div className='col-lg-4 col-lg-6 d-flex  align-items-center'>
            <div className='w-100 '>
              <div className={` w-25 ${styles.brdr} mb-2 `}></div>
              <h2>tranding</h2>
              <h2>Person</h2>
              <h2>to watch now</h2>
              <p>most watched Person by day</p>
              <div className={`  ${styles.brdr} mb-2 `}></div>
            </div>
          </div>

          {trandingPerson.map((Person, index) =>
            <div key={index} className='col-lg-2 col-md-6  my-md-3'>
               <div className='item mb-4'>
              <img className='w-100' src={baseImageUrl + Person.profile_path} alt="" />
              <h5 className='mt-3 '>{Person.name}</h5>
            </div>
            </div>
          )}
        </div> : <h1>isloading....</h1>
      }
      </div>
    </>
  )
}
