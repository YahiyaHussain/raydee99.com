import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import backgroundGif from "../assets/background.gif";

const Frame = (props: {
  children: ReactElement<any, string | JSXElementConstructor<any>> | undefined;
}) => {
  return (
    <div
      style={{
        backgroundImage: `url("${backgroundGif}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      {props.children}
    </div>
  );
};

export { Frame };
