import React from "react"
import lightnovels from "../lightnovels"

export default function Review(props){

    // console.log(props.clickedLink)

    function checkId(lightNovel){
        return lightnovels.find((lightNovel) => lightNovel.id === props.clickedLink);
    }



    const novel = checkId()
    const colorBox = {
        backgroundColor : novel.colors.favQuote,
        boxShadow : `2px 2px 2px ${novel.colors.favQuoteH}`
}



      

    return(

        <div className="container">
            <div className="review-container"
                style={{backgroundColor: novel.colors.reviewContainer}}

            >                                               
                <div className="book-cover"
                   style={{backgroundColor: novel.colors.bookCover}}
                >
                    <img src= {`images/${novel.bookCover}`} alt="" className="book-img" />

                </div>

                <div className="tan">
                    <div className="title box">
                        <div className="box-container"
                            style={{border:  `2px solid ${novel.colors.boxContainer}`}}
                        >
                            <h3 className="text"
                                style={{textShadow : `5px 2px 2px ${novel.colors.title}`}}
                            >
                                title
                            </h3>
                            
                            <h2 className="text">{novel.title}</h2>
                        </div>
                        <div className="box-bg"
                            style={{backgroundColor: novel.colors.title}}
                        >

                        </div>
                    </div>

                    <div className="author box">
                        <div className="box-container"
                            style={{border:  `2px solid ${novel.colors.boxContainer}`}}

                        >
                        <h3 className="text"
                                style={{textShadow : `5px 2px 2px ${novel.colors.author}`}}
                            >
                                author
                            </h3>                            
                            <h2 className="text">{novel.author}</h2>
                        </div>
                        <div className="box-bg"
                            style={{backgroundColor: novel.colors.author}}
                        >
                            
                        </div>
                    </div>

                    <div className="notes box">
                        <div className="box-container"
                            style={{border:  `2px solid ${novel.colors.boxContainer}`}}

                        >
                              <h3 className="text"
                                style={{textShadow : `5px 2px 2px ${novel.colors.notes}`}}
                            >
                                notes
                            </h3>
                            <p className="text">{novel.synopsis}</p>
                        </div>
                        <div className="box-bg"
                            style={{backgroundColor: novel.colors.notes}}
                        >
                            
                        </div>
                        
                    </div>
                </div>

                <div className="fortune"
                    style = {{
                            backgroundColor : novel.colors.fortune,
                          
                    }}
                >
                    <p
                        style={{color : novel.colors.quoteText}}
                    >
                        you are absolutely capable of creating the life you can't stop
                        thinking about, stop living in your head, it's time to make 
                        your dream happen.
                    </p>
                </div>

                <div className="fav-quote"
                    style = {colorBox}
                >
                    <h2
                    style = {{backgroundColor : novel.colors.favQuoteH}}
                    >
                        favourite quote
                    </h2>
                    <div className="bar"
                        style={{backgroundColor : novel.colors.favQuoteH}}
                    ></div>
                    <p
                        style={{color : novel.colors.quoteText}}

                    >
                        {novel.favoriteQuotes}
                        </p>
                </div>

                <div className="gifts">
                    <h2>gifts that remind me of the book</h2>


                    <div className="first gift">
                        <div className="gift-container">
                            <img src={`images/${novel.giftsThatRemindMe[0]}`} alt="" />
                        </div>
                        <div className="gift-bg-hue"
                            style={{backgroundColor: novel.colors.first}}
                        >

                        </div>
                    </div>
                       



                    <div className="second gift">
                        <div className="gift-container">
                            <img src={`images/${novel.giftsThatRemindMe[1]}`} alt="" />
                        </div>

                        <div className="gift-bg-hue"
                            style={{backgroundColor: novel.colors.second}}
                            >

                        </div>
                    </div>
                        


                    <div className="third gift"
                    >
                         <div className="gift-container">
                         <img src={`images/${novel.giftsThatRemindMe[2]}`} alt="" />

                        </div>
                        <div className="gift-bg-hue"
                            style={{backgroundColor: novel.colors.third}}
                            >
                        
                        </div>
                    </div>
                </div>

                <div className="my-review">
                    <img src="images/notePage.jpeg" alt="" />
                    <h2
                        style={{color: novel.colors.reviewText}}        
                    >
                        my review
                    </h2>
                    <p  
                        style={{color: novel.colors.reviewText}}        
                    >
                        {novel.review}
                        </p>
                </div>

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