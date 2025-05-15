"use client";

import Footer from "@/components/Footer";
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
        setMovieList(response.data.results);
      })
      .catch(() => {
        alert("เกิดข้อผิดพลาดในการดึงข้อมูล");
      });
  }, []);

  return (
    <div className="min-h-screen bg-blue-700">
      <MenuBar page="เรียนรู้ Use_Effect" />

      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movieList.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.title || item.name}
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {item.title || item.name}
              </h2>
              <p className="text-gray-600 text-sm line-clamp-3">
                {item.overview || "ไม่มีคำอธิบาย"}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
