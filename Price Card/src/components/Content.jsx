function Content(){
    const array_valid=["Single User","50GB Storage","Unlimited Public Projects","Community Access"]
    return(
        <>
            {array_valid.map((element,index)=>(
                <p className="ptag-con">✔{element}</p>
            ))}
        </>
    )
}
export default Content