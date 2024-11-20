import "../style/services.css";
import { FaLaptopCode } from "react-icons/fa";
import { TiMessageTyping } from "react-icons/ti";
import { CgWebsite } from "react-icons/cg";
import { SiReactiveresume } from "react-icons/si";
import { TbBrandSentry } from "react-icons/tb";

function Services() {
    return (
        <main className="main">
            <section className="services-container">
                {/* Header Section */}
                <header className="top-div-services">
                    <h2 className="title-services">My Services</h2>
                    <p className="description-services">
                        We offer professional services, including multi-page website development, resume and CV creation, web development, accurate data entry, and fast typing work. 
                        With a focus on quality, efficiency, and client satisfaction, we deliver tailored solutions to meet your needs. Contact us today to get started!
                    </p>
                </header>

                {/* Services Section */}
                <div className="boxes-container">
                    <article className="box">
                        <FaLaptopCode className='services-icon' />
                        <h3>Web Development</h3>
                        <p>Blog, E-Commerce</p>
                    </article>
                    <article className="box">
                        <TiMessageTyping className="services-icon" />
                        <h3>Fast Typing Work</h3>
                        <p>Data, Typing</p>
                    </article>
                    <article className="box">
                        <CgWebsite className="services-icon" />
                        <h3>Website</h3>
                        <p>Multi-Page Website Creation</p>
                    </article>
                    <article className="box">
                        <SiReactiveresume className="services-icon" />
                        <h3>Resume & CV</h3>
                        <p>Professional Resume & CV Creation</p>
                    </article>
                    <article className="box">
                        <TbBrandSentry className="services-icon" />
                        <h3>Data Entry</h3>
                        <p>Professional Data Entry Services</p>
                    </article>
                </div>
            </section>
        </main>
    );
}

export default Services;  
