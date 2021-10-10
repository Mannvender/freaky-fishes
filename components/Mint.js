import React from "react";
import { Box, Flex, Heading } from "rebass";
import styled, { useTheme } from "styled-components";
import Image from "next/image";
import dynamic from "next/dynamic";
const MintSolana = dynamic(() => import("components/mint/MintSolana"), {
  ssr: false,
});

const Mint = ({ date, dateOptions }) => {
  const { colors } = useTheme();
  return (
    <Flex
      pt={[6]}
      pb={[6]}
      height={["100vh"]}
      sx={{
        background: `linear-gradient(90deg, ${colors.accent1} 10%, ${colors.primary} 100%)`,
      }}
      alignItems="center"
    >
      <Flex
        maxWidth={["1024px"]}
        margin={["0 auto"]}
        flexDirection={["column"]}
        alignItems="center"
        height={["max-content"]}
      >
        <Heading fontSize={[6]} fontWeight={[700]}>
          Start minting
        </Heading>
        <Heading
          fontSize={[5]}
          fontWeight={[700]}
          color={colors.light1}
          textAlign="center"
          maxWidth={["600px"]}
          mt={[4]}
        >
          Mint your freaky fish and explore the new frontier of Solana NFTs.
        </Heading>
        <MintSolana date={date} dateOptions={dateOptions} />
      </Flex>
    </Flex>
  );
};

export default Mint;
