import {React, useState, useEffect} from "react";
import ReviewLinks from "./components/ReviewLinks";
import Review from "./Pages/Review";
import "./style.css";


export default function App(){

    const [clickedLink, setClickedLink] = useState(1);


    // console.log(clickedLink)

    return(
        <main>
            {
                clickedLink ?
                    <Review
                        clickedLink = {clickedLink}
                    />:
                    <ReviewLinks
                    setClickedLink = {setClickedLink}
                    />
            }
        </main>
    )
} 