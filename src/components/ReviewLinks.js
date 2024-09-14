import {React, useState} from "react"
import lightNovels from "../lightnovels"


export default function ReviewLinks(props){

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
        <div className="links">
            <div className="novel-review">
                {novelReview}
            </div>
            <div className="img-container">
                <img src="images/jaggedpaper.png" alt="" />
                <p>
                    Hi, welcome to my Lightnovel review website. 
                    Click on a novel to get started, and have fun.
                </p>
            </div>
        </div>
    )
}