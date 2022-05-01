import { createContext } from "react";
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export let MediaContext=createContext([])


export function MediaContextProvider(props) {
    const [trandingmovies, setTrandingmovies] = useState([])
    const [trandingTv, setTrandingTv] = useState([])
    const [trandingPerson, setTrandingPerson] = useState([])

  
    async function getTrendingItem(mediaType, callback) {
      let { data } = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=c87cf3b8b438a245a8dbd14f4a12b302`)
      callback(data.results.slice(0, 10));
  
    }
    useEffect(() => {
      getTrendingItem("movie", setTrandingmovies)
      getTrendingItem("tv", setTrandingTv)
      getTrendingItem("person", setTrandingPerson)
    }, [])



    return <MediaContext.Provider value={{trandingmovies,trandingTv,trandingPerson} }>

        {props.children}
    </MediaContext.Provider>
}