import React from "react";


const Results = () => {

    let zipFromStorage = localStorage.getItem("zipcode");
    console.log(zipFromStorage);

    return (
        <div className="results-content">
            <h1>Forecast for {localStorage.getItem("zipcode")} :</h1>
        </div>
    );
}

export default Results;