import React from "react";
import { Box, Img, Flex, Button } from "@chakra-ui/react";
import HomeAlbum from "./HomeAlbum";

interface HomeFeedProps {}

export const HomeFeed: React.FC<HomeFeedProps> = ({}) => {
  return (
    <Flex flexWrap={"wrap"} maxW={"900px"} w="100%" flex="1" justifyContent={"center"}>
      <HomeAlbum />
      <HomeAlbum />
      <HomeAlbum />
      <HomeAlbum />
      <HomeAlbum />
    </Flex>
  );
};

export default HomeFeed;
