import React from "react";
import {
  Stack,
  Image,
  Text,
  Input,
  Icon,
  StackDivider,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Container,
  Box,
} from "@chakra-ui/react";
import {AiOutlineSearch} from "react-icons/ai";
import {BiChevronDown} from "react-icons/bi";
import {IoLocationOutline, IoCartOutline} from "react-icons/io5";

import logo from "../../../assets/logo.png";
import navheader from "../../../assets/banner.webp";
import {categories} from "../../utils/categoriesmock";

const NavBar: React.FC = () => {
  return (
    <Box backgroundColor="primary.500" boxShadow="base" minWidth="1184px" paddingY={2}>
      <Container maxWidth="container.xl" minWidth="1184px">
        <Stack minWidth="1184px" spacing={1}>
          <Stack direction={{base: "column", md: "row"}} justifyContent="space-between">
            <Stack direction="row" flex={1} spacing={14}>
              <Image objectFit="contain" src={logo} />
              <Stack
                alignItems="center"
                backgroundColor="white"
                borderRadius="sm"
                boxShadow="base"
                direction="row"
                divider={<StackDivider />}
                maxWidth={600}
                padding={2}
                width="100%"
              >
                <Input
                  _placeholder={{color: "blackAlpha.400"}}
                  paddingX={2}
                  placeholder="Busca productos, marcas y más..."
                  variant="unstyled"
                />
                <Icon as={AiOutlineSearch} color="gray.500" cursor="pointer" height={5} width={7} />
              </Stack>
            </Stack>
            <Stack alignItems="center" direction="row">
              <Image
                alt="Suscribite al nivel 6 con beneficios exclusivos"
                display={{base: "none", md: "flex"}}
                height={39}
                objectFit="contain"
                src={navheader}
                title="Suscribite al nivel 6 con beneficios exclusivos"
              />
            </Stack>
          </Stack>

          <Stack alignItems="baseline" direction="row" justifyContent="space-between">
            <Stack alignItems="baseline" direction="row" spacing="4.3rem">
              <Stack
                _hover={{borderColor: "blackAlpha.200", borderRadius: 5}}
                alignItems="center"
                borderColor="#FFFFFF00"
                borderWidth={1}
                cursor="pointer"
                direction="row"
                padding={0.5}
                spacing={0}
              >
                <Icon as={IoLocationOutline} color="blackAlpha.700" height={6} width={6} />
                <Stack spacing={-1}>
                  <Text color="blackAlpha.600" fontSize="xs" lineHeight="normal">
                    Enviar a
                  </Text>
                  <Text fontSize="sm" lineHeight="normal">
                    Santa Fe 2000
                  </Text>
                </Stack>
              </Stack>
              <Stack
                color="blackAlpha.600"
                direction="row"
                flex={1}
                fontSize="sm"
                maxWidth={600}
                spacing={4}
                width="100%"
              >
                <Menu>
                  <MenuButton _hover={{color: "blackAlpha.800"}} display="flex">
                    <Stack alignItems="center" direction="row" spacing={1}>
                      <Text>Categorías</Text>
                      <BiChevronDown />
                    </Stack>
                  </MenuButton>
                  <MenuList background="#333" border="none" color="white" paddingY="1.5rem">
                    {categories &&
                      categories.map((el) => (
                        <MenuItem
                          key={el}
                          _focus={{bg: "#3483fa"}}
                          _hover={{bg: "#3483fa"}}
                          paddingLeft="2em"
                          paddingRight="4rem"
                        >
                          {el}
                        </MenuItem>
                      ))}
                  </MenuList>
                </Menu>
                <Text _hover={{color: "blackAlpha.800"}} cursor="pointer" transition="0.3s">
                  Ofertas
                </Text>
                <Text _hover={{color: "blackAlpha.800"}} cursor="pointer" transition="0.3s">
                  Historial
                </Text>
                <Text _hover={{color: "blackAlpha.800"}} cursor="pointer" transition="0.3s">
                  Supermercado
                </Text>
                <Text _hover={{color: "blackAlpha.800"}} cursor="pointer" transition="0.3s">
                  Moda
                </Text>
                <Text _hover={{color: "blackAlpha.800"}} cursor="pointer" transition="0.3s">
                  Vender
                </Text>
                <Text _hover={{color: "blackAlpha.800"}} cursor="pointer" transition="0.3s">
                  Ayuda
                </Text>
              </Stack>
            </Stack>
            <Stack alignItems="center" direction="row" fontSize="sm" spacing={5}>
              <Text
                _hover={{color: "blackAlpha.900"}}
                color="blackAlpha.800"
                cursor="pointer"
                transition="0.3s"
              >
                Creá tu cuenta
              </Text>
              <Text
                _hover={{color: "blackAlpha.900"}}
                color="blackAlpha.800"
                cursor="pointer"
                transition="0.3s"
              >
                Ingresá
              </Text>
              <Text
                _hover={{color: "blackAlpha.900"}}
                color="blackAlpha.800"
                cursor="pointer"
                transition="0.3s"
              >
                Mis compras
              </Text>
              <Icon
                _hover={{color: "blackAlpha.900"}}
                as={IoCartOutline}
                color="blackAlpha.800"
                cursor="pointer"
                height={6}
                transition="0.3s"
                width={6}
              />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default NavBar;
