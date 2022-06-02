import Video from "../../assets/video/ferrari.mp4";
import './header.css';
function Header(){
    return(
        <header className="header">
            <video className='videoTag' autoPlay loop muted>
                <source src={Video} type='video/mp4' className="videoTag" />
            </video> 
        </header>
    )
}

export default Header;