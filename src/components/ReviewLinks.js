import {React, useState} from "react"
import lightNovels from "../lightnovels"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {useRef} from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";



export default function ReviewLinks(props){

    gsap.registerPlugin(useGSAP, ScrollTrigger)

    const links = useRef()

    const image = useRef()

    useGSAP(
        () => {
            // gsap code here...
            gsap.timeline()
            gsap.from('img, p',{ 
                
                // y: 600 , 
                opacity: 0,
                duration : .5,  
                ease: "power1.in",
            } ); // <-- automatically reverted

            gsap.from('.novel-review',{ 
                opacity : 0,
                duration : .5,
                ease: 'back',
                
            
        }, );
        

        
        },  { }

    );

    const novelReview = lightNovels.map( lightNovel => {
        return(
            <div key={lightNovel.id}>
                <a href={`#review`}
                    onClick={() => handleClick(lightNovel.id)}
                >
                    <h4>{lightNovel.title}</h4>
                </a>
            </div>
        )
    })      
      
        // Event handler for clicks
        const handleClick = (id) => {
          console.log(`Link clicked: ${id}`);
          props.setClickedLink(id); 
          // Update state with the clicked link's id
        };
    

    return (
        <div className="links" ref={links}>
            <div className="novel-review">
                {novelReview}
            </div>

            <div className="img-container" ref={image}>
                <img src="images/jaggedpaper.png" alt="" />
                <p>
                    Hi, welcome to my Lightnovel review website. 
                    Click on a novel to get started, and have fun.
                </p>
            </div>
        </div>
    )
}