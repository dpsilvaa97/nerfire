import React from 'react';
import './Background.css';
import { Carousel } from 'react-bootstrap';
import Theme from '../../../assets/wallpaper/wallpaper1.jpg';
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
                            <span className='text1'>{props.appLanguage.appLanguage.wallpaper.slide1.text1}</span>
                            <span className='text2' >{props.appLanguage.appLanguage.wallpaper.slide1.text2}</span>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='container-slides'>
                        <img src={Theme} className='background-slide' alt='kximg' />
                    </div>
                    <Carousel.Caption className='slide-text'>
                        <div>
                            <span className='text1'>{props.appLanguage.appLanguage.wallpaper.slide2.text1}</span>
                            <span className='text2' >{props.appLanguage.appLanguage.wallpaper.slide2.text2}</span>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='container-slides'>
                        <img src={Theme} className='background-slide' alt='kximg' />
                    </div>
                    <Carousel.Caption className='slide-text'>
                        <div>
                            <span className='text1' >{props.appLanguage.appLanguage.wallpaper.slide3.text1}</span>
                            <span className='text2' >{props.appLanguage.appLanguage.wallpaper.slide3.text2}(</span>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <img src={Clouds} className='container-clouds' alt='kximg' />
        </div>
    );


}


export default Background;
