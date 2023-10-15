import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";

const Featured = () => {
  const [bestSells, setBestSells] = useState([]);

  useEffect(() => {
    fetch("featured.json")
      .then((res) => res.json())
      .then((data) => setBestSells(data));
  }, []);

  return (
    <>
      <h1 className="text-center text-4xl font-bold mb-10 border-b-4 border-red-600 mx-10">Featured</h1>
      <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-2 mx-10 mb-20">
        {bestSells.slice(0, 10).map((bestSell) => (
          <div key={bestSell.id}>
            <div className="border w-full h-full">
              <img
                src={bestSell.image}
                alt=""
                className="p-4  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 w-full h-96"
              />
              <div className="pl-8 my-4">
                <Rating
                  placeholderRating={bestSell.rating}
                  readonly
                  emptySymbol={<FaRegStar className="text-xs"></FaRegStar>}
                  placeholderSymbol={
                    <FaStar className="text-yellow-400 text-xs"></FaStar>
                  }
                  fullSymbol={<FaStar></FaStar>}
                ></Rating>
                <h3 className="text-sm font-semibold">{bestSell.name}</h3>
                <h3 className="text-red-500 font-semibold">${bestSell.price}</h3>
              </div>
              <button className="btn btn-outline w-full text-red-600 hover:bg-red-900">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Featured;
