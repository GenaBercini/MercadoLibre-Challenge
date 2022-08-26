import {Stack, Text, Image, IconButton, Icon} from "@chakra-ui/react";
import React from "react";
import {CgCopyright} from "react-icons/cg";
import {IoLogoGithub, IoLogoLinkedin, IoIosGlobe} from "react-icons/io";

const Footer: React.FC = () => {
  return (
    <Stack
      alignItems="center"
      backgroundColor="#ffffff"
      border="1px solid #e6e6e6"
      marginTop="2rem"
    >
      <Stack marginTop={2}>
        <Stack direction="row" justifyContent="space-evenly" lineHeight={1}>
          <a href="https://github.com/GenaBercini" target="blank_">
            <IconButton
              _hover={{color: "#000000"}}
              aria-label="Github"
              as={IoLogoGithub}
              backgroundColor="#ffffff"
              color="#9F9F9F"
              cursor="pointer"
              transition="0.5s"
            />
          </a>
          <a href="https://www.linkedin.com/in/genarobercini/" target="blank_">
            <IconButton
              _hover={{color: "#0e76a8"}}
              aria-label="LinkedIn"
              as={IoLogoLinkedin}
              backgroundColor="#ffffff"
              color="#9F9F9F"
              cursor="pointer"
              href="https://www.linkedin.com/in/genarobercini/"
              transition="0.5s"
            />
          </a>
          <a href="https://genarobercini.vercel.app/" target="blank_">
            <IconButton
              _hover={{color: "#00243d"}}
              aria-label="Portfolio"
              as={IoIosGlobe}
              backgroundColor="#ffffff"
              color="#9F9F9F"
              cursor="pointer"
              transition="0.5s"
            />
          </a>
        </Stack>
        <Stack alignItems="center" direction="row" justifyContent="center" lineHeight={1}>
          <Icon as={CgCopyright} color="black" height={5} width={5} />
          <Text color="#333" fontSize="16px" fontWeight="400">
            Este sitio no es una página oficial de Mercado Libre, fue hecho con fines completamente
            educativos.
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
