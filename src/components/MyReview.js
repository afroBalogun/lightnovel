import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {useRef} from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function MyReview(props){

    gsap.registerPlugin(useGSAP, ScrollTrigger)

    const myReview = useRef()

    useGSAP( () => {
        gsap.timeline()
        gsap.from( '.my-review, img, h2, p', {
            scrollTrigger: {
                trigger: '.my-review',
                start: '70% bottom',
                markers: false
            },
            duration: .5,
            x: 800
        })

        gsap.from( '.gar', {
            opacity: 0,
            duration: .5,
            delay: 1,
        })
    }, { scope : myReview}
    );  

    return(
        <div className="my-review" ref={myReview}>

            <img src="images/clear-tape.png" alt="" className="clear-tape" />
            <img src="images/notePage.jpeg" alt="" className='review-paper'/>
            <img src="images/gar.png" alt="" className="gar" />

            <h2
                style={{color: props.novel.colors.reviewText}}        
            >
                my review
            </h2>
            <p  
                style={{color: props.novel.colors.reviewText}}        
            >
                {props.novel.review}
                </p>
        </div>
    )
}