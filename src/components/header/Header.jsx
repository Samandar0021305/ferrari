import { useRef, useState } from "react";

import Video from "../../assets/video/ferrari.mp4";
import FerrariVideo from "../../assets/video/video.mp4";

import './header.css';
function Header(){
    const [videoX,setVideo] = useState(FerrariVideo)
    const videoTitle = useRef();

    const handl = ()=>{
            if(videoX == Video){
                setVideo(FerrariVideo)
                videoTitle.current.src = videoX
            }else{
                setVideo(Video)
                videoTitle.current.src = videoX

            }
    };

    return(
        <header className="header">
            <video ref={videoTitle} onClick={handl} className='videoTag' autoPlay loop muted >
                <source src={Video}  type='video/mp4' className="videoTag" />
            </video> 
        </header>
    )
}

export default Header;