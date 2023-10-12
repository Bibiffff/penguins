import OnePenguin from "../images/gettyimages-163344719.webp";


const Location = () => {

    return (
        <div className="row px-5 py-3">
            <div className="ool-12 col-lg-8">
                <h1 className="text-lg-start text-center">Location</h1>
                <p> Aenean eget libero eu risus pretium iaculis sed sit amet erat. Maecenas eleifend nisl imperdiet sem lobortis, id ultricies tellus condimentum. Cras sagittis lorem eget mauris vestibulum, sed finibus lorem fringilla. Suspendisse accumsan, ante in fringilla ultricies, neque quam pretium tortor, nec vulputate justo purus eu nibh. Aenean nisi nisl, commodo et porttitor at, mollis in justo. Fusce ac metus sit amet neque pulvinar ornare. Proin quis quam ut mauris congue auctor. Nunc tempor aliquet orci in hendrerit.
                </p>
                <p>
                    In hac habitasse platea dictumst. Praesent eleifend dictum faucibus. Vestibulum turpis ex, semper consequat velit faucibus, ultrices tincidunt odio. Maecenas at semper metus, aliquet suscipit erat. Nunc nec eros mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus suscipit gravida blandit.
                </p>
            </div>
            <div className="col-12 col-lg-4">
                <img src={OnePenguin} className="img-fluid"/>
            </div>
          
            <div className="row px-5 pt-3">
            <hr/>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4132095.956245036!2d-95.45746101174143!3d-73.62203188122379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa4b9967b3390754b%3A0x6e52be1f740f2075!2sAntarktis!5e0!3m2!1sda!2sdk!4v1697094920495!5m2!1sda!2sdk" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default Location;