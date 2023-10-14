import Banner from "../../Header/Banner";
import Offer from "../../Header/Offer";
import Social from "../../Header/Social";
import Offer2 from "../Offer2/Offer2";
import Offer3 from "../Offer2/Offer3";
import SomeInfo from "../SomeInfo/SomeInfo";
import Subscribe from "../Subscribe/Subscribe";
import Category from "../Table/Category";

const Home = () => {

    return (
        <div>
            <Social></Social>
            <Offer></Offer>
            <Banner></Banner>
            <Offer2></Offer2>
            <Category></Category>
            <SomeInfo></SomeInfo>
            <Offer3></Offer3>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;