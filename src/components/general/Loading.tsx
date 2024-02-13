import { ReactNode, useEffect, useState } from "react";
import ReactLoading from "react-loading";
import "../../styles/loading_styles.css";
type Props = {
  children: ReactNode;
};

const Loading = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => setIsLoading(false), 1500);

    return () => clearTimeout(timeOut);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className={`loading-overlay loading-enter`}>
          <ReactLoading type="spokes" color="#bbdec6" width={90} height={90} />
        </div>
      ) : (
        <>
          <div className={`loading-overlay loading-exit`}></div>
          {children}
        </>
      )}
    </>
  );
};

export default Loading;
