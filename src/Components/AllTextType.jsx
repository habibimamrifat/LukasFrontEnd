const NormalText = ({ innerText,position }) => {
  return (
    <div className={`font-normal text-[21px] leading-8 ${position === "service"? "text-black":"text-textColor"}`}>
      {innerText}
    </div>
  );
};
const HightLightText = ({ innerText }) => {
  return (
    <div className="font-bold text-5xl lg:text-[100px] lg:leading-[135px] text-textColor">
      {innerText}
    </div>
  );
};
const HMediumText = ({ innerText }) => {
  return (
    <div className="font-semibold text-3xl lg:text-[65px] lg:leading-8 text-textColor">
      {innerText}
    </div>
  );
};
const HSmallText = ({ innerText,position }) => {
  return (
    <div className={`font-semibold text-xl lg:text-[32px] leading-8 ${position === "service"? "text-black":"text-textColor"}`}>
      {innerText}
    </div>
  );
};
const SmallBoldText = ({ innerText }) => {
  return (
    <div className="font-semibold text-xl lg:text-[24px] leading-8 text-textColor">
      {innerText}
    </div>
  );
};

export { NormalText, HSmallText, SmallBoldText, HMediumText, HightLightText };
