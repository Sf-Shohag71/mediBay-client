import Banner from "../Banner/Banner";
import FeaturedToys from "../FeaturedToys/FeaturedToys";
import Features from "../Features/Features";
import Gellary from "../Gellary/Gellary";
import CategoryTab from "../Tabs/CategoryTab";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <CategoryTab></CategoryTab>
            <FeaturedToys></FeaturedToys>
            <Gellary></Gellary>
        </div>
    );
};

export default Home;