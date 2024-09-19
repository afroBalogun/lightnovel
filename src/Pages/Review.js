import React from "react"
import lightnovels from "../lightnovels"
import BookCover from "../components/BookCover";
import FavouriteQuotes from "../components/FavouriteQuotes";
import Tan from "../components/Tan";
import Fortune from "../components/Fortune";
import Gifts from "../components/Gifts";
import MyReview from "../components/MyReview";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {useRef} from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";



export default function Review(props){

    gsap.registerPlugin(useGSAP, ScrollTrigger)

    useGSAP( () =>{
        // const tl = gsap.timeline({defaults: {ease: "power2.inOut"}})
        gsap.timeline()
        gsap.from( '.c1',{
            duration: .5,
            xPercent: 100,
            opacity: 0,
        }
        )
        gsap.from( '.c2',{
            duration: .3,
            delay: .2,
            xPercent: 100,
            opacity: 0,
        }

        )

        gsap.from( '.rec-ting', {
            duration: .5,
            delay : .4,
            opacity: 0,
            xPercent: -100,
        })

        gsap.from( '.leaf', {
            duration: .5,
            opacity: 0,
            delay: 1.5
        })

        gsap.from( '.bc1',{
            scrollTrigger: {
                trigger: '.bc1',
                start: '-50% bottom',
                markers: false
            },
            bottom: -400,
            right: -800,
            opacity: 0,
            duration: .5,
        })

        gsap.from( '.bc2',{
            scrollTrigger: {
                trigger: '.bc2',
                start: '30% bottom',
                markers: false
            },
            bottom: -200,
            left: -300,
            opacity: 0,
            duration: .5,
        })

        gsap.from( '.fa-house', {
            duration: 1,
            opacity: 0
        })
    })

    // console.log(props.clickedLink)

    function checkId(lightNovel){
        return lightnovels.find((lightNovel) => lightNovel.id === props.clickedLink);
    }

    function home(){
        props.setClickedLink(null)
    }


    const novel = checkId()


    return(

        <div className="container">
            <div className="review-container"
                style={{backgroundColor: novel.colors.reviewContainer}}

            >                                               
                <BookCover 
                    novel = {novel}
                />

                <Tan 
                    novel = {novel}
                />  
                
                <Fortune
                    novel = {novel}
                />

                <FavouriteQuotes
                    novel ={novel}
                />

                <Gifts
                    novel ={novel}
                />

                <MyReview
                    novel ={novel}
                />

            </div>


            <div className="circles">
                <div className="c1"
                    style={{backgroundColor: novel.colors.circleBefore}}
                >

                </div>
                <div className="c2"
                    style={{backgroundColor: novel.colors.circleAfter}}
                >

                </div>
            </div>
            <div className="bottom-circles">
                <div className="bc1"
                    style={{backgroundColor: novel.colors.circleBefore}}
                >

                </div>
                <div className="bc2"
                    style={{backgroundColor: novel.colors.circleAfter}}
                >

                </div>
            </div>
            <div className="rec-ting"
               style={{backgroundColor: novel.colors.recTing}}
            >

            </div>

            <div className="vintage-images">
                <img src="images/john's page.png" alt="" className="vintage-paper" />
            </div>
            <img src="images/maple.png" alt="" className="leaf" />

            <i class="fa-solid fa-house"
               style={{backgroundColor: novel.colors.bookCover}}
               onClick={home}
            ></i>

        </div>
        
    )
}