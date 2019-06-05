import React from 'react';

const Form = (props) => {
    return (
        <form onSubmit={props.getWeather}>
            <input className="input1" type="text" name="city" placeholder="City..." />
            <input className="input2" type="text" name="country" placeholder="Country..." />
            <button className="btn">Get Weather</button>
        </form>
    );
}

export default Form;