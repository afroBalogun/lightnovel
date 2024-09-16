
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {useRef} from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function FavouriteQuotes(props){

    gsap.registerPlugin(useGSAP, ScrollTrigger)

    const favouriteQuotes = useRef()

    useGSAP( () => {
        gsap.from( '.fav-quote',{
            scrollTrigger:{
                trigger: '.fav-quote',
                start: '-50% center',
                markers: false
            },
            opacity: 0,
            duration: .5,
        })
    }, {favouriteQuotes})

    return(
        <div className="fav-quote"
                    style = {{backgroundColor : props.novel.colors.favQuote,
                        boxShadow : `2px 2px 2px ${props.novel.colors.favQuoteH}`}}
                        ref={favouriteQuotes}
                >
                    <h2
                    style = {{backgroundColor : props.novel.colors.favQuoteH}}
                    >
                        favourite quote
                    </h2>
                    <div className="bar"
                        style={{backgroundColor : props.novel.colors.favQuoteH}}
                    ></div>
                    <p
                        style={{color : props.novel.colors.quoteText}}

                    >
                        {props.novel.favoriteQuotes}
                        </p>
                </div>
    )
}