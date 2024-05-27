import { FC, ReactNode } from "react";
import "./ScreenTemplate.scss";
import Button from "../Button/Button";

interface ScreenTemplateProps {
  children: ReactNode;
  title: string;
  buttonTitle: string;
  contentTitle: string;
  onButtonClick: () => void;
}

const ScreenTemplate: FC<ScreenTemplateProps> = ({
  children,
  title,
  buttonTitle,
  contentTitle,
  onButtonClick,
}) => {
  return (
    <div className="wrapper">
      <div className="header">
        <h3 className="title">{title}</h3>
        <Button onClick={onButtonClick} buttonTitle={buttonTitle} />
      </div>
      <div className="content">
        <h3 className="content-title">{contentTitle}</h3>
        {children}
      </div>
    </div>
  );
};

export default ScreenTemplate;
