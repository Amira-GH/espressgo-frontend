import React from 'react';
import './ImageWithText.css';

function ImageWithText({imageUrl, imageAlt, text, style}) {
    return (
        <div className='image-container'>
            <img src={imageUrl} alt={imageAlt} className='image' style={style}/>
            <p className='image-text'>{text}</p>
        </div>
    );
}

export default ImageWithText;