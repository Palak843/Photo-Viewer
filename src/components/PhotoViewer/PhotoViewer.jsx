import { useState } from "react";
import "./PhotoViewer.css";
import { ThumbnailList } from "../ThumbnailList/ThumbnailList";

function PhotoViewer() {
    const [displayImageUrl, setDisplayImageUrl] = useState("https://picsum.photos/id/600/1600/900.jpg");
    return <div>
    <h1>Phot Viewer</h1>
    <img
        src={displayImageUrl}
        alt= "Main"
        className="main-photo" />
    <h2>Photos</h2>
    <ThumbnailList setDisplayImageUrl = {setDisplayImageUrl}/>
    </div>
}

export { PhotoViewer };