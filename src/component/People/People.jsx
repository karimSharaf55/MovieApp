import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './People.module.css'

export default function Home() {

  const [trandingPerson, setTrandingPerson] = useState([])
  let baseImageUrl = 'https://image.tmdb.org/t/p/original/';
  async function getTrendingPeople() {
    let { data } = await axios.get(`https://api.themoviedb.org/3/trending/person/day?api_key=c87cf3b8b438a245a8dbd14f4a12b302`)
    setTrandingPerson(data.results);

  }
  useEffect(() => {
    getTrendingPeople()
  }, [])


  return (
    <>
   


<div className='container'>
      <div className='row py-4'>
        <div className='col-md-4 d-flex  align-items-center'>
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
          <div key={index} className='col-md-2  my-md-3'>
            <img className='w-100' src={baseImageUrl + Person.profile_path} alt="" />
            <h5>{Person.name}</h5>

          </div>

        )}


      </div>
      </div>
    </>
  )
}
