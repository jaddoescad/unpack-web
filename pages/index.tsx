import { Box, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import NavigationBar from "../components/NavigationBar";
import HomeFeed from "../components/HomeFeed";
import BodyWrapper from "components/BodyWrapper";

const Home: NextPage = () => {
  return (
    <Box bg="gray.800" h="100vh" overflow={"scroll"}>
      <NavigationBar />
      <BodyWrapper>
        <HomeFeed />
      </BodyWrapper>
    </Box>
  );
};
export default Home;
