import React, { useState } from "react";
import { Link } from "react-router-dom";

const InputZip = () => {

    const [zip, setZip] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        <Link to="/results">Results</Link>
    }

    return (
        <div className="input-zip-container">
            <h1>Local Weather Forecast</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="zipcode">Zip Code: </label>
                <input 
                    type="text" 
                    required
                    value={zip} 
                    onChange={(e) => setZip(e.target.value)}
                /> 
                <button type="submit">Submit</button>
            </form>
        </div>
    );

}

export default InputZip;