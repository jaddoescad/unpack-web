import React from "react";
import { Box, Img, Flex, Button } from "@chakra-ui/react";

interface BodyWrapperProps {
  children: JSX.Element;
}

export const BodyWrapper: React.FC<BodyWrapperProps> = ({ children }) => {
  return (
    <Box w="100%" mx="auto" maxW="900px">
      {children}
    </Box>
  );
};

export default BodyWrapper;
