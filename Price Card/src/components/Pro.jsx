function Pro(){
    const array_valid=["Unlimited Users","50GB Storage","Unlimited Public Projects","Community Access","Unlimited Private Projects","Dedicated Phone Support","Free Subdomain","Monthly Status Report"]
    return(
        <>
            {array_valid.map((element,index)=>(
                <p className="ptag-con">✔{element}</p>
            ))}
        </>
    )
}
export default Pro