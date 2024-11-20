import "../style/hero.css";
import Image from "next/image";
function Hero() {
    return(
        <div className="header-container">
            <div className="header-boxes-container">
                {/* left */}
                <div>
                <Image src={"/logo.jpg"}
                width={200}
                height={200}
                className="header-image"
                alt="profile"/>
                </div>
                {/* right */}
                <div className="hero-right-div">
                    <h1 className="title-hero">Im Saba Shahid 
                    Front-end Developer </h1>
                    <p className="des-hero">I am a student at GIAIC pursuing a course in Artificial intelligence web 3.0 & Mataverse Passionate about technology and constantly learning new skills to stay up-to-date with the latest innovations.</p>
                    <button className="hero-button">HIRE ME</button>
                </div>
            </div>
        </div>
    )
}
export default Hero