import React from 'react';

const Weather = (props) =>  {
    return (
        <div className="des">
            { <p className="here">Weather Displayed Here</p>}
            {<br></br>}
            { props.city && props.country && <p>Location: { props.city }, { props.country }</p> }
            { props.temperature && <p>Temperature: { props.temperature }</p> }
            { props.humidity && <p>Humidity: { props.humidity }</p> }
            { props.description && <p>Conditions: { props.description }</p> }
            { props.error && <p>{ props.error }</p>}
        </div>
    );
}

export default Weather;