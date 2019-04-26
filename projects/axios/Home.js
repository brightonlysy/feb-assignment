import React from 'react';

function Home(props) {
    const styles = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridTemplateRows: "200px"
    }
    return (
        <div style={styles}>
            <h1>you are home!!</h1>
        </div>
    );
}

export default Home