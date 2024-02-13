import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../component/SideBar";
import MyProfile from "../component/MyProfile";
import Suggest from "../component/Suggest";
import Footer from "../component/Footer";
import DetailThread from "../component/DetailThread";

export default function DtThread() {
  return (
    <Flex w="full">
      <Box w="20%" display={{ base: "none", md: "block" }}>
        <Sidebar />
      </Box>
      <Box
        w={{ base: "100%", md: "50%" }}
        px={{ base: "10px", md: "0px" }}
        py={2}
      >
        <DetailThread />
      </Box>
      <Box w="30%" display={{ base: "none", md: "block" }}>
        <MyProfile />
        <Suggest />
        <Footer />
      </Box>
    </Flex>
  );
}
