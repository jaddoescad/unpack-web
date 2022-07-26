import { Flex, Box, Img } from "@chakra-ui/react";
import type { NextPage } from "next";
import { SimpleGrid } from "@chakra-ui/react";
import Link from "next/link";
import NavigationBar from "components/NavigationBar";
import { m } from "framer-motion";

const srces = [
  "data:image/jpeg;base64,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",
"https://blog.goway.com/globetrotting/wp-content/uploads/2019/07/Hot-air-balloons-in-the-sky-at-sunset-Cappadocia-Turkey-_1282756450.jpg",
"https://kir2ben.com/wp-content/uploads/sites/8811/2022/02/Turkey-Vacation-Cappadocia-Travel-Istanbul-Vacation_0001.jpg",
"https://lp-cms-production.imgix.net/2022-01/GettyImages-1066077754.jpg?auto=format&q=40&fit=crop&w=280&h=360",
"https://d24l7zeiclq6su.cloudfront.net/img/p/8242/c199964.jpg",
"https://www.propertyturkey.com/uploads/pages/larg/cappadocia_6.jpg",
"https://quivertreeworld.com/wp-content/uploads/2020/02/Turkey-Mosque.jpg",
"https://cdn1.matadornetwork.com/blogs/1/2015/08/Istanbul-6-edit-560x420.jpg",
"https://www.wendyperrin.com/wp-content/uploads/2021/08/Wendy-Turkey-gulet-with-Doug-.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO2cYltaiHHeWlBRYCmRydQEBvi1yf4iHeQA&usqp=CAU",
"https://cdn.madeinturkeytours.com/wp-content/uploads/2020/04/travel-checklist-families-planning-trip-turkey.jpg",
"https://s3.amazonaws.com/ocn-media/3e7fad3b-4830-415a-a4de-e4f6cf6af8f0.jpeg"


];

const Album: NextPage = () => {
  return (
    <Box bg="gray.800" h="100vh" overflow={"scroll"}>
      <NavigationBar />
      <Box
        color="white"
        fontSize={"2xl"}
        fontWeight="medium"
        p={2}
        w="100%"
        textAlign={"center"}
      >
        My trip to Turkey
      </Box>
      <Box
        padding={4}
        w="100%"
        maxW="900px"
        mx="auto"
        sx={{ columnCount: [1, 2, 3], columnGap: "8px" }}
      >
        {srces.map((src) => (
          <Img
            key={src}
            w="100%"
            mb={2}
            objectFit={"cover"}
            src={src}
            alt="Alt"
          />
        ))}
      </Box>
    </Box>
  );
};
export default Album;
