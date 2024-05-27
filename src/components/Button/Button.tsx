import { FC } from "react";
import "./Button.scss";

interface ButtonProps {
  buttonTitle: string;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ buttonTitle, onClick }) => {
  return <button onClick={onClick}>{buttonTitle}</button>;
};

export default Button;
