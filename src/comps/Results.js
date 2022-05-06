import React from "react";


const Results = () => {

    let zipFromStorage = localStorage.getItem("zipcode");
    console.log(zipFromStorage);

    return (
        <div className="results-content">
            <p>Forecast:</p>
        </div>
    );
}

export default Results;