import { Link } from "react-router-dom";

import { GiPenguin, GiIgloo } from "react-icons/gi";
import { PiFishSimpleBold } from "react-icons/pi";

import "./more.scss";

const More = () => {
    return (
        <div className="row my-3">
            <div className="col-4">
                <div className="card text-center cardStyle">
                    <div className="card-body ">
                        <h4 className="card-title">Food</h4>
                        <PiFishSimpleBold style={{ fontSize: "5rem" }} className="card-img mt-3" />
                        <Link to="/" className="mt-3 btn cardStyle">See More</Link>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="card text-center cardStyle" >
                    <div className="card-body ">
                        <h4 className="card-title">Penguins</h4>
                        <GiPenguin style={{ fontSize: "6rem" }} className="card-img my-2" />
                        <Link to="/" className="btn cardStyle">See More</Link>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="card text-center cardStyle">
                    <div className="card-body ">
                        <h4 className="card-title">Location</h4>
                        <GiIgloo style={{ fontSize: "7rem" }} className="card-img" />
                        <Link to="/" className="btn cardStyle">See More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default More;