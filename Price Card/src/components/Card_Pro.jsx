import Pro from "./Pro"

function Card_Pro(props){
    
    return(
        <>
            <div className="parent">
                <div className="subparent">
                    <div className="child">
                        <p className="tag1">{props.category}</p>
                        <h1 className="tag2">${props.dollar}/month</h1>
                        <div className="con">
                        <hr />
                        <Pro/>
                        </div>
                        <button className="btn_pro">BUTTON</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card_Pro