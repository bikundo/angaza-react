import React from 'react';
import {
  ChakraProvider,
  Box,
  List,
  ListItem,
  ListIcon,
  Link,
  VStack,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Todo from './Todo';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
              <Todo />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
