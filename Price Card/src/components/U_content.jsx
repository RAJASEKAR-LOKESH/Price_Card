function U_content(){
    const array_unvalid=["Unlimited Private Projects","Dedicated Phone Support","Free Subdomain","Monthly Status Report"]
    return(
        <>
            {array_unvalid.map((element,index)=>(
                <p className="ptag-con1">✖{element}</p>
            ))}
        </>
    )
}
export default U_content