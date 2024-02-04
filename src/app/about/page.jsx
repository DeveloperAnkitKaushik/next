import Image from "next/image";
import "./about.css";

const About = () => {
    return (
        <div className="about-container">
            <div className="about-text">
                <h2 className="about-text-heading1">Lorem, ipsum.</h2>
                <div className="about-text-heading2">Creative Thoughts Agency.</div>
                <div className="about-text-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis labore explicabo vel? Nam, quaerat eius.</div>
                <div className="about-text-boxes">
                    <div className="box">
                        <h1 className="about-text-box-heading">10K+</h1>
                        <p className="about-text-box-para">Years of experience</p>
                    </div>
                    <div className="box">
                        <h1 className="about-text-box-heading">10K+</h1>
                        <p className="about-text-box-para">Years of experience</p>
                    </div>
                    <div className="box">
                        <h1 className="about-text-box-heading">10K+</h1>
                        <p className="about-text-box-para">Years of experience</p>
                    </div>
                </div>
            </div>
            <div className="about-img">
                <Image src="/about.png" width={500} height={500} />
            </div>
        </div>
    );
}

export default About;