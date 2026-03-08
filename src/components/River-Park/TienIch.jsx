import React from "react";

import TienIchFirst from "./TienIchFirst";
import TienIchSecond from "./TienIchSecond";

const TienIch = () => {
  return (
    <div className="h-full w-full max-w-[1100px] mx-auto p-6">
      <TienIchSecond />
      <TienIchFirst />
      <div className="h-[100px]"></div>
    </div>
  );
};

export default TienIch;
