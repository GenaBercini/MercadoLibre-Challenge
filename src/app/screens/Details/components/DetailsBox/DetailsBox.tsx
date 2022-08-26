import {Stack, StackDivider} from "@chakra-ui/react";
import React from "react";

import {Product} from "../../types";

interface Props {
  product: Product;
}

const DetailsBox: React.FC<Props> = ({product}) => {
  return (
    <Stack
      backgroundColor="white"
      borderRadius="4px"
      boxShadow="base"
      direction="row"
      minWidth="1184px"
    >
      <Stack
        divider={<StackDivider borderColor="blackAlpha.200" width={730} />}
        margin={10}
        marginRight={0}
        maxWidth="768px"
      >
        {/* <Galery product={mock.product} />
        <Carrousel product={mock.product} />
        <FeaturesTable />
        <Description />
        <Review /> */}
      </Stack>
      <Stack maxWidth="368px" spacing={5} width="368px">
        <Stack
          marginBottom="3rem"
          marginTop="16px"
          paddingRight="16px"
          position="sticky"
          top="-35rem"
        >
          {/* <Information product={mock.product} />
          <InfoSeller />
          <MedioPago />
          <Promote />
          <MercadoShops /> */}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default DetailsBox;
