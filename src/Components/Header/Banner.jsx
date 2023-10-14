import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className="carousel md:w-full h-80 md:h-screen">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://wallpaper.dog/large/250807.jpg" className="w-full" />
                    <div className="absolute flex justify-center items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <p className="md:text-5xl text-xs md:font-bold text-white p-2 md:p-5 uppercase text-center">Wellcome to FootCase <br />
                            <p className="md:text-sm my-4 font-normal normal-case">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                            <div className="text-center">
                                <Link to={'/'}><button className="hover:bg-white bg-red-600 hover:text-black border-none mt-2 p-3 text-xs md:text-sm rounded-lg md:w-32 mr-2 transition ease-in-out delay-150 hover:scale-110 duration-150">Shop Now</button></Link>
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;