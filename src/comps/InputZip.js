import React, { useState } from "react";

const InputZip = () => {

    const [zip, setZip] = useState(null);

    return (
        <div className="input-zip-container">
            <p>Input Zip Code:</p>
            <form>
                <label htmlFor="zipcode"></label>
                <input type="text" /> 
            </form>
        </div>
    );

}

export default InputZip;