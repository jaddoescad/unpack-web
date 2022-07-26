import React from "react";
import { Box, Img, Flex, Button } from "@chakra-ui/react";
import Link from "next/link";

interface NavigationBarProps {}

export const NavigationBar: React.FC<NavigationBarProps> = ({}) => {
  return (
    <Flex
      sx={{ position: "sticky", top: "0" }}
      bg="white"
      h="60px"
      w="100%"
      boxShadow="0 0 3px 1px #A9A9A9"
      alignItems={"center"}
      pl="20px"
      pr="20px"
      zIndex={"200"}
    >
      <Box h="35px" mr="auto">
        <Link href="/">
          <a>
            <Img
              h="100%"

              src="https://firebasestorage.googleapis.com/v0/b/unpack-a295d.appspot.com/o/web-assets%2Flogo-horizontal.png?alt=media&token=11acba04-3e31-422e-8139-24261833145c"
            ></Img>
          </a>
        </Link>
      </Box>

      <Button variant="outline" borderColor={"black"}>
        Login
      </Button>
    </Flex>
  );
};

export default NavigationBar;
