import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Button from '@mui/material/Button'
import Loading from '../Loading/Loading';

export default function Details() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    arrows: false, 
    autoplaySpeed: 1000,
  };
  

  let { id } = useParams();

  const [details, setDetails] = useState({});
  const [loader , setLoader] = useState(false)

  async function getGamesDetails() {
    setLoader (true)
    try {
      let { data } = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, {
        headers: {
          'X-RapidAPI-Key': '47755142a3msh00047811fe623ebp125a57jsn968c763628f8',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      });
      setLoader(false)
      setDetails(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getGamesDetails();
  }, []);



if (loader) return <Loading/>

  return (
    <>
  

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {details.thumbnail && (
              <img src={details.thumbnail} className='w-100' alt={details.title} />
            )}
            {details.screenshots && (
              <Slider {...settings}>
                {details.screenshots.map((item, index) => (
                  <img src={item.image} className='w-100 my-4' alt={`screenshot-${index}`} key={index} />
                ))}
              </Slider>
            )}
          </div>
          <div className="col-md-8">
          <div className="d-flex justify-content-between">
      <div></div>
      <Link to={"/mmorpg"} className='text-decoration-none'>
       <Button sx={{fontWeight :"bolder"}} variant="text" color="error">
         Home
       </Button>
      </Link>
    </div>
            <h2>{details.title}</h2>
            <h3><span className='text-danger'>About</span> {details.title}</h3>
            <p>{details.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
