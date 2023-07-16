// npm install react-slideshow-image in order for this code to code   
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../SlideShow/SlideShow.css";
import slide1 from "../../Images/anime.webp";
import slide2 from "../../Images/beats.webp";
import slide3 from "../../Images/pre.webp";
import slide4 from "../../Images/nike.webp";

const SlideShowImg = [
    slide1,
    slide2,
    slide3,
    slide4,
];
const SlideShow = () => {
    return(
        <div className="slideShow">
            <Slide>
                {/* Map is being use to return object I (index) Value from Array SlideShowImg */}
                {SlideShowImg.map((SlideShowImg, i) => (
                    <div  className="slide" key={i}>
                        <div style={{backgroundImage: `url(${SlideShowImg[i]})`}}/>
                    </div>
                ))}
            </Slide>
        </div>
    );
};
export default SlideShow;
