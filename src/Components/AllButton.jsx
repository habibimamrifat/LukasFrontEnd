const OrangeButton = ({ innerText }) => {
  return (
    <div className="w-full h-full bg-[#FD6F00] flex justify-center items-center text-white font-light text-xl leading-8 rounded-md">
      {innerText}
    </div>
  );
};

const ChangeOnCLickButton = ({
  innerText,
  id,
  selectedButton,
  setSelectedButton,
}) => {
  return (
    <div
      className={` border-[2px] flex justify-center items-center rounded-md font-light text-xl leading-8 ${
        id === selectedButton
          ? "bg-[#FD6F00] text-white border-[#FD6F00]"
          : "bg-[#F8F8F8] text-black border-[1px]"
      } transition-all duration-500 cursor-pointer`}
      onClick={() => setSelectedButton(id)}
    >
      <p className="mx-[20px]">{innerText}</p>
    </div>
  );
};
export { OrangeButton, ChangeOnCLickButton };
