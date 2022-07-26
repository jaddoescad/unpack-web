import React from "react";
import { Box, Img, Flex, Button, Image } from "@chakra-ui/react";
import Link from "next/link";

interface HomeAlbumProps {}

export const HomeAlbum: React.FC<HomeAlbumProps> = ({}) => {
  return (
    <Link href="/album">
      <a>
        <Box position="relative" m="10" w="300px" h="300px">
          <Flex
            padding={"20px"}
            rounded={"30px"}
            zIndex="1"
            position="absolute"
            w="100%"
            h="100%"
            bg="rgba(178,80,80,0.6)"
            flexDirection={"column"}
          >
            <Flex>
              <Img
                w="30px"
                h="30px"
                borderRadius={"full"}
                src="data:image/jpeg;base64,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"
              ></Img>
              <Box
                zIndex="2"
                color="white"
                ml="7px"
                mt="2px"
                fontWeight={"semibold"}
              >
                jadslim.lens
              </Box>
            </Flex>
            <Box
              w="100%"
              textAlign={"center"}
              fontSize="xl"
              fontWeight={"semibold"}
              color="white"
              mt={"auto"}
            >
              My trip to Turkey
            </Box>
          </Flex>
          <Image
            objectFit="cover"
            w="100%"
            h="100%"
            rounded={"30px"}
            alt="image"
            position="absolute"
            src="https://firebasestorage.googleapis.com/v0/b/unpack-a295d.appspot.com/o/test%2Fturkey-travel-guide-best-time-to-visit-turkey-balloons-cappadocia.jpeg?alt=media&token=e375283e-02da-47d3-a8f4-f98e588b3818"
          ></Image>
        </Box>
      </a>
    </Link>
  );
};

export default HomeAlbum;
