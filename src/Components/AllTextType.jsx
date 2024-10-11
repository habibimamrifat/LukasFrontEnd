const NormalText =({innerText})=>{
    return(
        <div className="font-normal text-[21px] leading-8 text-black ">
            {innerText}
        </div>
    )
}
const HightLightText =({innerText})=>{
    return(
        <div className="font-bold text-[65px] leading-8 text-black ">
            {innerText}
        </div>
    )
}
const HMediumText =({innerText})=>{
    return(
        <div className="font-semibold text-[65px] leading-8 text-black ">
            {innerText}
        </div>
    )
}
const HSmallText =({innerText})=>{
    return(
        <div className="font-semibold text-[32px] leading-8 text-black ">
            {innerText}
        </div>
    )
}
const smallBoldText =({innerText})=>{
    return(
        <div className="font-semibold text-[24px] leading-8 text-black ">
            {innerText}
        </div>
    )
}

export{NormalText,MediumHText}