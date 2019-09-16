import React from 'react';

function H100(props) {
    if (props.showImage == false) { 
        return (<span>Image of h100: </span>)
    }
    return (
        <img src={require("./h100.jpeg")} />
    )
}

export default H100;