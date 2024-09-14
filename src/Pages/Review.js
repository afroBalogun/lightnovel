import React from "react"
import lightnovels from "../lightnovels"
import BookCover from "../components/BookCover";
import FavouriteQuotes from "../components/FavouriteQuotes";
import Tan from "../components/Tan";
import Fortune from "../components/Fortune";
import Gifts from "../components/Gifts";
import MyReview from "../components/MyReview";

export default function Review(props){

    // console.log(props.clickedLink)

    function checkId(lightNovel){
        return lightnovels.find((lightNovel) => lightNovel.id === props.clickedLink);
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
                <img src="images/gar.png" alt="" className="gar" />
            </div>
            <img src="images/maple.png" alt="" className="leaf" />
            <img src="images/clear-tape.png" alt="" className="clear-tape" />
        </div>
        
    )
}