import FoodPenguin from "../images/GettyImages-697353429-5c7e74f046e0fb000140a4dd.webp";


const Food = () => {

    return (
        <div className="row px-5 py-3">
            <div className="col-lg-4 col-12">
                <img src={FoodPenguin} className="img-fluid" />
            </div>
            <div className="col-12 col-lg-8">
                <h1 className="text-lg-start text-center">Food</h1>
                <p className="text-lg-start text-center"> Aenean eget libero eu risus pretium iaculis sed sit amet erat. Maecenas eleifend nisl imperdiet sem lobortis, id ultricies tellus condimentum. Cras sagittis lorem eget mauris vestibulum, sed finibus lorem fringilla. Suspendisse accumsan, ante in fringilla ultricies, neque quam pretium tortor, nec vulputate justo purus eu nibh. Aenean nisi nisl, commodo et porttitor at, mollis in justo. Fusce ac metus sit amet neque pulvinar ornare. Proin quis quam ut mauris congue auctor. Nunc tempor aliquet orci in hendrerit.
                </p>
                <p className="text-lg-start text-center">
                    In hac habitasse platea dictumst. Praesent eleifend dictum faucibus. Vestibulum turpis ex, semper consequat velit faucibus, ultrices tincidunt odio. Maecenas at semper metus, aliquet suscipit erat. Nunc nec eros mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus suscipit gravida blandit.
                </p>
            </div>


            <div className="row px-5 pt-3">

            </div>
        </div>
    );
};

export default Food;