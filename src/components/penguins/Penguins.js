import Penguinping from "../images/ping.webp";


const Penguins = () => {

    return (
        <div className="row px-5 py-3">
            <div className="col-12 col-lg-4">
                <img src={Penguinping} className="img-fluid" />
            </div>
            <div className="col-12 col-lg-6">
                <h1 className="text-lg-start text-center">Penguins</h1>
                <p className="text-lg-start text-center"> Aenean eget libero eu risus pretium iaculis sed sit amet erat. Maecenas eleifend nisl imperdiet sem lobortis, id ultricies tellus condimentum. Cras sagittis lorem eget mauris vestibulum, sed finibus lorem fringilla. Suspendisse accumsan, ante in fringilla ultricies, neque quam pretium tortor, nec vulputate justo purus eu nibh. Aenean nisi nisl, commodo et porttitor at, mollis in justo. Fusce ac metus sit amet neque pulvinar ornare. Proin quis quam ut mauris congue auctor. Nunc tempor aliquet orci in hendrerit.
                </p>
                <p className="text-lg-start text-center">
                     Vestibulum turpis ex, semper consequat velit faucibus, ultrices tincidunt odio. Maecenas at semper metus, aliquet suscipit erat. Nunc nec eros mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                </p>
            </div>


            <div className="row px-5 pt-3">

            </div>
        </div>
    );
};

export default Penguins;