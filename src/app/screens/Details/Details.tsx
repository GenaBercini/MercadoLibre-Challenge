import {Stack} from "@chakra-ui/react";
import React from "react";

import Bottom from "./components/Bottom/Bottom";
import DetailsBox from "./components/DetailsBox/DetailsBox";
import Header from "./components/Header/Header";
import InterestCarrousel from "./components/InterestCarrousel/InterestCarrousel";
import {Product} from "./types";
import mock from "./utils/mock";

interface Props {
  product: Product;
}

const DetailsScreen: React.FC<Props> = ({product = mock.product}) => {
  return (
    <Stack backgroundColor="#ededed" minWidth="1184px">
      <Header />
      <DetailsBox product={product} />
      <Bottom />
      <InterestCarrousel product={product} title="Productos promocionados" />
      <InterestCarrousel product={product} title="Quienes vieron este producto también compraron" />
      <InterestCarrousel
        product={product}
        title="Quienes compraron este producto también compraron"
      />
    </Stack>
  );
};

export default DetailsScreen;
