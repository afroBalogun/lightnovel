export default function MyReview(props){
    return(
        <div className="my-review">
            <img src="images/notePage.jpeg" alt="" />
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