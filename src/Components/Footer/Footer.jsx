/* eslint-disable react/no-unescaped-entities */

const Footer = () => {
    return (
      <footer className=" pt-4 min-h-[65vh] flex flex-col mt-10">
        <div className="container mx-auto grid lg:grid-cols-7 gap-4 p-4 flex-grow">
          {/* Column 1: Contact Information */}
          <div className="col-span-2">
            <div className="font-bold uppercase mb-6">Contact Information</div>
            <p className="mb-1 text-base text-gray-600">Call us</p>
            <p className="text-red-500 font-bold text-2xl my-2">123-456-7890</p>
            <p className="mb-3 text-base text-gray-600">support@footcase.com</p>
            <p className="mb-3 text-base text-gray-600">Mirpur 2, Dhaka</p>
          </div>
  
          {/* Column 2: Company */}
          <div className="col-span-2">
            <div className="font-bold text-sm uppercase mb-6">Company</div>
            <ul>
              <li className="mb-3 text-sm text-gray-600">About Us</li>
              <li className="mb-3 text-sm text-gray-600">Buy</li>
              <li className="mb-3 text-sm text-gray-600">My Wishlist</li>
              <li className="mb-3 text-sm text-gray-600">Contact Us</li>
              <li className="mb-3 text-sm text-gray-600">Order Tracking</li>
            </ul>
          </div>
  
          {/* Column 3: Find it Fast */}
          <div className="col-span-2">
            <div className="font-bold text-sm uppercase mb-6">Find it Fast</div>
            <ul>
              <li className="mb-3 text-sm text-gray-600">Featured</li>
              <li className="mb-3 text-sm text-gray-600">Best Selling</li>
              <li className="mb-3 text-sm text-gray-600">Week Best Products</li>
              <li className="mb-3 text-sm text-gray-600">New Arrivals</li>
              <li className="mb-3 text-sm text-gray-600">For Men</li>
              <li className="mb-3 text-sm text-gray-600">For Women</li>
            </ul>
          </div>
  
          {/* Column 4: Explore */}
          <div className="col-span-1">
            <div className="font-bold text-sm uppercase mb-6">Explore</div>
            <ul>
              <li className="mb-3 text-sm text-gray-600">Gift a Smile</li>
              <li className="mb-3 text-sm text-gray-600">Creybit Cares</li>
              <li className="mb-3 text-sm text-gray-600">Size Guide</li>
              <li className="mb-3 text-sm text-gray-600">F.A.Q.'s</li>
              <li className="mb-3 text-sm text-gray-600">Privacy Policy</li>
              <li className="mb-3 text-sm text-gray-600">Store Location</li>
            </ul>
          </div>
        </div>
  
        {/* Copyright */}
        <div className="bg-sky-950 text-sm text-white text-center py-5">
          Copyright &copy; {new Date().getFullYear()}{" "}
          <span className="text-red-500">FOOTCASE</span>. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  