import React from "react";
import "./ThumbnailImage.css";

function ThumbnailImage(props) {
    function setDisplayImage(){
        props.setDisplayImageUrl(props.imageUrl);
    }
    return <img
        src = {props.imageUrl}
        alt = "Thumbnail"
        className="thumbnail-image"
        onClick = {setDisplayImage}
    />
}

export { ThumbnailImage };