export default function FavouriteQuotes(props){
    return(
        <div className="fav-quote"
                    style = {{backgroundColor : props.novel.colors.favQuote,
                        boxShadow : `2px 2px 2px ${props.novel.colors.favQuoteH}`}}
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