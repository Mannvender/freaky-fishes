import React from "react";
import { useTheme } from "styled-components";

import Mint from "components/Mint";
import { MINT_DATE, DATE_OPTIONS } from "messages";

const Index = () => {
  const { colors } = useTheme();
  return (
    <>
      <Mint date={MINT_DATE} dateOptions={DATE_OPTIONS} />
    </>
  );
};

export default Index;
