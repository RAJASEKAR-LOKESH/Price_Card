import Content from "./Content"
import U_content from "./U_content"
function Card(props){
    
    return(
        <>
            <div className="parent">
                <div className="subparent">
                    <div className="child">
                        <p className="tag1">{props.category}</p>
                        <h1 className="tag2">${props.dollar}/month</h1>
                        <div className="con">
                        <hr />
                        <Content/>
                        <U_content/>
                        
                        </div>
                        <button className="btn">BUTTON</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card