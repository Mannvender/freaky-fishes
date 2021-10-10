import React from "react";

import Mint from "components/Mint";
import { MINT_DATE, DATE_OPTIONS } from "messages";

const Index = () => {
  return (
    <>
      <Mint date={MINT_DATE} dateOptions={DATE_OPTIONS} />
    </>
  );
};

export default Index;
