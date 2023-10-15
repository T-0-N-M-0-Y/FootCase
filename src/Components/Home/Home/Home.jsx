import Banner from "../../Header/Banner";
import Offer from "../../Header/Offer";
import Social from "../../Header/Social";
import Offer2 from "../Offer2/Offer2";
import Offer3 from "../Offer2/Offer3";
import SomeInfo from "../SomeInfo/SomeInfo";
import Subscribe from "../Subscribe/Subscribe";
import Category from "../Table/Category";
import Category2 from "../Table/Category2";
import Featured from "../Table/Featured";
import WeekBest from "../Table/WeekBest";

const Home = () => {

    return (
        <div>
            <Social></Social>
            <Offer></Offer>
            <Banner></Banner>
            <SomeInfo></SomeInfo>
            <Category></Category>
            <Offer2></Offer2>
            <Featured></Featured>
            <WeekBest></WeekBest>
            <Offer3></Offer3>
            <Category2></Category2>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;