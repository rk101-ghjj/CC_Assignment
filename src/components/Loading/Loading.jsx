import React from "react";
import { MutatingDots } from "react-loader-spinner";

const Loading = ({
  size = 80,
  color = "#4fa94d",
  text = "Loading",
  showDots = true,
  dotSize = 100,
  dotColor = "#4fa94d",
  textColor = "green",
  textStyle = {},
}) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      {showDots && (
        <MutatingDots
          height={dotSize}
          width={dotSize}
          color={dotColor}
          secondaryColor={dotColor}
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          visible={true}
        />
      )}
      <span
        style={{
          fontSize: "30px",
          color: textColor,
          fontWeight: "bold",
          letterSpacing: "1.5px",
          ...textStyle,
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default Loading;
