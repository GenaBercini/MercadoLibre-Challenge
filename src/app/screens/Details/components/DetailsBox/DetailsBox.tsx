import {Stack, StackDivider} from "@chakra-ui/react";
import React from "react";

import {Product} from "../../types";
import Carrousel from "../Carrousel/Carrousel";
import Description from "../Description/Description";
import FeaturesTable from "../FeaturesTable/FeaturesTable";
import Galery from "../Galery/Galery";
import Information from "../Information/Information";
import InfoSeller from "../InfoSeller/InfoSeller";
import Payment from "../Payment/Payment";
import MercadoShops from "../MercadoShops.tsx/MercadoShops";
import Promote from "../Promote/Promote";
import Review from "../Review/Review";

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
        <Galery product={product} />
        <Carrousel product={product} />
        <FeaturesTable />
        <Description />
        <Review />
      </Stack>
      <Stack maxWidth="368px" spacing={5} width="368px">
        <Stack
          marginBottom="3rem"
          marginTop="16px"
          paddingRight="16px"
          position="sticky"
          top="-35rem"
        >
          <Information product={product} />
          <InfoSeller />
          <Payment />
          <Promote />
          <MercadoShops />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default DetailsBox;
