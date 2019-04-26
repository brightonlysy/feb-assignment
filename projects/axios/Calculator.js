import React from 'react';

function Calculator(props) {
    const styles = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        border: "2px solid blue"
    }
    return (
        <div style={styles}>
            first number: <input type="number"/>
            second number: <input type="number"/>
            <button>calculate</button>
        </div>
    );
}

export default Calculator