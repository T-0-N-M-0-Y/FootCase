import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const Social = () => {

    const {user} = useContext(AuthContext);

    return (
        <div>
            <div className="flex justify-between items-center text-center bg-sky-950 text-white md:px-20 mt-16">
                {
                    user ?
                        <>
                            <div className="flex items-center justify-center">
                                <p className="mr-2">Follow Us : </p>
                                <a href=""><FaFacebook></FaFacebook></a>
                                <a href=""><FaTwitter className="mx-3"></FaTwitter></a>
                                <a href=""><FaLinkedin></FaLinkedin></a>
                            </div>
                        </>
                        :
                        <>
                            <div className="flex items-center">
                                <p className="mr-2">Login with : </p>
                                <Link><button><FaGoogle></FaGoogle></button></Link>
                                <Link><button><FaGithub className="mx-2"></FaGithub></button></Link>
                                <Link><button><FaFacebook></FaFacebook></button></Link>
                            </div>
                        </>
                }
                <div>
                    {
                        user ?
                            <>
                                <Link><button className="bg-sky-800 hover:text-white text-white px-3 py-1 hidden">Logout</button></Link>
                            </>
                            :
                            <>
                                <Link to={'/'}><button className="bg-sky-800 hover:text-white text-white px-3 py-1 transition ease-in-out delay-150 hover:scale-110 duration-150">Login</button></Link>
                            </>
                    }
                    {
                        user ?
                            <>
                                <div className="flex items-center justify-center tooltip tooltip-bottom" data-tip="Edit Profile">
                                    <Link><button>{user.displayName}</button></Link>
                                    <img src={user.photoURL} alt="" className="w-10 h-10 rounded-full" />
                                </div>
                            </>
                            :
                            <>
                                <Link to={'/'}><button className="bg-red-600 hover:text-white text-white px-3 py-1 transition ease-in-out delay-150 hover:scale-110 duration-150">Sign up</button></Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Social;