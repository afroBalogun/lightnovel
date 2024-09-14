export default function Gifts(props){
    return(
        <div className="gifts">
                    <h2>gifts that remind me of the book</h2>


                    <div className="first gift">
                        <div className="gift-container">
                            <img src={`images/${props.novel.giftsThatRemindMe[0]}`} alt="" />
                        </div>
                        <div className="gift-bg-hue"
                            style={{backgroundColor: props.novel.colors.first}}
                        >

                        </div>
                    </div>
                       



                    <div className="second gift">
                        <div className="gift-container">
                            <img src={`images/${props.novel.giftsThatRemindMe[1]}`} alt="" />
                        </div>

                        <div className="gift-bg-hue"
                            style={{backgroundColor: props.novel.colors.second}}
                            >

                        </div>
                    </div>
                        


                    <div className="third gift"
                    >
                         <div className="gift-container">
                         <img src={`images/${props.novel.giftsThatRemindMe[2]}`} alt="" />

                        </div>
                        <div className="gift-bg-hue"
                            style={{backgroundColor: props.novel.colors.third}}
                            >
                        
                        </div>
                    </div>
                </div>
    )
}