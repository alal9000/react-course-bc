import React from "react";

const Button2 = () => {
  // let count = 0;

  // const handleClick = (name) => {
  //   if (count < 3) {
  //     count++;
  //     console.log(`${name} you clicked me ${count} time/s`);
  //   }
  //   else {
  //     console.log(`${name} stop clicking me!`);
  //   }
  // };

  // const handleClick2 = (name) => console.log(`${name} stop clicking me`);

  // let a = 5;
  // let b = 7;
  // let c = 12;

  const handleClick3 = (e) => e.target.textContent = "Pooper 😄";

  // const handleClick4 = (name) => console.log(`${name} stop clicking me`);




  return <button onDoubleClick={(e) => handleClick3(e)}>Click Me 😀</button>;
};

export default Button2;
