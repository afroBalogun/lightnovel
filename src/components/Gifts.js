import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {useRef} from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function Gifts(props){

    gsap.registerPlugin(useGSAP, ScrollTrigger)

    const gifts = useRef()

    useGSAP( () => {
        gsap.from( '.gifts, .gifts h2, .gift', {
            scrollTrigger: {
                trigger: '.gifts',
                start: '70% bottom',
                markers: false
            },
            duration: .5,
            x: -500
        })
    }, { scope : gifts}
    );


    return(
            <div className="gifts" ref={gifts}>
                <h2>gifts that remind me of the book</h2>


                <div className="first gift">
                    <div className="gift-container">
                        <img src={`images/${props.novel.giftsThatRemindMe[0]}`} alt="" />
                    </div>
                    <div className="gift-bg-hue"
                        style={{backgroundColor: props.novel.colors.first}}
                    >
                    </div>
                </div>
                   
                <div className="second gift">
                    <div className="gift-container">
                        <img src={`images/${props.novel.giftsThatRemindMe[1]}`} alt="" />
                    </div>
                    <div className="gift-bg-hue"
                        style={{backgroundColor: props.novel.colors.second}}
                        >
                    </div>
                </div>
                    
                <div className="third gift"
                >
                     <div className="gift-container">
                     <img src={`images/${props.novel.giftsThatRemindMe[2]}`} alt="" />
                    </div>
                    <div className="gift-bg-hue"
                        style={{backgroundColor: props.novel.colors.third}}
                        >
                    
                    </div>
                </div>
            </div>
    )
}