import { Card, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer: React.FC = () => {
  return (
    <Card p={4} mx={4}>
      <Flex alignItems="center" gap={2}>
        <Text>Develop By Rifal</Text>
        <Icon boxSize={2} color="gray" mt={1} viewBox="0 0 200 200">
          <path
            fill="currentColor"
            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
          />
        </Icon>
        <FaGithub />
        <FaLinkedin />
        <FaFacebook />
        <FaInstagram />
      </Flex>
    </Card>
  );
};

export default Footer;
