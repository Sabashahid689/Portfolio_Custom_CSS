import "../style/education.css";
function Education(){
    return(
        <main className="education-main">
            <div className="education-text">
                <h1>Education</h1>
                <p>Trusted by Professionals for Exceptional Quality and Service Our clients from various industries trust us 
                to deliver top-notach quality and results. Heres what they have to say about our work..</p>
            </div>
            <div className="box-container-education">
                <div>
                    <h1 className="college-name">college of karachi</h1>
                    <span>Student</span>
                </div>
                <div className="commerce">
                    <h1>First year in Commerce</h1>
                    <p>Im student in first year class commerce and beacuse I am currently doing course artificial intelligence and web 3.o mataverse governor initiative.</p>
                </div>
          </div>
          {/* box 2 */}
          <div className="box02-container-education">
            <div>
                <h1 className="Governor iT Initiative">Governor iT Initiative</h1>
                <span>Student</span>
                </div>
                <div className="Courses">
                    <h1>Certified Web 3.0 and mataverse</h1>
                    <p>All the Governor iT Initiative, students explore AI,Mataverse, and Blockchain tachnologies in an accessible manner. This free program is an excellent opportunity for those interested in these innovative fields.</p>
            </div>

          </div>
        </main>
    )
}
export default Education