import React from 'react';

function Detail( {location, history} ) {
    if (location.state === undefined) {
        history.push("/");
    }
    console.log(location);
    return (
        location.state && <span>{location.state.title}</span>
    );
}

export default Detail;