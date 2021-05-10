import React from 'react';
import './Detail.css';

function Detail({ location, history }) {

    const {id, year, title, summary, poster, genres} = location.state;
    
    if (location.state === undefined) {
        history.push("/");
    }
    return (
        location.state &&
        <div className="movie-detail">
            <div className="movie-detailTop">
                <div className="movie2">
                    <h2 className="movie-title">{title}</h2>
                    <div className="movie3">
                        <ul className="movie-genres">
                            {genres.map((genre, index) => <li key={index} className="genres-genre">{genre}</li>)}
                        </ul>
                        <h5 className="movie-year"> {year} </h5>
                    </div>
                </div>
                <img src={poster} alt={title} title={title} />
            </div>
            <p className="movie-summary">{summary} </p>
        </div>
    );
}

export default Detail;