import "../style/contact.css";
function Contact (){
       return(
        <main className="contact-main">
            <div className="form-container">
                <h1 className="contact-title">Contact us</h1>
                <form action="" className="form">
                    <input type="text" placeholder="Enter Your Name"/>
                    <input type="email" placeholder="Enter Your Email"/>
                    <input className="msg" type="text" placeholder="your message"/>
                </form>
                <button className="button-submit">Submit</button>
            </div>
        </main>
       )
}
export default Contact