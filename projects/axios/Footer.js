import React from 'react';

function Footer() {
    const styles = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        bottom: 0,
        position: "fixed",
        border: "2px red solid",
        width: "100%"
    }
    return (
        <div style={styles}>
           <div>801.555.555</div>
           <div>Other stuff!</div>
           <div>Footery goodness</div> 
        </div>
    );
}

export default Footer;