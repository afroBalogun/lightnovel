export default function Tan(props){
    return(
        <div className="tan">

        <div className="title box">

            <div className="box-container"
                style={{border:  `2px solid ${props.novel.colors.boxContainer}`}}
            >
                <h3 className="text"
                    style={{textShadow : `5px 2px 2px ${props.novel.colors.title}`}}
                >
                    title
                </h3>
                
                <h2 className="text">{props.novel.title}</h2>
            </div>


            <div className="box-bg"
                style={{backgroundColor: props.novel.colors.title}}
            >

            </div>


        </div>

        <div className="author box">
            <div className="box-container"
                style={{border:  `2px solid ${props.novel.colors.boxContainer}`}}

            >
            <h3 className="text"
                    style={{textShadow : `5px 2px 2px ${props.novel.colors.author}`}}
                >
                    author
                </h3>                            
                <h2 className="text">{props.novel.author}</h2>
            </div>
            <div className="box-bg"
                style={{backgroundColor: props.novel.colors.author}}
            >
                
            </div>
        </div>

        <div className="notes box">
            <div className="box-container"
                style={{border:  `2px solid ${props.novel.colors.boxContainer}`}}

            >
                  <h3 className="text"
                    style={{textShadow : `5px 2px 2px ${props.novel.colors.notes}`}}
                >
                    notes
                </h3>
                <p className="text">{props.novel.synopsis}</p>
            </div>
            <div className="box-bg"
                style={{backgroundColor: props.novel.colors.notes}}
            >
                
            </div>
            
        </div>
    </div>

    )
}