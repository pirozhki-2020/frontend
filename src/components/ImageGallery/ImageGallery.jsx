import React from 'react';

import './ImageGallery.scss'

const ImageGallery = ({rounded = false, size = 500, children}) => {
    let images = [];
    {
        children.forEach((value) => {
            images.push(<img key={value} alt="value" className={rounded ? "image image_rounded" : "image"} height={size}
                             src={value}/>);
        })
    }
    return <div className="image-gallery">
        {images}
    </div>
};

export default ImageGallery;