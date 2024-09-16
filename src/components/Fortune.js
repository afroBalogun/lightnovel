import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {useRef} from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function Fortune(props){

    gsap.registerPlugin(useGSAP, ScrollTrigger)

    const fortune = useRef()

    useGSAP( () => {
        gsap.from( '.fortune',{
            scrollTrigger:{
                trigger: '.fortune',
                start: '-94% center',
                markers: false
            },
            opacity: 0,
            duration: .5,
        })
    }, {fortune})

    return(
        <div className="fortune"
                    style = {{
                            backgroundColor : props.novel.colors.fortune,
                          
                    }}
                    ref={fortune}
                >
                    <p
                        style={{color : props.novel.colors.quoteText}}
                    >
                        you are absolutely capable of creating the life you can't stop
                        thinking about, stop living in your head, it's time to make 
                        your dream happen.
                    </p>
                </div>
    )
}