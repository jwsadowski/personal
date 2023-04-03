import React from "react";

const projectCards = {width: "500px"}

function Projects() {
    return (
        <>
            <div className="home-title">
                <p className="home-title-name">JON SADOWSKI</p>
            </div>
            <div className="card-deck">
                <div className="card">
                    <img className="card-img-top" src="https://raw.githubusercontent.com/megsra17/movie-soundtrack-finder/main/Screen%20Shot%202022-10-18%20at%205.46.00%20PM.png" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Movie Soundtrack Finder</h5>
                        <p className="card-text">An app that lets you instantly find a movie or TV show's soundtrack including Spotify user-created playlists.</p>
                        <a href="https://github.com/megsra17/movie-soundtrack-finder/blob/main/index.html" className="btn-btn-primary">Click here to view</a>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="https://raw.githubusercontent.com/ddwk21/we-do/main/public/assets/homepage.JPG" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">We Do</h5>
                        <p className="card-text">An app that lets you find a partner to do an activity with.</p>
                        <a href="https://we-do-application.herokuapp.com/" className="btn-btn-primary">Click here to view</a>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="https://user-images.githubusercontent.com/111473151/220814116-9a002ecd-1d6b-4ac9-b2da-6491e7d43d18.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Shoe-In</h5>
                        <p className="card-text">A shoe-based Ecommerce marketplace</p>
                        <a className="btn-btn-primary" href="https://shoe-in-app.heroku.com/" role="button">click here to view</a>
                    </div>
                </div>
            </div>

        </>
    );
} 


export default Projects;




