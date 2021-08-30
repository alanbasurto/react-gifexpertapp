import { useFetchGifs } from "../hooks/useFetchGifs";
import { GrifGridItem } from "./GrifGridItem";

export const GifGrid = ({ category }) => {

  const {data:images, loading} = useFetchGifs( category );

  return (
    <>
      <h3 className='animate__animated animate__fadeIn animate__delay-2s'>{category}</h3>

    { loading && <p className='animate__animated animate__flash'>Loading...</p>}

      <div className="card-grid">
          {images.map((img) => (
            <GrifGridItem
              key={img.id}
              {...img}
              // img = { img }
            />
          ))}
      </div>
    </>
  );
};