function Plus_C(){
    const array_valid=["5 Users","50GB Storage","Unlimited Public Projects","Community Access","Unlimited Private Projects","Dedicated Phone Support","Free Subdomain"]
    return(
        <>
            {array_valid.map((element,index)=>(
                <p className="ptag-con">✔{element}</p>
            ))}
        </>
    )
}
export default Plus_C