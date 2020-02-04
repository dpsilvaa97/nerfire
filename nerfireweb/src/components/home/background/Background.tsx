import React from 'react';
import './Background.css';
import { Carousel } from 'react-bootstrap';
import Theme from '../../../assets/images/wallpaper.jpg';
import Clouds from '../../../assets/images/clouds.png';
import { LangType } from '../../../services/languages/LangType';

interface ISlides {
    indicator: boolean;
    interval: number;
    controls: boolean;
    fade: boolean;
    loop: boolean;
}

interface IProps {
    appLanguage: LangType;

}

export const Background: React.FC<IProps> = (props) => {


    const slides: ISlides = {
        indicator: true,
        interval: 3500,
        controls: false,
        fade: true,
        loop: true
    };
    /*
        const handleArrowClick = () => {
            window.document.body.scrollTo({
                top: 900,
                behavior: 'smooth'
            })
    
        }
    
        
                <div className="container-arrow">
                    <img className="arrow-img" src={Arrow} onClick={handleArrowClick} alt='kximg'></img>
                </div>
    */

    return (
        <div className='wallpaper-wrapper'>
            <Carousel prevLabel={''} indicators={slides.indicator} interval={slides.interval}
                controls={slides.controls} fade={slides.fade} wrap={slides.loop} className="debugme">
                <Carousel.Item>
                    <div className='container-slides'>
                        <img src={Theme} className='background-slide' alt='kximg' />
                    </div>
                    <Carousel.Caption className='slide-text'>
                        <div>
                            <span className='text1'>Very cool Drones</span>
                            <span className='text2' >power asf</span>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='container-slides'>
                        <img src={Theme} className='background-slide' alt='kximg' />
                    </div>
                    <Carousel.Caption className='slide-text'>
                        <div>
                            <span className='text1'> We got bases too xD</span>
                            <span className='text2' >triangle biatch</span>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='container-slides'>
                        <img src={Theme} className='background-slide' alt='kximg' />
                    </div>
                    <Carousel.Caption className='slide-text'>
                        <div>
                            <span className='text1' >We'r broke after production</span>
                            <span className='text2' >Please buy ;(</span>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <img src={Clouds} className='container-clouds' alt='kximg' />
        </div>
    );


}


export default Background;
