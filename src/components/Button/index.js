import React, { memo } from "react";

function Button({ title }) {
  return <button>{title}</button>;
}

// const Button = memo(ButtonComponent);
export default Button;
