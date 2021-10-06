import React, {useEffect, useState} from 'react';
import Tmdb from './Tmdb';
import './App.css';
import MovieRow from './components/MovieRow';
import FeaturedMovies from './components/FeaturedMovies';
import Header from './components/Header';



export default () => {

  const [movieList, setMovieList] = useState([]); // Recebendo as Capas dos Filmes
  const [featuredData, setFeaturedData] = useState([]); //Recebendo o Destaque
  const [blackHeader, setBlackHeader] = useState(false);
  

  useEffect(()=>{
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Pegando Featured
      let originals = list.filter(i=>i.slug === 'trending');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'movie');
      setFeaturedData(chosenInfo);
      
      
    }

    loadAll();
  }, []);
  useState(()=>{
    const scrollListener =() => {
      if(window.scrollY > 180) {
        setBlackHeader(true);
      }
      else {
        setBlackHeader(false);
      }
    }
    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }

  }, []);



  return (
    <div className="page-poster">

      <Header black={blackHeader}/>
      
      {featuredData &&
        <FeaturedMovies item={featuredData}/>
      } 

      <section className="lists">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div> 
  )
}


