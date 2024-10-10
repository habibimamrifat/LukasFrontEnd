const OrangeButton = ({ innerText }) => {
  return( 
  <div className="w-full h-full bg-[#FD6F00] flex justify-center items-center text-white font-light text-xl leading-8 rounded-md">
    {innerText}
  </div>
  )
};

const ChangeOnCLickButton =({ innerText })=>{
return(
    <div className="border-[1px] bg-[#F8F8F8] border-[#545454] flex justify-center items-center rounded-md font-light text-xl leading-8">
         {innerText}
    </div>
)
}
export { OrangeButton,ChangeOnCLickButton };
