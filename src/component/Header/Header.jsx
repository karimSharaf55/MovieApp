import React, { useContext } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MediaContext } from '../../MediaContext'
import styles from './Header.module.css'


export default function Header() {
  const { trandingmovies } = useContext(MediaContext)
  let baseImageUrl = 'https://image.tmdb.org/t/p/original/';

  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



  return (
    <>
      <div className='container-fluid '>
        <div className='row'>
          <header   className={` vh-100 ${styles.holder} position-relative `}>
            <Slider className={`  ${styles.custom} `} {...settings}>
              {trandingmovies.map((movie, index) =>
                <img className=' px-1 w-100 ' key={index} src={baseImageUrl + movie.poster_path} alt="" />
              )}
            </Slider>
          </header>
        </div>
      </div>
    </>
  )
}
