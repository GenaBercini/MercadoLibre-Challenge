import {Box, Stack, Image} from "@chakra-ui/react";
import React, {useState} from "react";

import {Product} from "../../types";

const Galery: React.FC<Product> = ({product}: Product) => {
  const [mainImg, setMainImg] = useState({
    url: product.pictures[0].url,
    key: "",
  });

  const handleSelect = (idImg: string) => {
    let img = product.pictures.find((img: Product) => img.id === idImg);

    setMainImg({
      url: img.url,
      key: idImg,
    });
  };

  return (
    <Stack direction="row" height={568} margin={-6} marginBottom={3} width={768}>
      <Stack spacing={2}>
        {product.pictures?.map((img: Product) => (
          <Box key={img.id} height="50px" width="50px">
            <Image
              _hover={{
                border: "2px solid #3483fa;",
              }}
              border={img.id === mainImg.key ? "2px" : "1px"}
              borderColor={img.id === mainImg.key ? "#3483fa" : "blackAlpha.400"}
              borderRadius={4}
              boxSizing="border-box"
              cursor="pointer"
              cursos="pointer"
              height="100%"
              objectFit="contain"
              padding={img.id === mainImg.key ? "1px" : "2px"}
              src={img.url}
              width="100%"
              onMouseOver={() => handleSelect(img.id!)}
            />
          </Box>
        ))}
      </Stack>
      <Stack>
        <Box height="auto" marginRight={50} marginTop={8} minWidth={680}>
          <Image
            cursor="zoom-in"
            height="auto"
            margin="auto"
            objectFit="contain"
            src={mainImg.url}
          />
        </Box>
      </Stack>
    </Stack>
  );
};

export default Galery;
