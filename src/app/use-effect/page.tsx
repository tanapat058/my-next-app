"use client";
import FooTer from "@/components/Footer";
import MenuBar from "@/components/MenuBar";
import axios from "axios";
import { useEffect, useState } from "react";

export default function UseEffectPage() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/week?api_key=229a6a0f891df5bf1176a4668af885c6"
      )
      .then((response) => {
        console.log(response);
        setMovieList(response.data.results);
      });
  }, []);

  return (
    <div>
      <MenuBar page="เรียนรู้ Use_Effect" />

      {movieList.map((item, index) => (
        <div className="flex justify-center">
          <div className="bg-amber-600 mt-4 w-xl">
            <h2 className="text-center">{item.title}</h2>
            <h3 className="text-center">{item.overview}</h3>
    
            <div className="flex justify-center">
  <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
        />
</div>        
          </div>
        </div>
      ))}

      <FooTer />
    </div>
  );
}
