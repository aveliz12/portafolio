import { ReactNode } from "react";
import "../../styles/line_hotizontal_styles.css";

interface LineHorizontalProps {
  text: ReactNode;
}

const LineHorizontal = ({ text }: LineHorizontalProps) => {
  return (
    <div className="line-horizontal-container">
      <div className="spot"></div>
      <div className="line-horizontal"></div>
      <h1 className="text">{text}</h1>
      <div className="line-horizontal"></div>
      <div className="spot"></div>
    </div>
  );
};

export default LineHorizontal;
