import React from "react";


const Results = () => {

    function apiFetch() {
        let serverURL;
        fetch("https://ericra-weather.netlify.app/.netlify/functions/api")
        .then(res => res.json())
        .then(json => {
            serverURL = json.api;
        })
        return(serverURL);
    }

    const weatherKey = apiFetch();
    console.log(weatherKey)

    let zipFromStorage = localStorage.getItem("zipcode");

    return (
        <div className="results-content">
            <h1>Forecast for {zipFromStorage} :</h1>
        </div>
    );
}

export default Results;