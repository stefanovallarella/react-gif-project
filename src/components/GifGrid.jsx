import { useEffect, useState } from "react";
// import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  console.log(isLoading);

  return (
    <>
      <h3>{category}</h3>

      {isLoading && <p>Cargando...</p>}

      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} image={img} />
        ))}
      </div>
    </>
  );
};
