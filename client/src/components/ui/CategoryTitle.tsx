import React from "react";
import { Box, Text } from '@chakra-ui/react';

type CategoryAndItemsPropsType = {
    category: string;
}

export default function CategoryTitle({ category }: CategoryAndItemsPropsType): JSX.Element {
  return (
    <Box
    width="100%"
    backgroundColor="green.500"
    rounded="xl"
    transition="0.3s ease-in-out"
    alignItems="center"
    _hover={{ backgroundColor: 'green.300', transition: '0.3s ease-in-out' }}
  >
    <Box
      position="relative"
      rounded="xl"
      mt={3}
      width="200px"
      height="50px"
      backgroundColor="blue.500"
      clipPath="polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      mb={1}
    >
      <Text color="white" fontSize="lg">
        {category}
      </Text>
    </Box>
  </Box>
  );
}
