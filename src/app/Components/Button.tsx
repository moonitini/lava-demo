"use client";

interface ButtonProps {
  text: string;
  icon?: boolean;
  onClick?: () => void;
}

const Button = ({ text, icon, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center bg-[#444EAA] text-white text-[14px] font-medium rounded-[4px] px-4 py-2 h-[36px]"
    >
      {icon && <span className="mr-2">+</span>}
      {text}
    </button>
  );
};

export default Button;
