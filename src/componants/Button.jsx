import React from "react";

const Button = ({ content, type }) => {
  return (
    <button
      type={type}
      className="py-2 px-4 rounded-full border-black border-solid border-[1px] "
    >
      {content}
    </button>
  );
};

export default Button;
