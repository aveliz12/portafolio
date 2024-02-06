import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import AnimatedProgressProvider from "../../helpers/AnimatedProgressProvider";

import "../../styles/animated_progress_prov_styles.css";
type Props = {
  percentage: number;
};

const ProgressBar = ({ percentage }: Props) => {
  return (
    <div className="container-progress">
      <AnimatedProgressProvider
        valueStart={0}
        valueEnd={percentage}
        duration={1500}
        easingFunction={(t) => t}
      >
        {(value) => (
          <CircularProgressbar
            className="progress-container"
            value={value}
            text={`${Math.round(value)}%`}
            styles={buildStyles({
              textSize: "20px",
              textColor: "#314c53",
              pathColor: `#5a7f78`,
              trailColor: "#bbdec6",
            })}
          />
        )}
      </AnimatedProgressProvider>
    </div>
  );
};

export default ProgressBar;
