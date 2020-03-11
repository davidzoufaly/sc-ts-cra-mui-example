import React from "react";
import SFilledBox from "../atomic/objects/SFilledBox";
import SFilledBoxInherited from "../atomic/objects/SFilledBoxInherited";
import { IMode } from "../../types/layoutTypes";

const Boxes: React.FC<IMode> = ({ Mode }) => {
  return (
    <>
      <SFilledBox Mode={Mode} />
      <SFilledBoxInherited Mode={Mode} />
    </>
  );
};

export default Boxes;
