import Image from "next/image";
import "./Home.css";

const Home = () => {
    return (
        <div className="home-page">
            <div className="home-text">
                <div className="home-text-heading">Creative Thoughts Agency.</div>
                <div className="home-text-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis labore explicabo vel? Nam, quaerat eius.</div>
                <div className="home-text-buttons">
                    <button className="home-text-button1 button">Learn More</button>
                    <button className="home-text-button2 button">Contact</button>
                </div>
                <div className="home-text-brands">
                    <Image src="/brands.png" fill />
                </div>
            </div>
            <div className="home-img">
                    <Image src="/hero.gif" fill className="home-img-img"/>
            </div>
        </div>
    );
}

export default Home;