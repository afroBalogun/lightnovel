


export default function BookCover(props){
    return(
        <div className="book-cover"
                   style={{backgroundColor: props.novel.colors.bookCover}}
                >
                    <img src= {`images/${props.novel.bookCover}`} alt="" className="book-img" />

        </div>
    )
}