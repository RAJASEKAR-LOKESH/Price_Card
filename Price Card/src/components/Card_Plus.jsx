import Plus_C from "./Plus_C"
import Plus_U from "./Plus_U"

function Card_Plus(props){
    
    return(
        <>
            <div className="parent">
                <div className="subparent">
                    <div className="child">
                        <p className="tag1">{props.category}</p>
                        <h1 className="tag2">${props.dollar}/month</h1>
                        <div className="con">
                        <hr />
                        <Plus_C/>
                        <Plus_U/>
                        
                        </div>
                        <button className="btn">BUTTON</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card_Plus