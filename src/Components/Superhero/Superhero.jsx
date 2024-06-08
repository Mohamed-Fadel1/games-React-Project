import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, TextField } from '@mui/material';
import { useTheme } from '@emotion/react';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';

export default function Mmorpg() {
  const [games, setGames] = useState([]);
  const [loadingg , setLoading ] = useState(false)
  const [search, setSearch] = useState("");
  let theme = useTheme()

  async function getMmorpgGames() {
    try {
      setLoading(true)
      const { data } = await axios.get(
        'https://free-to-play-games-database.p.rapidapi.com/api/games?category=superhero',
        {
          headers: {
            'X-RapidAPI-Key': '47755142a3msh00047811fe623ebp125a57jsn968c763628f8',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
          },
        }
      );
      setGames(data);
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMmorpgGames();
  }, []);


  if (loadingg) return <Loading/>

  return (
    <>
      <div className="container">
      <TextField
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
          variant="outlined"
          label=" &#128073; Search..."
          fullWidth
          margin="normal"
          focused
          sx={{
            maxWidth: '50%',
            margin: '0 auto',
            display: 'block',
            width: "500px",
            my:"20px" ,
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: theme.palette.mainNavHover,
              },
            },
            '& .MuiInputLabel-root': {
              '&.Mui-focused': {
                color: theme.palette.mainNavHover,
              },
            },
          }}
        />
        <div className="row g-4">
        {games.filter((gameName)=>gameName.title.toLowerCase().includes(search.toLocaleLowerCase()))
          .map((game) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={game.id}>
       <Link to={`/details/${game.id}` } className='text-decoration-none' >
       
       
       <div className="card h-100 ">
                <img src={game.thumbnail} className="card-img-top" alt={game.title} />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start">
                    <p 
                      className='fw-bolder p-title' 
                      style={{
                        fontSize: "12px", 
                      color : theme.palette.mainWord ,
                   
                        wordBreak: "break-word",
                        whiteSpace: "normal",
                        maxWidth: "150px"
                      }}
                    >
                      {game.title} 
                    </p>
                    <Button 
                     className='Button'
                      variant="contained" 
                      size='small' 
                      sx={{
                        color: "white", 
                        bgcolor: theme.palette.mainNav, 
                        "&:hover": {
                          bgcolor: theme.palette.mainNavHover
                        }
                      }}
                    >
                      free
                    </Button>
                  </div>
                  <p  className="card-text" style={{ color : theme.palette.mainWord}} >{game.short_description}</p>
                  {/* <a href={game.game_url} className="btn btn-primary">Play</a> */}
                </div>
                <div className="card-footer d-flex justify-content-between">
    <p style={{fontSize:"12px"}} className=' text-white'> {game.genre} </p>
    <p style={{fontSize:"12px"}} className=' text-white'> {game.platform} </p>
   </div>
              </div>
       
       
       </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
