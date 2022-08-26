import React from "react";
import {Container, Stack} from "@chakra-ui/react";

import Routes from "./routes";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  return (
    <Stack backgroundColor="#EDEDED">
      <NavBar />
      <Container
        alignSelf="center"
        maxWidth="container.xl"
        minHeight={"100vh"}
        mt="10px"
        paddingX={"15px"}
      >
        <Routes />
      </Container>
      <Footer />
    </Stack>
  );
};

export default App;
