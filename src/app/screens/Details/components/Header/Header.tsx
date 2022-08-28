import {Link, Stack, Text, StackDivider, Icon} from "@chakra-ui/react";
import React from "react";
import {VscChevronRight} from "react-icons/vsc";

const Header: React.FC = () => {
  return (
    <Stack fontSize={14} marginBottom={2} minWidth="1184px" spacing={5}>
      <Stack direction="row" marginTop={2}>
        <Text fontWeight="bold">También puede interesarte:</Text>
        <Text>squishmallows</Text>
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <Stack
          direction="row"
          divider={<StackDivider alignSelf="center" borderColor="blackAlpha.300" height={3} />}
        >
          <Text marginRight={1}>Volver al listado</Text>
          <Stack alignItems="baseline" direction="row" marginLeft={1}>
            <Link>Juegos y Juguetes</Link>
            <Icon alignSelf="center" as={VscChevronRight} color="blackAlpha.700" />
            <Link>Peluches</Link>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          divider={<StackDivider alignSelf="center" borderColor="blackAlpha.300" height={3} />}
          spacing={3}
        >
          <Link>Compartir</Link>
          <Link>Vender uno igual</Link>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Header;
