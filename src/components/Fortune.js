export default function Fortune(props){
    return(
        <div className="fortune"
                    style = {{
                            backgroundColor : props.novel.colors.fortune,
                          
                    }}
                >
                    <p
                        style={{color : props.novel.colors.quoteText}}
                    >
                        you are absolutely capable of creating the life you can't stop
                        thinking about, stop living in your head, it's time to make 
                        your dream happen.
                    </p>
                </div>
    )
}