import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  let { movieId } = useParams();
  let [data, setData] = useState([]);
  let [cast, setCast] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US
`
      )
      .then((d) => {
        // console.log(d);
        setData(d.data);
        // console.log(data);
      });
  });

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US
`
      )
      .then((d) => {
        // console.log(d);
        setCast(d.data.cast);
      });
  });

  return (
    <div className="mii">
      <div className="main">
        <div className="details">
          <div className="left">
            <div className="text">
              <div className="left-details">
                <img
                  src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`}
                  alt=""
                />
                <div className="details-name">
                  <h1>{data.title}</h1>
                  <h3>{data.vote_average}</h3>
                  <span>{data.popularity}</span>
                  <span>{data.original_language}</span>
                  <h4>Release date: {data.release_date}</h4>
                </div>
              </div>
              <div className="overview">
                <h3>Overview</h3>
                <p>{data.overview}</p>
              </div>
            </div>
          </div>
          <div className="backgroundimage">
            <img
              src={`https://image.tmdb.org/t/p/w200/${data.backdrop_path}`}
              alt=""
            />
          </div>
        </div>

        {/* <h1>Cast</h1> */}
        <div className="cast">
          {cast.map((v) => {
            return (
              <div className="cont">
                <img
                  src={`https://image.tmdb.org/t/p/w200/${v.profile_path}`}
                  alt=""
                  srcset=""
                />
                <p>name : {v.original_name}</p>
                <p>character : {v.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Details;
