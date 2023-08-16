import React from "react";

const Button = ({ variant = "solid", children = "Press me", ...rest }) => {
  //   solid, outline, ghost
  let className;
  if (variant === "solid") {
    className = "bg-blue-600 text-white p-2 px-4 rounded-md";
  } else if (variant === "outline") {
    className =
      "bg-white border border-black-600 py-2 px-4 rounded-md hover:bg-black hover:text-white";
  } else if (variant === "ghost") {
    className =
      "bg-white border-blue-600 py-2 px-4 rounded-md hover:bg-slate-400 ";
  }
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
};

export default Button;
