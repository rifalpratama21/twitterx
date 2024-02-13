import { Avatar, Box, Button, Card, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { BiMessageAltDetail } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";

const DetailThread: React.FC = () => {
  return (
    <Card mt={2} px={2}>
      <Flex gap={4}>
        <Avatar name="Dan Abrahmov" src="https://bit.ly/sage-adebayo" />
        <Box>
          <Text>masuklah</Text>
          <Text>@lahaa</Text>
        </Box>
      </Flex>
      <Text my={2}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim natus
        iure quo suscipit consequatur labore amet porro, doloribus, minima optio
        neque vero, laboriosam similique et architecto quaerat non aliquid
        repellat!
      </Text>
      <Flex gap={2} alignItems={"center"}>
        <Text>11.32 PM</Text>
        <Icon boxSize={2} color="gray" viewBox="0 0 200 200">
          <path
            fill="currentColor"
            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
          />
        </Icon>
        <Text>Jul 26.2024</Text>
      </Flex>
      <Flex gap={2} mt={2} alignItems="center">
        <Button bg="white" pl={0}>
          <Flex gap={2}>
            <FaRegHeart color="grey" size={21} />
            <Text color="gray" fontSize={16}>
              100
            </Text>
          </Flex>
        </Button>
        <Button bg="white">
          <Flex gap={2}>
            <BiMessageAltDetail color="gray" size={25} />
            <Text color="gray" marginTop="2px" fontSize={15}>
              1 Replies
            </Text>
          </Flex>
        </Button>
      </Flex>
    </Card>
  );
};

export default DetailThread;
