import { Box, Flex, Image, Text } from "@chakra-ui/react";
import NavBar from "../../components/NavBar";
import NftMeme from "../../assets/icons/nft_memes.jpg";
import CustomButton from "../../components/CustomButton/customButton";

const HomeTemp = () => {
  return (
    <NavBar>
      <Box className="background" pt="105px">
        <Box p="20px 60px" w="100%">
          <Flex textAlign="center" justifyContent="center">
            <Text fontWeight="700" mr="10px" fontSize={{ base: "25px", lg: "35px" }}>
              NFT NEXUS
            </Text>
            <Text fontWeight="light" fontSize={{ base: "25px", lg: "35px" }}>
              is here
            </Text>
          </Flex>
          <Box textAlign="center" fontSize={{ base: "16px", lg: "20px" }} fontWeight="light">
            <Text>Securely buy and sell your NFT on NFT Nexus with ease.</Text>
            <Text>Spend money smarter with NFT Nexus</Text>

            <Box w="100%" mt="40px">
              <Image src={NftMeme} alt="phone-icon" w="350px" mx="auto" />
            </Box>
          </Box>
        </Box>
        <Flex justifyContent="space-evenly" w={{ base: "70%", lg: "50%"}} mx="auto" display={{ base: "block", lg: "flex" }} mb="30px">
          <CustomButton
            w={{ base: "100%", lg: "250px" }}
            bg="black"
            border="1px solid black"
            color="white"
            hoverBg="white"
            hoverColor="black"
            testid="on-close"
            href="/market-place"
          >
            View marketplace
          </CustomButton>
        </Flex>
      </Box>
    </NavBar>
  );
};

export default HomeTemp;
