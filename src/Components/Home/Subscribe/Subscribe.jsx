import {
    FaFacebookSquare,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaYoutube,
  } from "react-icons/fa";
  const Subscribe = () => {
    return (
      <div className="flex items-center justify-evenly gap-4 py-20 bg-gray-100 mb-20 mx-10">
        <div>
          <h1 className="text-2xl font-extrabold">
            JOIN US NOW!! <span className="text-red-600">.</span>
          </h1>
          <p className="text-xs text-slate-500">
            Easy and trusted online shop
          </p>
        </div>
        <div>
          <input
            type="email"
            placeholder="Your email address.."
            className="border px-4 py-2 border-gray-400"
          />
          <button
            className="px-3 py-2 bg-red-700 text-white font-semibold
          "
          >
            SUBSCRIBE
          </button>
        </div>
        <div>
          <h1 className="inline-flex items-center text-slate-500">
            Follow us on:
            <span className="flex gap-3 ml-4">
              <FaFacebookSquare></FaFacebookSquare>
              <FaTwitter></FaTwitter>
              <FaInstagram></FaInstagram>
              <FaYoutube></FaYoutube>
              <FaLinkedin></FaLinkedin>
            </span>
          </h1>
        </div>
      </div>
    );
  };
  
  export default Subscribe;
  