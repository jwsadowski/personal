import React from "react";

const projectCards = {width: "500px"}

function Projects() {
    return (
        <>
            <div className="card">
                <img 
                src="https://raw.githubusercontent.com/megsra17/movie-soundtrack-finder/main/Screen%20Shot%202022-10-18%20at%205.46.00%20PM.png" 
                className="card-img-top" 
                alt=" " 
                style={projectCards}/>
                    <div className="card-body">
                        <h5 className="card-title">Movie Soundtrack Finder</h5>
                        <p className="card-text">An app that lets you instantly find a Movie or TV show's soundtrack</p>
                        <a href="https://github.com/megsra17/movie-soundtrack-finder/blob/main/index.html" className="btn btn-primary">Pull up the app</a>
                    </div>
            </div>

            <div className="card">
                <img 
                src="https://raw.githubusercontent.com/ddwk21/we-do/main/public/assets/homepage.JPG" 
                className="card-img-top" 
                alt=" "
                style={projectCards} />
                    <div className="card-body">
                        <h5 className="card-title">We Do</h5>
                        <p className="card-text">An app that lets you find a partner to do a select activity with</p>
                        <a href="https://we-do-application.herokuapp.com/" className="btn btn-primary">Pull up the app</a>
                    </div>
            </div>

            <div className="card">
                <img 
                src="https://user-images.githubusercontent.com/111463494/214950568-620ec783-cf76-449d-827a-f55f72ab9bef.png" 
                className="card-img-top" 
                alt=" "
                style={projectCards} />
                    <div className="card-body">
                        <h5 className="card-title">Text Editor</h5>
                        <p className="card-text">A text editor app</p>
                        <a href="https://calm-brook-66511.herokuapp.com/" className="btn btn-primary">Pull up the app</a>
                    </div>
            </div>

        </>
    );
} 


export default Projects;




