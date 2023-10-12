import "./ourteam.scss";
import BibiPingvin from "../images/bibipingvin.jpg";
import ChulPingvin from "../images/chulpingvin.jpg";

import HenryPinkPenguin from "../images/henry.jpg";

import RandomPenguin from "../images/umpingping.jpg";


const OurTeam = () => {

    return (
        <div className="lightblue py-4 px-4">
            <h2 className="text-center">Our Team</h2>
            <div className="row">
                <div className="col-6 col-lg-3">
                    <div class="profilecard">
                        <img src={BibiPingvin} alt="Pingvin" className="w-100" />
                        <h1>Bibi</h1>
                        <p className="titleProfileCard">Webdesigner</p>
                    </div>
                </div>
                <div className="col-6 col-lg-3">
                    <div class="profilecard">
                        <img src={HenryPinkPenguin} alt="Pingvin" className="w-100" />
                        <h1>Henry</h1>
                        <p className="titleProfileCard">CEO & Founder</p>
                    </div>
                </div>
                <div className="col-lg-3 col-6">
                    <div class="profilecard">
                        <img src={ChulPingvin} alt="Pingvin" className="w-100" />
                        <h1>Chul</h1>
                        <p className="titleProfileCard">c:</p>
                    </div>
                </div>
                <div className="col-lg-3 col-6">
                    <div class="profilecard">
                        <img src={RandomPenguin} alt="Pingvin" className="w-100" />
                        <h1>Random</h1>
                        <p className="titleProfileCard">Random</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default OurTeam;