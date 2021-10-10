import React, { useState } from "react";
import { Flex, Heading, Text } from "rebass";
import { useTheme } from "styled-components";
import dynamic from "next/dynamic";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Button from "components/Button";
const MintSolana = dynamic(() => import("components/mint/MintSolana"), {
  ssr: false,
});

const Mint = ({ date, dateOptions }) => {
  const { colors } = useTheme();
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <Flex
      pt={[6]}
      pb={[6]}
      height={["auto", "100vh"]}
      minHeight={["100vh", "auto"]}
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
        padding={[3, 0]}
      >
        <Heading fontSize={[5, 6]} fontWeight={[700]}>
          Start minting
        </Heading>
        <Heading
          fontSize={[3, 5]}
          fontWeight={[700]}
          color={colors.light1}
          textAlign="center"
          maxWidth={["600px"]}
          my={[4]}
        >
          Mint your freaky fish and explore the new frontier of Solana NFTs.
        </Heading>
        <Button onClick={onOpenModal}>How to mint multiple ?</Button>
        <MintSolana date={date} dateOptions={dateOptions} />
        <Modal
          open={open}
          onClose={onCloseModal}
          center
          styles={{
            modal: { borderRadius: "0.5rem", backgroundColor: colors.dark1 },
          }}
        >
          <Heading mb={[3]}>Mint multiple tokens with ease</Heading>
          <Text>
            We are using Metaplex Candy Machine. As of now it is not possible to
            mint multiple tokens with one transaction. So if you are going to
            mint 8 tokens then you'll have to approve 8 transactions from your
            wallet.
            <br />
            <br />
            If you are okay with multiple approval requests then you don't need
            to do anything.
            <br />
            <br />
            Else you'll have to give us auto approval access to your wallet. How
            to enable auto approval on Phantom Wallet:
            <ol>
              <li>Open wallet</li>
              <li>Click on Settings icon</li>
              <li>Click on "Trusted Apps" section</li>
              <li>Check "Auto-approve" for https://mint.freakyfish.fun/</li>
              <li>Mint multiple tokens</li>
              <li>Uncheck "Auto-approve" permission</li>
            </ol>
          </Text>
        </Modal>
      </Flex>
    </Flex>
  );
};

export default Mint;
