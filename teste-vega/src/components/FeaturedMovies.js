import React from 'react';
import './FeaturedMovie.css';

export default ({item}) => {

    let firstData = new Date(item.release_date);
    let genres = [];
    for(let i in item.genres) {
        genres.push( item.genres[i].name );
    }

    return (
       <section className="featured" style={{
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
       }}>
           <div className="featured--vertical">
               <div className="featured--horizontal">
                   <div className="featured--name">{item.title}</div>
                   <div className="featured--info">
                       <div className="featured--points">{item.vote_average} Pontos</div>
                       <div className="featured--year">{firstData.getFullYear()}</div>
                       {/* <div className="featured--seasons">{item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's' : ''}</div> */}
                       
                   </div>
                   <div className="featured--description">{item.overview}</div>
                   <div className="featured--buttons">
                       <a href={`/watch/${item.id}`} className="featured--watchbutton">Assistir</a>
                       <a href={`list/add/${item.id}`} className="featured--listbutton">+ Minha Lista</a>
                   </div>
                   <div className="featured--genres"><strong>Generos:</strong> { genres.join(', ')} </div>

               </div>
           </div>
       </section>
    );
}