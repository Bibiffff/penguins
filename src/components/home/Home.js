
import More from "../more/More";
import OurTeam from "../ourteam/OurTeam";
import "./home.scss";


const Home = () => {

    return (
        <div>
            <div className="row">
                <div className="hero py-5">
                    <div className="ms-5 whitebox">
                        <h1 className="text-dark pt-5 ms-5 mt-5 ">PENGUINS</h1>
                        <p className="text-dark pb-5 ms-5 mb-5">penguins penguins penguins penguins penguins penguins!!</p>
                    </div>
                </div>
                <h2 className="mt-2 text-center">Learn More...</h2>
                <More />
                <OurTeam />
            </div>
        </div>
    );
};

export default Home;