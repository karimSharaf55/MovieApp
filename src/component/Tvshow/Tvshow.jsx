import axios from 'axios'
import React, {useContext, useEffect, useState } from 'react'
import { MediaContext } from '../../MediaContext'
import styles from './Tvshow.module.css'

export default function Home() {
  const { trandingTv } = useContext(MediaContext)
  let baseImageUrl = 'https://image.tmdb.org/t/p/original/';



  return (
    <>
<div className='container'>
  <div className='row'>
  
    {
      trandingTv?   <div className='row py-4'>
      <div className='col-md-4 d-flex  align-items-center'>
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
        <div key={index} className='col-md-2 position-relative  my-md-3'>
          <img className='w-100' src={baseImageUrl + tv.poster_path} alt="" />
          <h5>{tv.name}</h5>
          <h3 className={` position-absolute top-0 end-0 p-2  ${styles.light} `}>{tv.vote_average}</h3>
        </div>
      )}
    </div>:''
    }
     </div>
  </div>
    </>
  )
}
