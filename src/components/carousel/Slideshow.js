import React, {useRef, useEffect, useCallback} from 'react';
import styled from 'styled-components';

const Slideshow = ({
    controls= true,
    autoplay=false,
    speed="700",
    interval="5000",
    textColor="#fff",
    bgTextColor="",
    data=data
}) => {

// const slides = data;
const slideshow = useRef(null);
const intervalSlideshow = useRef(null);

const next = useCallback(() => {
            // Check if the Slider has elements
            if(slideshow.current.children.length > 0) {
                // Get first element of the Slideshow
                const firstSlide = slideshow.current.children[0];
                // Set transition of slideshow
                slideshow.current.style.transition = `${speed}ms ease-out all`;
                // Get width of the each slide
                const sizeSlide = slideshow.current.children[0].offsetWidth;
                // Move the slideshow
                slideshow.current.style.transform = `translateX(-${sizeSlide}px)`;
    
                const finishedTransitions = () => {
                    // Restart the position of Slideshow
                    slideshow.current.style.transition = 'none';
                    slideshow.current.style.transform = `translateX(0)`;
                    // Get the first slide and send it to the end
                    slideshow.current.appendChild(firstSlide);
                    // Remove watch EvenetListener
                    slideshow.current.removeEventListener('transitionend', finishedTransitions);
                }
                // EventListener to watch when the transition was finished
                slideshow.current.addEventListener('transitionend', finishedTransitions);
            }
}, [speed]);

const before = () => {
    if(slideshow.current.children.length > 0) {
        // Get the last element of the Slider
        const lastSlide = slideshow.current.lastChild;
        // Move this element to the beginning
        slideshow.current.insertBefore(lastSlide, slideshow.current.firstChild);

        slideshow.current.style.transition = 'none';
        // Get width of the each slide
        const sizeSlide = slideshow.current.children[0].offsetWidth;
        // Move the slideshow
        slideshow.current.style.transform = `translateX(-${sizeSlide}px)`;
        setTimeout (()=> {
            // Set transition of slideshow
            slideshow.current.style.transition = `${speed}ms ease-out all`;
            slideshow.current.style.transform = `translateX(0)`;
        }, 30)
    }
}

useEffect(()=>{
    if(autoplay){
        intervalSlideshow.current = setInterval(()=>{
            next();
        }, interval);

        // Delete auto play slides when put mouse over
        slideshow.current.addEventListener('mouseenter', ()=>{
            clearInterval(intervalSlideshow.current);
        });

        // Active auto play when gout mouse outside of the slide
        slideshow.current.addEventListener('mouseleave', ()=>{
            intervalSlideshow.current = setInterval(()=>{
                next();
            }, interval);
        });    
    }
}, [autoplay, interval, next]);

return ( 
    <MainContainer>
        <ContainerSlideshow ref={slideshow}>
            {
                data.map((slides,i) => {
                    const {imgSlide, textSlide, altSlide, linkSlide, bgColorSlide} = slides;
                    return (
                        <Slide>
                            <a href={linkSlide}>
                                <img src={imgSlide} alt={altSlide}/>                
                            </a>
                            <TextoSlide bgColor={bgColorSlide} textColor={textColor}>
                                {textSlide}
                            </TextoSlide>
                        </Slide>
                    )
                })
            }
        </ContainerSlideshow>
        {controls && <Controls>
            <Arrows onClick={before}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
            </Arrows>
            <Arrows right onClick={next}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
            </Arrows>
        </Controls>}
    </MainContainer>
);
}


const MainContainer = styled.div`
    position: relative;
    max-width: 1407px;
    margin: 50px auto;
    overflow: hidden;
`;

const ContainerSlideshow = styled.div`
    display: flex;
    flex-wrap: no-wrap;
    padding: 0px 42px;
`; 

const Slide = styled.div`
    min-width: 20%;
    padding-right: 26px;
    padding-left: 26px;
    width:100%;
    margin: auto;
    transition: .3s ease all;
    z-index: 9;

    img {
        width: 100%;
        height: auto;
        vertical-align: middel;
    }
`;

const TextoSlide = styled.div`
`;
const Controls = styled.div`
    position: absolute;
    top: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
    pointer-events; none;
`;
const Arrows = styled.div`
    pointer-events: all;
    cursor: pointer;´
    outline: none;
    height: 100%;
    text-align: center;
    position: absolute;
    top: 36%;
    transition: .3s ease all;

    svg{
        margin: auto;
        pointer-events: all;
        background: #000;
        padding: 10px;
        cursor: pointer;
        fill: #fff;
        @media screen and (max-width: 700px){
            width:24px;
            height: 24px;
            padding: 5px;
        }
    }

    ${props => props.right ? 'right: 14px' : 'left: 14px'}
`;
export default Slideshow;
