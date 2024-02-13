import {
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Suggest: React.FC = () => {
  return (
    <>
      <Card px="20px" py="10px" mx={4} my={2}>
        <Heading my={2} fontSize={18}>
          Suggested For You
        </Heading>
        <Flex direction="column" gap={2}>
          <Flex justifyContent="space-between">
            <Flex gap={2}>
              <Avatar name="obeng" src="https://bit.ly/tioluwani-kolawole" />
              <Box>
                <Text>robin</Text>
                <Text mt={-1}>@robin</Text>
              </Box>
            </Flex>

            <Button>following</Button>
          </Flex>
          <Flex justifyContent="space-between">
            <Flex gap={2}>
              <Avatar name="obeng" src="https://bit.ly/tioluwani-kolawole" />
              <Box>
                <Text>robin</Text>
                <Text mt={-1}>@robin</Text>
              </Box>
            </Flex>

            <Button>follow</Button>
          </Flex>
        </Flex>
      </Card>
    </>
  );
};

export default Suggest;
