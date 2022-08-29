import {Box, Stack, Text, Image, StackDivider} from "@chakra-ui/react";
import React from "react";
import {useHistory} from "react-router-dom";

import {Product} from "../../Details/types";

const Card: React.FC<Product> = ({product}: Product) => {
  const history = useHistory();

  return (
    <Stack
      _hover={{
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
      }}
      backgroundColor="white"
      border="1px solid"
      borderColor="gray.200"
      borderRadius="4px"
      boxShadow="base"
      cursor="pointer"
      divider={<StackDivider />}
      height={368}
      width={224}
      onClick={() => history.push("/details")}
    >
      <Box marginBottom="-19px">
        <Image height="100%" objectFit="contain" src={product.pictures[0].url} width={224} />
      </Box>
      <Stack padding="5px 1rem 1rem 1rem" spacing={0}>
        <Text color="#333" fontSize="24px">
          ${new Intl.NumberFormat("es-AR").format(product.price)}
        </Text>
        {product.price! >= 4000 ? (
          <Text color="#00a650" fontSize="14px" fontWeight="bold" margin={0}>
            Envio Gratis
          </Text>
        ) : (
          ""
        )}
        <Text color="blackAlpha.800" fontSize="14px">
          {product.title.length > 50 && product.price! >= 4000
            ? product.title.substring(0, 50) + "..."
            : product.title}
        </Text>
      </Stack>
    </Stack>
  );
};

export default Card;
