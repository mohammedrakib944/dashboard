import React, { ReactNode, MouseEvent } from "react";

interface ButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
  ghost?: boolean;
  icon?: ReactNode;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  className,
  disabled = false,
  ghost,
  icon,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex h-fit gap-2 py-2 px-4 rounded-md duration-150 items-center text-sm
      ${
        ghost
          ? "text-accent  hover:bg-primary/10"
          : "bg-accent text-white hover:bg-primary/90"
      }
      ${className}
      `}
    >
      <span className="text-xl">{icon}</span>
      {children}
    </button>
  );
};

export default Button;
