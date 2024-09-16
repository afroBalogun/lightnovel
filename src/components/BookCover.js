import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {useRef} from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function BookCover(props){
    gsap.registerPlugin(useGSAP)

    const bookCover = useRef()

    useGSAP(
        () => {

            gsap.from('.book-cover',{ 
                y : -600,
                duration : .5,
                ease: 'back',
                delay: 1,
        },
    );
    gsap.from('.book-cover img',{ 
        opacity : 0,
        duration : .5,
        ease: 'ease',
        delay : 1.5,
},
);
        },{ bookCover }


    );
    return(
        <div className="book-cover"
                   style={{backgroundColor: props.novel.colors.bookCover}}
                   ref={bookCover}
                >
                    <img src= {`images/${props.novel.bookCover}`} alt="" className="book-img" />

        </div>
    )
}