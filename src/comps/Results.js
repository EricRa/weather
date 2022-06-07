import React from "react";


const Results = () => {

    function apiFetch() {

        let serverURL;

        fetch(".netlify/functions/api")
        .then(res => res.json())
        .then(json => {
            serverURL = json.api;
        })

        console.log(serverURL);
        return serverURL;
    }

    const key = apiFetch();

    let zipFromStorage = localStorage.getItem("zipcode");

    return (
        <div className="results-content">
            <h1>Forecast for {zipFromStorage} :</h1>
        </div>
    );
}

export default Results;