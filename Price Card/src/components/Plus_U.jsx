function Plus_U(){
    const array_unvalid=["Monthly Status Report"]
    return(
        <>
            {array_unvalid.map((element,index)=>(
                <p className="ptag-con1">✖{element}</p>
            ))}
        </>
    )
}
export default Plus_U