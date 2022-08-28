import {Box, Link, Stack, Text} from "@chakra-ui/react";
import React from "react";

import mock from "../../utils/mock";

import s from "./style.module.css";

const Promote: React.FC = () => {
  return (
    <Stack border="1px solid" borderColor="blackAlpha.200" borderRadius="10px" padding="1rem">
      <Stack alignItems="baseline" direction="row" marginY="1.5rem" spacing={3}>
        <Text fontSize="18px" fontWeight={400}>
          Productos promocionados
        </Text>
        <Link fontSize="sm" fontWeight={400}>
          Anunciá aquí
        </Link>
      </Stack>
      <Stack marginBottom="1.5rem" spacing={6}>
        {mock.product.promoteProducts?.map((el) => (
          <Stack key={el.title} alignItems="flex-end" direction="row" spacing={5}>
            <img className={s.imagenes} height="82px" src={el.url} width="82px" />
            <Box>
              <Text fontSize="20px" fontWeight={400}>
                ${new Intl.NumberFormat("es-AR").format(el.price)}
              </Text>
              <Text color="#00a650" fontSize="sm" fontWeight="bold">
                Envío gratis
              </Text>
              <Text color="blackAlpha.800" fontSize="sm" lineHeight="1.3">
                {el.title}
              </Text>
            </Box>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Promote;
