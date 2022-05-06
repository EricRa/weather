import React from "react";


const About = () => {

    return (
        <div className="about-content">
            <h1>About this page:</h1>
            <p>This site uses the <a href="https://home.openweathermap.org/" target="_blank" rel="noopener noreferrer">Open Weather Map</a> API to get a local forecast for any US zip code.  Your zip is the only information collected, and it is sent directly to Open Weather Map without being saved on this server.  The site does not generate income and does not contain ads or trackers of any kind.</p>
            <p>The site was built with <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a> and is hosted by <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">Netlify</a>.</p>
        </div>
    );
}

export default About;