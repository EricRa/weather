import React from "react";


const Results = () => {

    /*function apiFetch() {
        let serverURL;
        fetch("./netlify/functions/api")
        .then(response => response.json())
        .then(json => {
            serverURL = json.api;
        })
        console.log(serverURL)
        return(serverURL);
    }*/

    const weatherKey = process.env.OPENWEATHER_API;
    console.log(weatherKey);

    //const weatherKey = apiFetch();
    //console.log(weatherKey)

    let zipFromStorage = localStorage.getItem("zipcode");

    return (
        <div className="results-content">
            <h1>Forecast for {zipFromStorage} :</h1>
        </div>
    );
}

export default Results;