const NormalText = ({ innerText,position }) => {
  return (
    <div className={`font-normal text-[21px] leading-8 ${position === "service"? "text-black":"text-textColor"}  dark:mix-blend-difference`}>
      {innerText}
    </div>
  );
};
const HightLightText = ({ innerText }) => {
  return (
    <div className="font-bold text-[100px] leading-[135px] text-textColor  dark:mix-blend-difference">
      {innerText}
    </div>
  );
};
const HMediumText = ({ innerText }) => {
  return (
    <div className="font-semibold text-[65px] leading-8 text-textColor  dark:mix-blend-difference">
      {innerText}
    </div>
  );
};
const HSmallText = ({ innerText,position }) => {
  return (
    <div className={`font-semibold text-[32px] leading-8 ${position === "service"? "text-black":"text-textColor"}  dark:mix-blend-difference`}>
      {innerText}
    </div>
  );
};
const SmallBoldText = ({ innerText }) => {
  return (
    <div className="font-semibold text-[24px] leading-8 text-textColor  dark:mix-blend-difference">
      {innerText}
    </div>
  );
};

export { NormalText, HSmallText, SmallBoldText, HMediumText, HightLightText };
