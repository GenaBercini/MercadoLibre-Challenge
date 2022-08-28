import {Image, Link, Stack, StackDivider, Text} from "@chakra-ui/react";
import React from "react";
import {GoLocation} from "react-icons/go";

const InfoSeller: React.FC = () => {
  return (
    <Stack border="1px solid" borderColor="blackAlpha.200" borderRadius="10px" padding="1rem">
      <Text fontSize="18px" marginY={4}>
        Información sobre el vendedor
      </Text>
      <Stack spacing={6}>
        <Stack direction="row" marginTop={1.5}>
          <GoLocation />
          <Stack lineHeight={1} spacing={1}>
            <Text>Ubicación</Text>
            <Text color="blackAlpha.600" fontSize="sm">
              Villa Pueyrredón, Capital Federal
            </Text>
          </Stack>
        </Stack>
        <Stack direction="row">
          <Image
            height="20px"
            src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/medal.svg"
            width="20px"
          />
          <Stack lineHeight={1} spacing={1}>
            <Text color="#00a650" fontWeight={400}>
              MercadoLíder Platinum
            </Text>
            <Text color="blackAlpha.600" fontSize="sm">
              ¡Es uno de los mejores del sitio!
            </Text>
          </Stack>
        </Stack>
      </Stack>
      <Stack>
        <Stack alignItems="center" direction="row" marginY={3}>
          <Stack backgroundColor="#fff0f0" height="8px" width="20%" />
          <Stack backgroundColor="#fff5e8" height="8px" width="20%" />
          <Stack backgroundColor="#fffcda" height="8px" width="20%" />
          <Stack backgroundColor="#f1fdd7" height="8px" width="20%" />
          <Stack backgroundColor="#39b54a" height="12px" width="20%" />
        </Stack>
      </Stack>
      <Stack>
        <Stack
          alignItems="center"
          direction="row"
          divider={<StackDivider borderColor="blackAlpha.300" />}
        >
          <Stack alignItems="center" marginTop={-5} spacing={2} width="33.33%">
            <Text fontSize="24px">1040</Text>
            <Text color="blackAlpha.700" fontSize="xs" lineHeight={1} textAlign="center">
              Ventas en los últimos 60 dias
            </Text>
          </Stack>
          <Stack alignItems="center" marginTop={-3} spacing={2} width="33.33%">
            <Image
              height="30px"
              lineHeight={1}
              src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/message-positive.svg"
              width="30px"
            />
            <Text color="blackAlpha.700" fontSize="xs" lineHeight={1} textAlign="center">
              Brinda buena atención
            </Text>
          </Stack>
          <Stack alignItems="center" spacing={2} width="33.33%">
            <Image
              height="30px"
              lineHeight={1}
              src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/time-positive.svg"
              width="30px"
            />
            <Text color="blackAlpha.700" fontSize="xs" lineHeight={1} textAlign="center">
              Despacha sus productos a tiempo
            </Text>
          </Stack>
        </Stack>
      </Stack>
      <Link fontSize="sm">
        <Text marginY={3}>Ver más datos de este vendedor</Text>
      </Link>
    </Stack>
  );
};

export default InfoSeller;
