import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";


const WeekBest = () => {
    const [bestsellers, setBestsellers] = useState([]);
    useEffect(() => {
        fetch("bestseller.json")
            .then((res) => res.json())
            .then((data) => setBestsellers(data));
    }, []);
    return (
        <>
            <h1 className="text-center text-4xl font-bold mb-10 border-b-4 border-red-600 mx-10">Week Special Products</h1>
            <div className="mb-20 mx-10">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {bestsellers.map((product) => (
                        <div key={product.id}>
                            <SwiperSlide>
                                <div className="border w-full h-full">
                                    <img
                                        src={product.image}
                                        alt=""
                                        className="p-4  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-150 w-full h-96"
                                    />
                                    <div className="pl-8 my-4">
                                        <Rating
                                            placeholderRating={product.rating}
                                            readonly
                                            emptySymbol={<FaRegStar className="text-xs"></FaRegStar>}
                                            placeholderSymbol={
                                                <FaStar className="text-yellow-400 text-xs"></FaStar>
                                            }
                                            fullSymbol={<FaStar></FaStar>}
                                        ></Rating>
                                        <h3 className="text-sm font-semibold">{product.name}</h3>
                                        <h3 className="text-red-500 font-semibold">
                                            ${product.price}
                                        </h3>
                                    </div>
                                    <button className="btn btn-outline w-full text-red-600 hover:bg-red-900">Add to Cart</button>
                                </div>
                            </SwiperSlide>
                        </div>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default WeekBest;