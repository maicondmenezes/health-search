import React from 'react';

const ImageCard = (props) => {
    return (
        <div class="card">
            <img class="card-img-top" src={props.imgSrc} alt="Card image cap" />
            <div class="card-block">
                <p class="card-text">{props.text}</p>
            </div>
        </div>
    );
};
export default ImageCard;