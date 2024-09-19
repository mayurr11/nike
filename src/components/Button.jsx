const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth
}) => {
  
  const buttonStyles = backgroundColor
    ? `${backgroundColor} ${borderColor} ${textColor}`
    : "text-white border-coral-red bg-coral-red";

  return (
    <button
      className={`flex items-center justify-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${buttonStyles} ${fullWidth && `w-full`}`}
    >
      {label}

      {iconURL && (
        <img src={iconURL} alt="icon" className="ml-2 rounded-full w-5 h-5" />
      )}
    </button>
  );
};

export default Button;
