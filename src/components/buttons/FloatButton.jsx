import React, {useState, useEffect, useRef} from 'react'

export const FloatButton = () => {
    const [position, setPosition] = useState(150);    
    const floaterButton = useRef()

    const moveButton = ()=>{
        const winScrollTop = document.documentElement.scrollTop
        const winHeight = window.innerHeight;
        const objectHeight = floaterButton.current.offsetHeight
        const fromBottom = 200;
        setPosition(winScrollTop + winHeight - objectHeight - fromBottom)

        floaterButton.current.style.top=position
    }

    const removeButton = ()=>{
        floaterButton.current.parentNode.removeChild(floaterButton.current);
    }

    useEffect(() => {
        window.onscroll = () =>{
            moveButton()
        }
    }, [position])

    return (
        <div style={{"position": "absolute","top": position}} ref={floaterButton} className="float-button">
            <a onClick={()=>removeButton()}>
                <img className="float-button__close" src="https://specials.mediamarkt.es/assets-react/total-energies/ex.png" alt="cerrar"/>
            </a>
            <a href="#campaign-form">
                <img src="https://specials.mediamarkt.es/assets-react/total-energies/floating.png" alt="contrata ya"/>
            </a>
        </div>
    )
}
