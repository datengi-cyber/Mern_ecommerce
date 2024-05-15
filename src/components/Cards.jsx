import React, { useEffect, useState } from "react";
import Ratings from "../ui/Ratings";
import Pricing from "../ui/Pricing";
import { Link } from "react-router-dom";

export default function Cards({ items }) {
  const [img, setImg] = useState();

  useEffect(() => {
    if (items) {
      const image = new Image();
      image.src = items.src;
      image.onload = () => {
        setImg(image);
      };
    }
  }, [items]);

  return (
    <>
      {items ? (
        <>
          {img ? (
            <div className="cards">
              <div className="card-image-container">
                <Link
                  to={`/productsInfo/${items.id}`}
                  onClick={() => window.scrollTo({ top: 0, left: 0 })}
                >
                  <img src={img.src} alt={items.title} />
                </Link>
              </div>
              <div className="card-description">
                <h1 className="card-title">{items.title}</h1>
                <Ratings rating={items.rating} />
                {/* 
                  Pass the correct price value (salePrice or originalPrice) to the Pricing component 
                  If salePrice exists, use it, otherwise fallback to originalPrice 
                */}
                <Pricing price={items.salePrice !== null ? items.salePrice : items.originalPrice} />
                {/* <Ratings description={items.description} /> */}
              </div>
            </div>
          ) : (
            <div className="cards skeleton">
              <div className="card-image-container skeleton"></div>
              <div className="card-description skeleton"></div>
            </div>
          )}
        </>
      ) : null}
    </>
  );
}
